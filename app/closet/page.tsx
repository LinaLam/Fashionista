"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingBag, ArrowLeft, Trash2 } from "lucide-react"
import Link from "next/link"

export default function ClosetPage() {
  const [savedOutfits, setSavedOutfits] = useState<any[]>([])

  useEffect(() => {
    // In a real app, this would fetch from a database
    // For now, we'll use mock data
    const mockSavedOutfits = [
      {
        id: "1",
        occasion: "Work Professional",
        totalPrice: 189,
        savedAt: new Date().toISOString(),
        items: [
          {
            id: "1-1",
            name: "Silk Blouse",
            brand: "Everlane",
            price: 78,
            image: "/placeholder.svg?height=200&width=150",
          },
          {
            id: "1-2",
            name: "High-Waist Trousers",
            brand: "COS",
            price: 89,
            image: "/placeholder.svg?height=200&width=150",
          },
          {
            id: "1-3",
            name: "Pointed Toe Flats",
            brand: "Everlane",
            price: 22,
            image: "/placeholder.svg?height=200&width=150",
          },
        ],
      },
    ]
    setSavedOutfits(mockSavedOutfits)
  }, [])

  const removeOutfit = (outfitId: string) => {
    setSavedOutfits((prev) => prev.filter((outfit) => outfit.id !== outfitId))
  }

  return (
    <div className="min-h-screen bg-rose-50">
      <div className="container mx-auto px-4 py-4 sm:py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/outfits">
              <Button variant="ghost" className="min-h-[44px] touch-manipulation">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Outfits
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Closet</h1>
              <p className="text-gray-600">Your saved outfit collections</p>
            </div>
          </div>

          {savedOutfits.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <Heart className="h-12 w-12 sm:h-16 sm:w-16 text-gray-300 mx-auto mb-4" />
                <h2 className="text-xl font-semibold mb-2">No saved outfits yet</h2>
                <p className="text-gray-600 mb-6">Start saving outfits you love to build your personal collection</p>
                <Link href="/outfits">
                  <Button className="bg-rose-600 hover:bg-rose-700 text-white min-h-[44px] touch-manipulation">
                    Browse Outfits
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {savedOutfits.map((outfit) => (
                <Card key={outfit.id} className="overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Saved Outfit</CardTitle>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeOutfit(outfit.id)}
                        className="text-gray-400 hover:text-red-500 min-h-[44px] touch-manipulation"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <Badge variant="secondary">{outfit.occasion}</Badge>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-2">
                      {outfit.items.map((item: any) => (
                        <div key={item.id} className="text-center">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-full h-24 object-cover rounded mb-2"
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

                      <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white min-h-[44px] touch-manipulation">
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Shop This Look
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
