"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingBag, ArrowLeft, Sparkles } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface OutfitItem {
  id: string
  name: string
  brand: string
  price: number
  image: string
  category: "top" | "bottom" | "shoes" | "accessory"
  url: string
}

interface Outfit {
  id: string
  items: OutfitItem[]
  totalPrice: number
  occasion: string
}

export default function OutfitsPage() {
  const [loading, setLoading] = useState(true)
  const [outfits, setOutfits] = useState<Outfit[]>([])
  const [savedOutfits, setSavedOutfits] = useState<string[]>([])
  const [userProfile, setUserProfile] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    // Load user profile
    const profile = localStorage.getItem("userProfile")
    if (!profile) {
      router.push("/onboarding")
      return
    }
    setUserProfile(JSON.parse(profile))

    // Simulate outfit generation
    generateOutfits()
  }, [router])

  const generateOutfits = async () => {
    setLoading(true)

    // Simulate AI processing time
    await new Promise((resolve) => setTimeout(resolve, 4000))

    // Mock outfit generation based on user preferences
    const mockOutfits: Outfit[] = [
      {
        id: "1",
        occasion: "Work Professional",
        totalPrice: 189,
        items: [
          {
            id: "1-1",
            name: "Silk Blouse",
            brand: "Everlane",
            price: 78,
            category: "top",
            image: "/placeholder.svg?height=200&width=150",
            url: "#",
          },
          {
            id: "1-2",
            name: "High-Waist Trousers",
            brand: "COS",
            price: 89,
            category: "bottom",
            image: "/placeholder.svg?height=200&width=150",
            url: "#",
          },
          {
            id: "1-3",
            name: "Pointed Toe Flats",
            brand: "Everlane",
            price: 22,
            category: "shoes",
            image: "/placeholder.svg?height=200&width=150",
            url: "#",
          },
        ],
      },
      {
        id: "2",
        occasion: "Casual Weekend",
        totalPrice: 156,
        items: [
          {
            id: "2-1",
            name: "Oversized Sweater",
            brand: "Uniqlo",
            price: 49,
            category: "top",
            image: "/placeholder.svg?height=200&width=150",
            url: "#",
          },
          {
            id: "2-2",
            name: "Wide Leg Jeans",
            brand: "Mango",
            price: 69,
            category: "bottom",
            image: "/placeholder.svg?height=200&width=150",
            url: "#",
          },
          {
            id: "2-3",
            name: "White Sneakers",
            brand: "Veja",
            price: 38,
            category: "shoes",
            image: "/placeholder.svg?height=200&width=150",
            url: "#",
          },
        ],
      },
      {
        id: "3",
        occasion: "Date Night",
        totalPrice: 234,
        items: [
          {
            id: "3-1",
            name: "Wrap Dress",
            brand: "Reformation",
            price: 128,
            category: "top",
            image: "/placeholder.svg?height=200&width=150",
            url: "#",
          },
          {
            id: "3-2",
            name: "Strappy Heels",
            brand: "Zara",
            price: 59,
            category: "shoes",
            image: "/placeholder.svg?height=200&width=150",
            url: "#",
          },
          {
            id: "3-3",
            name: "Delicate Necklace",
            brand: "Mejuri",
            price: 47,
            category: "accessory",
            image: "/placeholder.svg?height=200&width=150",
            url: "#",
          },
        ],
      },
    ]

    setOutfits(mockOutfits)
    setLoading(false)
  }

  const toggleSaveOutfit = (outfitId: string) => {
    setSavedOutfits((prev) => (prev.includes(outfitId) ? prev.filter((id) => id !== outfitId) : [...prev, outfitId]))
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-rose-50 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="animate-spin h-16 w-16 border-b-2 border-rose-600 mx-auto"></div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Creating Your Perfect Outfits</h2>
            <p className="text-gray-600 max-w-md">
              Our AI is analyzing your preferences and generating personalized outfit recommendations...
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-rose-50">
      <div className="container mx-auto px-4 py-4 sm:py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-between mb-8">
            <div className="flex items-center gap-4">
              <Link href="/onboarding">
                <Button variant="ghost" className="min-h-[44px] touch-manipulation">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Personalized Outfits Tailored for You</h1>
              </div>
            </div>
            <Link href="/closet">
              <Button variant="outline" className="min-h-[44px] touch-manipulation bg-transparent">
                <Heart className="h-4 w-4 mr-2" />
                My Closet ({savedOutfits.length})
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {outfits.map((outfit, index) => (
              <Card key={outfit.id} className="overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Outfit {index + 1}</CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleSaveOutfit(outfit.id)}
                      className={`${savedOutfits.includes(outfit.id) ? "text-red-500" : "text-gray-400"} min-h-[44px] touch-manipulation`}
                    >
                      <Heart className={`h-5 w-5 ${savedOutfits.includes(outfit.id) ? "fill-current" : ""}`} />
                    </Button>
                  </div>
                  <Badge variant="secondary">{outfit.occasion}</Badge>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {outfit.items.map((item) => (
                      <div key={item.id} className="text-center">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-24 object-cover mb-2"
                        />
                        <p className="text-xs font-medium truncate">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.brand}</p>
                        <p className="text-xs font-semibold">${item.price}</p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold">Total:</span>
                      <span className="text-xl font-bold text-rose-700">${outfit.totalPrice}</span>
                    </div>

                    <div className="space-y-2">
                      <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white min-h-[44px] touch-manipulation">
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Shop This Look
                      </Button>
                      <Button variant="outline" className="w-full border-rose-600 bg-rose-50 hover:bg-rose-100 text-rose-700 min-h-[44px] touch-manipulation">
                        <Sparkles className="h-4 w-4 mr-2" />
                        Show Similar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              onClick={generateOutfits}
              variant="outline"
              size="lg"
              className="border-rose-200 hover:bg-rose-200 bg-transparent min-h-[44px] touch-manipulation"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Generate New Outfits
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
