import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-center p-4">
      <div className="relative w-full max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
        {/* Top Bar */}
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
          <span className="text-rose-700 font-semibold">9:41</span>
          <div className="flex items-center space-x-1">
            {/* <div className="w-4 h-4 bg-earth-700 rounded-full" />
            <div className="w-4 h-4 bg-earth-700 rounded-full" />
            <div className="w-4 h-4 bg-earth-700 rounded-full" />
            <div className="w-6 h-3 border-2 border-earth-700 rounded-sm" /> */}
          </div>
        </div>

        {/* Main Content */}
        <div className="relative w-full h-[500px] sm:h-[600px] overflow-hidden">
          <Image
            src="/placeholder.svg?height=600&width=400"
            alt="Brown Suede Jacket"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rose-50 via-transparent to-transparent z-10" />
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-rose-200 text-8xl font-bold opacity-20 select-none pointer-events-none z-0">
            Serene
          </h1>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-center z-20">
            <h2 className="text-3xl font-bold text-rose-700 mb-2">Your signature look</h2>
            <p className="text-rose-900/80 text-sm mb-4">
              Tell us about what you&apos;re looking for!
            </p>
            <Input
              placeholder="Describe your style preferences..."
              className="mb-4 h-16 bg-white/90 border-rose-300 text-rose-700 placeholder-rose-500"
            />
            <Link href="/onboarding">
              <Button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-6 rounded-lg text-base w-full">
                Start your style journey
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
