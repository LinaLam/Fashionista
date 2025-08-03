"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-center p-4">
      <div className="relative w-full max-w-md mx-auto">
        {/* Background Cards */}
        <div className="absolute top-12 right-80 w-full h-[520px] bg-white rounded-xl overflow-hidden shadow-md z-0 transform -rotate-6">
          <Image
            src="/images/intro/uniqlo-intro-2.jpg"
            alt="Casual Style"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-rose-50/30 via-transparent to-transparent" />
        </div>

        <div className="absolute top-12 left-80 w-full h-[520px] bg-white rounded-xl overflow-hidden shadow-md z-10 transform rotate-6">
          <Image
            src="/images/intro/uniqlo-intro.jpeg"
            alt="Classic Style"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-rose-50/20 via-transparent to-transparent" />
        </div>

        {/* Main Card */}
        <div className="relative w-full h-[500px] sm:h-[600px] bg-white rounded-xl overflow-hidden shadow-xl z-20">
          <Image
            src="/images/intro/intro-image.webp"
            alt="Brown Suede Jacket"
            fill
            className="object-cover z-0"
          />
          <div className="absolute inset-0 bg-black/20 z-5" />
          <div className="absolute inset-0 bg-gradient-to-t from-rose-50 via-transparent to-transparent z-10" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-center z-20">
            <h2 className="text-6xl w-full font-bold text-rose-50 bg-gradient-to-r bg-clip-text mb-2">Fashionista</h2>
            <p className="text-rose-900/80 text-lg font-semibold mb-4 w-full">
              Discover your signature look.
            </p>
            <Textarea
              placeholder="I prefer..."
              className="mb-4 h-16 bg-white/90 border-rose-800/20 text-rose-800/60 focus-visible:ring-rose-200/20 selection:bg-rose-100"
            />
            <Link href="/onboarding">
              <Button className="from-rose-500 to-rose-700/80 bg-gradient-to-r hover:bg-rose-700 text-white px-8 py-6 rounded-lg text-base w-full">
                Find My Style
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
