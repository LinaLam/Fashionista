import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Info, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-rose-50 pb-20">
      {" "}
      {/* Added pb-20 for bottom nav */}
      <div className="container mx-auto px-4 py-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <Link href="/">
            <Button variant="ghost" size="icon" className="text-rose-700">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-rose-700 uppercase">Membership</h1>
          <Button variant="ghost" size="icon" className="text-rose-700">
            <Info className="h-5 w-5" />
          </Button>
        </div>

        {/* Membership Card */}
        <Card className="bg-rose-100 border-rose-300 shadow-md mb-6">
          <CardContent className="p-4">
            <p className="text-rose-700 font-semibold text-lg mb-1">Alex Warren - Gold</p>
            <p className="text-rose-600 text-sm mb-4">Total Points: 1500</p>
            <div className="flex justify-center space-x-2 mb-4">
              <Star className="h-10 w-10 fill-rose-400 text-rose-400" />
              <Star className="h-10 w-10 fill-rose-400 text-rose-400" />
              <Star className="h-10 w-10 fill-rose-400 text-rose-400" />
            </div>
            <p className="text-rose-600 text-xs text-center">Using Points Will Not Affect Level Progression</p>
          </CardContent>
        </Card>

        {/* Rewards Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-rose-700">REWARDS</h2>
            <Button variant="link" className="text-rose-700 text-sm px-0">
              VIEW ALL
            </Button>
          </div>
          <div className="space-y-4">
            <Card className="bg-white border-rose-200">
              <CardContent className="p-4 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Image src="/placeholder.svg?height=24&width=24" alt="Money Bag" width={24} height={24} />
                  </div>
                  <div>
                    <p className="text-rose-700 font-medium">$15 CASHBACK ON PAYMENT</p>
                    <p className="text-rose-600 text-sm">1000 points</p>
                  </div>
                </div>
                <Button variant="outline" className="bg-rose-200 border-rose-300 text-rose-700">
                  CLAIM
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white border-rose-200 opacity-50">
              <CardContent className="p-4 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Image src="/placeholder.svg?height=24&width=24" alt="Money Bag" width={24} height={24} />
                  </div>
                  <div>
                    <p className="text-rose-700 font-medium">$40 CASHBACK ON PAYMENT</p>
                    <p className="text-rose-600 text-sm">2000 points</p>
                  </div>
                </div>
                <Button variant="outline" disabled className="bg-rose-200 border-rose-300 text-rose-700">
                  CLAIM
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Offer Card */}
        <Card className="bg-rose-700 text-white rounded-lg overflow-hidden">
          <CardContent className="p-4 flex items-center space-x-4">
            <div className="flex-shrink-0 w-24 h-24 relative">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Leather Jacket"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div>
              <p className="text-xs text-rose-300 mb-1">ONLY FOR ME</p>
              <p className="text-sm font-semibold mb-1">USE CODE: GET20%OFF</p>
              <p className="text-2xl font-bold">UP TO</p>
              <p className="text-4xl font-bold">20% OFF</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
