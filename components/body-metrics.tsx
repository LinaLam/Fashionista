"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Ruler, Scale, Calendar, Heart } from "lucide-react"

interface BodyMetricsProps {
  onNext: (data: any) => void
  userData: any
}

export default function BodyMetrics({ onNext, userData }: BodyMetricsProps) {
  const [height, setHeight] = useState(userData.height || 170)
  const [weight, setWeight] = useState(userData.weight || 65)
  const [age, setAge] = useState(userData.age || 25)
  const [bodyType, setBodyType] = useState(userData.bodyType || "")
  const [size, setSize] = useState(userData.size || "")

  // Avatar customization sliders
  const [shoulderWidth, setShoulderWidth] = useState([50])
  const [waistSize, setWaistSize] = useState([50])
  const [hipSize, setHipSize] = useState([50])
  const [bustSize, setBustSize] = useState([50])

  const handleNext = () => {
    onNext({
      height,
      weight,
      age,
      bodyType,
      size,
      avatarSettings: {
        shoulderWidth: shoulderWidth[0],
        waistSize: waistSize[0],
        hipSize: hipSize[0],
        bustSize: bustSize[0],
      },
    })
  }

  const isValid = height && weight && age && size

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
          <User className="h-8 w-8 text-rose-700" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Body Details</h2>
        <p className="text-gray-600 max-w-md mx-auto">Help us create an accurate avatar and recommend the best fits for your unique body type</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <Card className="border-rose-900/10 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center gap-2 text-rose-800">
              <Ruler className="h-5 w-5" />
              Basic Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="height" className="text-sm font-medium text-gray-700">Height (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  placeholder="170"
                  className="min-h-[44px] touch-manipulation border-rose-900/10 focus:border-rose-500 focus:ring-rose-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight" className="text-sm font-medium text-gray-700">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  placeholder="65"
                  className="min-h-[44px] touch-manipulation border-rose-900/10 focus:border-rose-500 focus:ring-rose-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="age" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Age
              </Label>
              <Input
                id="age"
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                placeholder="25"
                className="min-h-[44px] touch-manipulation border-rose-900/10 focus:border-rose-500 focus:ring-rose-500"
              />
            </div>

            {/* <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Body Type</Label>
              <Select value={bodyType} onValueChange={setBodyType} >
                <SelectTrigger className="border-rose-900/10 focus:border-rose-500 focus:ring-rose-500">
                  <SelectValue placeholder="Select body type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pear">🍐 Pear</SelectItem>
                  <SelectItem value="apple">🍎 Apple</SelectItem>
                  <SelectItem value="hourglass">⏳ Hourglass</SelectItem>
                  <SelectItem value="rectangle">📦 Rectangle</SelectItem>
                  <SelectItem value="inverted-triangle">🔺 Inverted Triangle</SelectItem>
                </SelectContent>
              </Select>
            </div> */}

            <div className="space-y-2">
              <Label className="text-nd font-medium text-gray-700">Clothing Size</Label>
              <Select value={size} onValueChange={setSize}>
                <SelectTrigger className="border-rose-900/10 focus:border-rose-500 focus:ring-rose-500">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="xs" className="hover:bg-rose-50 focus:bg-rose-50 cursor-pointer">XS</SelectItem>
                  <SelectItem value="s" className="hover:bg-rose-50 focus:bg-rose-50 cursor-pointer">S</SelectItem>
                  <SelectItem value="m" className="hover:bg-rose-50 focus:bg-rose-50 cursor-pointer">M</SelectItem>
                  <SelectItem value="l" className="hover:bg-rose-50 focus:bg-rose-50 cursor-pointer">L</SelectItem>
                  <SelectItem value="xl" className="hover:bg-rose-50 focus:bg-rose-50 cursor-pointer">XL</SelectItem>
                  <SelectItem value="xxl" className="hover:bg-rose-50 focus:bg-rose-50 cursor-pointer">XXL</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card className="border-rose-900/10 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center gap-2 text-rose-800">
              <Heart className="h-5 w-5" />
              Avatar Customization
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Enhanced avatar preview */}
            <div className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-xl p-6 text-center border border-rose-900/10">
              <div className="text-sm font-medium text-rose-800 mb-4">Preview</div>
              <div className="mx-auto w-32 h-40 bg-gradient-to-b from-rose-100 to-rose-200 rounded-lg relative shadow-inner flex items-center justify-center">
                {/* Head with face details */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-rose-300 rounded-full border-2 border-rose-900/20">
                  {/* Eyes */}
                  <div className="absolute top-3 left-2 w-1.5 h-1.5 bg-rose-900 rounded-full"></div>
                  <div className="absolute top-3 right-2 w-1.5 h-1.5 bg-rose-900 rounded-full"></div>
                  {/* Nose */}
                  <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-rose-900 rounded-full"></div>
                  {/* Mouth */}
                  <div className="absolute top-7 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-rose-900 rounded-full"></div>
                </div>

                {/* Neck */}
                <div className="absolute top-9 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-rose-300 rounded-full"></div>

                {/* Shoulders - responsive to shoulder width slider */}
                <div
                  className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-rose-400 rounded-full"
                  style={{
                    width: `${16 + (shoulderWidth[0] / 100) * 16}px`,
                    height: "8px",
                  }}
                />

                {/* Torso - responsive to bust and waist sliders */}
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                  {/* Upper torso (bust area) */}
                  <div
                    className="bg-rose-400 rounded-full"
                    style={{
                      width: `${12 + (bustSize[0] / 100) * 12}px`,
                      height: "12px",
                    }}
                  />
                  {/* Lower torso (waist area) */}
                  <div
                    className="bg-rose-500 rounded-full mt-1"
                    style={{
                      width: `${8 + (waistSize[0] / 100) * 8}px`,
                      height: "10px",
                    }}
                  />
                </div>

                {/* Hips - responsive to hip size slider */}
                <div
                  className="absolute top-28 left-1/2 transform -translate-x-1/2 bg-rose-400 rounded-full"
                  style={{
                    width: `${14 + (hipSize[0] / 100) * 14}px`,
                    height: "10px",
                  }}
                />

                {/* Arms */}
                <div className="absolute top-14 left-1/2 transform -translate-x-1/2 flex justify-between" style={{ width: `${20 + (shoulderWidth[0] / 100) * 8}px` }}>
                  <div className="w-2 h-6 bg-rose-300 rounded-full"></div>
                  <div className="w-2 h-6 bg-rose-300 rounded-full"></div>
                </div>

                {/* Legs */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                  <div className="w-3 h-10 bg-rose-300 rounded-b"></div>
                  <div className="w-3 h-10 bg-rose-300 rounded-b"></div>
                </div>
              </div>

              <div className="mt-4 text-xs text-rose-700">
                Adjust sliders to customize your avatar
              </div>
            </div>
            <div className="space-y-5">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label className="text-sm font-medium text-gray-700">Shoulder Width</Label>
                  <span className="text-xs font-medium px-2 py-1 rounded-full">{shoulderWidth[0]}%</span>
                </div>
                <div className="relative">
                  <Slider
                    value={shoulderWidth}
                    onValueChange={setShoulderWidth}
                    max={100}
                    step={1}
                    className="touch-manipulation bg-rose-900/10 [&>span]:shadow-lg [&>span]:transition-transform"
                  />
                  <div className="absolute inset-0 pointer-events-none">
                    <div
                      className="h-2 bg-gradient-to-r from-rose-400 to-rose-500 rounded-full transition-all duration-50"
                      style={{ width: `${shoulderWidth[0]}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label className="text-sm font-medium text-gray-700">Waist Size</Label>
                  <span className="text-xs font-medium px-2 py-1 rounded-full">{waistSize[0]}%</span>
                </div>
                <div className="relative">
                  <Slider
                    value={waistSize}
                    onValueChange={setWaistSize}
                    max={100}
                    step={1}
                    className="touch-manipulation bg-rose-900/10 [&>span]:shadow-lg [&>span]:transition-transform"
                  />
                  <div className="absolute inset-0 pointer-events-none">
                    <div
                      className="h-2 bg-gradient-to-r from-rose-400 to-rose-500 rounded-full transition-all duration-50"
                      style={{ width: `${waistSize[0]}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label className="text-sm font-medium text-gray-700">Hip Size</Label>
                  <span className="text-xs font-medium px-2 py-1 rounded-full">{hipSize[0]}%</span>
                </div>
                <div className="relative">
                  <Slider
                    value={hipSize}
                    onValueChange={setHipSize}
                    max={100}
                    step={1}
                    className="touch-manipulation bg-rose-900/10 [&>span]:shadow-lg [&>span]:transition-transform"
                  />
                  <div className="absolute inset-0 pointer-events-none">
                    <div
                      className="h-2 bg-gradient-to-r from-rose-400 to-rose-500 rounded-full transition-all duration-50"
                      style={{ width: `${hipSize[0]}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label className="text-sm font-medium text-gray-700">Bust Size</Label>
                  <span className="text-xs font-medium px-2 py-1 rounded-full">{bustSize[0]}%</span>
                </div>
                <div className="relative">
                  <Slider
                    value={bustSize}
                    onValueChange={setBustSize}
                    max={100}
                    step={1}
                    className="touch-manipulation bg-rose-900/10 [&>span]:shadow-lg [&>span]:transition-transform"
                  />
                  <div className="absolute inset-0 pointer-events-none">
                    <div
                      className="h-2 bg-gradient-to-r from-rose-400 to-rose-500 rounded-full transition-all duration-50"
                      style={{ width: `${bustSize[0]}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>
      </div>

      <Button
        onClick={handleNext}
        disabled={!isValid}
        className="w-full bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-700 hover:to-orange-700 text-white font-semibold min-h-[52px] touch-manipulation shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next, tell us your style preferences
      </Button>
    </div>
  )
}
