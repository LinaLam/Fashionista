"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, Check } from "lucide-react"

interface UserData {
  [key: string]: unknown
}

interface ColorAnalysisProps {
  onNext: (data: UserData) => void
  userData: UserData
}

// Mock color palettes based on seasonal color analysis
const colorPalettes = {
  spring: {
    name: "Bright Spring",
    colors: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7", "#DDA0DD"],
    description: "Warm, clear, and bright colors that complement your natural vibrancy",
  },
  summer: {
    name: "Cool Summer",
    colors: ["#B8B8FF", "#FFB8E6", "#B8FFE6", "#E6B8FF", "#FFE6B8", "#B8E6FF"],
    description: "Soft, muted colors with cool undertones",
  },
  autumn: {
    name: "Deep Autumn",
    colors: ["#8B4513", "#CD853F", "#A0522D", "#D2691E", "#B22222", "#228B22"],
    description: "Rich, warm, and earthy tones",
  },
  winter: {
    name: "Clear Winter",
    colors: ["#000080", "#8B0000", "#4B0082", "#008B8B", "#FF1493", "#00CED1"],
    description: "Bold, clear colors with cool undertones",
  },
}

export default function ColorAnalysis({ onNext }: ColorAnalysisProps) {
  const [analyzing, setAnalyzing] = useState(true)
  const [selectedPalette, setSelectedPalette] = useState<keyof typeof colorPalettes>("spring")

  useEffect(() => {
    // Simulate AI analysis
    const timer = setTimeout(() => {
      setAnalyzing(false)
      // Mock analysis result - in real app, this would be AI-generated
      const palettes = Object.keys(colorPalettes) as (keyof typeof colorPalettes)[]
      setSelectedPalette(palettes[Math.floor(Math.random() * palettes.length)])
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleConfirm = () => {
    onNext({
      colorPalette: selectedPalette,
      colors: colorPalettes[selectedPalette].colors,
    })
  }

  if (analyzing) {
    return (
      <div className="text-center space-y-6">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-earth-700 mx-auto"></div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Analyzing Your Style</h2>
          <p className="text-gray-600">Our AI is analyzing your photos to determine your perfect color palette...</p>
        </div>
      </div>
    )
  }

  const palette = colorPalettes[selectedPalette]

  return (
    <div className="space-y-6">
      <div className="text-center w-full flex flex-col items-center">
        <Palette className="h-12 w-12 text-rose-700 mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">Your Color Analysis</h2>
        <Badge variant="default" className="flex flex-col text-md w-full px-4 py-2 mt-4 bg-rose-600/10 text-rose-800 border">
          We think { }
          {palette.name}
          { } suit you best based on your skin tone:
          <p className="text-rose-900/60 text-sm mt-2">{palette.description}</p>
        </Badge>
      </div>

      <Card className="bg-none border-none rounded-sm shadow-none">
        <CardContent className="">
          <div className="grid grid-cols-3 gap-2 mb-6">
            {palette.colors.map((color, index) => (
              <div key={index} className="relative">
                <div
                  className="w-full h-36 rounded-sm shadow-sm relative"
                  style={{ backgroundColor: color }}
                >
                  <span className="absolute bottom-2 right-2 text-sm font-semibold text-white drop-shadow-md">
                    {color}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Alternative Palettes */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-rose-900 text-center">
          Try Other Palettes
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(colorPalettes).map(([key, value]) => (
            <Button
              key={key}
              variant={selectedPalette === key ? "default" : "ghost"}
              onClick={() => setSelectedPalette(key as keyof typeof colorPalettes)}
              className={`h-auto py-2 px-4 transition-all duration-200 rounded-full flex justify-center items-center text-rose-900/80 border border-rose-900/20 ${selectedPalette === key
                ? "bg-rose-600 hover:bg-rose-700 text-white shadow-lg"
                : "hover:bg-rose-600/10"
                }`}
            >
              <div className="flex items-center gap-3">
                {selectedPalette === key && (
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5" />
                  </div>
                )}
                <div className="text-left">
                  <div className="font-medium">{value.name}</div>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-4">
        <Button
          onClick={handleConfirm}
          className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Confirm My Color Palette
        </Button>
      </div>
    </div>
  )
}
