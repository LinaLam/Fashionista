"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import PhotoUpload from "@/components/photo-upload"
import ColorAnalysis from "@/components/color-analysis"
import BodyMetrics from "@/components/body-metrics"
import StylePreferences from "@/components/style-preferences"
import OptionalConstraints from "@/components/optional-constraints"

const steps = [
  { id: "photos", title: "Upload Photos", component: PhotoUpload },
  { id: "colors", title: "Color Analysis", component: ColorAnalysis },
  { id: "body", title: "Body Details", component: BodyMetrics },
  { id: "style", title: "Style Preferences", component: StylePreferences },
  { id: "constraints", title: "Preferences", component: OptionalConstraints },
]

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [userData, setUserData] = useState({})
  const router = useRouter()

  const progress = ((currentStep + 1) / steps.length) * 100

  const handleNext = (data: any) => {
    setUserData((prev) => ({ ...prev, ...data }))

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Save user data and redirect to outfit generation
      localStorage.setItem("userProfile", JSON.stringify({ ...userData, ...data }))
      router.push("/outfits")
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    } else {
      router.push("/")
    }
  }

  const CurrentComponent = steps[currentStep].component

  return (
    <div className="min-h-screen bg-rose-50">
      <div className="container mx-auto px-4 py-4 sm:py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <Button variant="ghost" onClick={handleBack} className="min-h-[44px] text-rose-700">
                <ArrowLeft className="h-4 w-4 mr-2 text-rose-700" />
                Back
              </Button>
              <span className="text-sm text-rose-700">
                Step {currentStep + 1} of {steps.length}
              </span>
            </div>
            <Progress
              value={progress}
              className="mb-4 h-3 bg-rose-200"
              indicatorClassName="bg-rose-600"
            />
            <h1 className="text-2xl font-bold text-center">{steps[currentStep].title}</h1>
          </div>

          <Card>
            <CardContent className="p-4 sm:p-6">
              <CurrentComponent onNext={handleNext} userData={userData} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
