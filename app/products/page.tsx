import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Search, LayoutGrid, Menu, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ProductsPage() {
  const categories = [
    { name: "Shoes", image: "/placeholder.svg?height=80&width=80" },
    { name: "Casual", image: "/placeholder.svg?height=80&width=80" },
    { name: "Outwear", image: "/placeholder.svg?height=80&width=80" },
    { name: "Party", image: "/placeholder.svg?height=80&width=80" },
  ]

  const products = [
    {
      id: "1",
      name: "Black Hoodie",
      rating: 4.9,
      reviews: 180,
      price: 399.0,
      image: "/placeholder.svg?height=200&width=150",
    },
    {
      id: "2",
      name: "Brown Suede Jacket",
      rating: 4.9,
      reviews: 360,
      price: 499.0,
      image: "/placeholder.svg?height=200&width=150",
    },
    {
      id: "3",
      name: "Beige Beanie & Scarf",
      rating: 4.8,
      reviews: 120,
      price: 120.0,
      image: "/placeholder.svg?height=200&width=150",
    },
    {
      id: "4",
      name: "Grey Plaid Shirt",
      rating: 4.7,
      reviews: 210,
      price: 150.0,
      image: "/placeholder.svg?height=200&width=150",
    },
  ]

  return (
    <div className="min-h-screen bg-rose-50 pb-20">
      {" "}
      {/* Added pb-20 for bottom nav */}
      <div className="container mx-auto px-4 py-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <span className="text-rose-700 font-semibold">MENS</span>
            <ChevronDown className="h-4 w-4 text-rose-700" />
          </div>
          <h1 className="text-3xl font-bold text-rose-700">Serene</h1>
          <Link href="/search">
            <Button variant="ghost" size="icon" className="text-rose-700">
              <Search className="h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Categories */}
        <div className="flex space-x-4 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((category) => (
            <div key={category.name} className="flex-shrink-0 text-center">
              <div className="w-20 h-20 rounded-full bg-rose-200 flex items-center justify-center overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  width={60}
                  height={60}
                  objectFit="cover"
                />
              </div>
              <span className="text-sm text-rose-700 mt-2 block">{category.name}</span>
            </div>
          ))}
        </div>

        {/* Products Header */}
        <div className="flex justify-between items-center mt-6 mb-4">
          <h2 className="text-xl font-bold text-rose-700">PRODUCTS</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" className="bg-rose-200 border-rose-300 text-rose-700">
              <LayoutGrid className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="bg-rose-200 border-rose-300 text-rose-700">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <Card key={product.id} className="bg-white border-rose-200 rounded-lg overflow-hidden">
              <CardContent className="p-2">
                <div className="relative w-full h-48 mb-2">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <p className="text-sm font-medium text-rose-700 truncate">{product.name}</p>
                <div className="flex items-center text-xs text-rose-500 mt-1">
                  <Star className="h-3 w-3 fill-rose-400 text-rose-400 mr-1" />
                  <span>
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                <p className="text-sm font-semibold text-rose-700 mt-1">${product.price.toFixed(2)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
