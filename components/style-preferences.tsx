"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, X, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"

interface StylePreferencesProps {
  onNext: (data: any) => void
  userData: any
}

const styleArchetypes = [
  {
    id: "minimalist",
    name: "Minimalist",
    description: "Clean lines, neutral colors, simple silhouettes",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    id: "bohemian",
    name: "Bohemian",
    description: "Flowy fabrics, earthy tones, layered accessories",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    id: "classic",
    name: "Classic",
    description: "Timeless pieces, structured fits, elegant details",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    id: "edgy",
    name: "Edgy",
    description: "Bold patterns, leather, statement pieces",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    id: "romantic",
    name: "Romantic",
    description: "Soft fabrics, floral prints, feminine details",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    id: "sporty",
    name: "Sporty",
    description: "Athletic wear, comfortable fits, functional pieces",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    id: "glamorous",
    name: "Glamorous",
    description: "Luxe fabrics, bold colors, statement jewelry",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    id: "casual",
    name: "Casual",
    description: "Relaxed fits, everyday comfort, versatile pieces",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    id: "vintage",
    name: "Vintage",
    description: "Retro styles, unique patterns, nostalgic pieces",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    id: "preppy",
    name: "Preppy",
    description: "Polished looks, classic patterns, refined details",
    image: "/placeholder.svg?height=300&width=200",
  },
]

export default function StylePreferences({ onNext, userData }: StylePreferencesProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [likes, setLikes] = useState<string[]>([])
  const [dislikes, setDislikes] = useState<string[]>([])
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  const currentStyle = styleArchetypes[currentIndex]
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      handleDislike()
    } else if (isRightSwipe) {
      handleLike()
    }
  }

  const handleLike = () => {
    setLikes((prev) => [...prev, currentStyle.id])
    nextStyle()
  }

  const handleDislike = () => {
    setDislikes((prev) => [...prev, currentStyle.id])
    nextStyle()
  }

  const nextStyle = () => {
    if (currentIndex < styleArchetypes.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      onNext({
        stylePreferences: { likes, dislikes },
        preferredStyles: likes,
      })
    }
  }

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      // Remove the current style from likes/dislikes if it was added
      const currentId = styleArchetypes[currentIndex].id
      setLikes((prev) => prev.filter((id) => id !== currentId))
      setDislikes((prev) => prev.filter((id) => id !== currentId))
    }
  }

  const progress = ((currentIndex + 1) / styleArchetypes.length) * 100

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="text-center">
        <Sparkles className="h-10 w-10 sm:h-12 sm:w-12 text-earth-700 mx-auto mb-3 sm:mb-4" />
        <h2 className="text-lg sm:text-xl font-semibold mb-2">Style Preferences</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 px-2">
          Swipe right to like, left to dislike, or use the buttons
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-3 sm:mb-4">
          <div
            className="bg-earth-700 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-gray-500">
          {currentIndex + 1} of {styleArchetypes.length}
        </p>
      </div>

      <div className="relative max-w-sm mx-auto">
        {/* Navigation arrows for desktop */}
        <Button
          variant="ghost"
          size="sm"
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden sm:flex"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Card
          ref={cardRef}
          className="overflow-hidden border-none shadow-none touch-manipulation"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <CardContent className="p-4 sm:p-6 text-center">
            <img
              src={currentStyle.image || "/placeholder.svg"}
              alt={currentStyle.name}
              className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{currentStyle.name}</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 px-2">{currentStyle.description}</p>

            <div className="flex justify-center gap-4 sm:gap-6">
              <Button
                variant="outline"
                onClick={handleDislike}
                className="border-red-300 bg-red-100 hover:bg-red-200 text-red-700 min-h-16 min-w-32 text-lg font-semibold touch-manipulation"
              >
                Not my style
              </Button>
              <Button
                onClick={handleLike}
                className="border-green-300 bg-green-100 hover:bg-green-200 text-green-700 min-h-16 min-w-32 text-lg font-semibold touch-manipulation"
              >
                Love this!
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Navigation arrows for desktop */}
        <Button
          variant="ghost"
          size="sm"
          onClick={nextStyle}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden sm:flex"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Mobile back button */}
      {currentIndex > 0 && (
        <div className="text-center sm:hidden">
          <Button variant="ghost" onClick={goToPrevious} className="min-h-[44px] touch-manipulation">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous Style
          </Button>
        </div>
      )}

      {likes.length > 0 && (
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">Styles you liked:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {likes.map((styleId) => {
              const style = styleArchetypes.find((s) => s.id === styleId)
              return (
                <Badge key={styleId} variant="secondary" className="text-xs">
                  {style?.name}
                </Badge>
              )
            })}
          </div>
        </div>
      )}

      {/* Swipe instruction for mobile */}
      <div className="text-center sm:hidden">
        <p className="text-xs text-gray-400">💡 Swipe left to dislike, right to like</p>
      </div>
    </div>
  )
}
