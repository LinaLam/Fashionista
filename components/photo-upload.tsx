"use client"

import { useState, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Camera, Plus } from "lucide-react"

interface UserData {
  [key: string]: unknown
}

interface PhotoUploadProps {
  onNext: (data: UserData) => void
  userData: UserData
}

export default function PhotoUpload({ onNext }: PhotoUploadProps) {
  const [photos, setPhotos] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = useCallback(
    (files: FileList | null) => {
      if (!files) return

      const newFiles = Array.from(files).slice(0, 5 - photos.length)
      const newPreviews = newFiles.map((file) => URL.createObjectURL(file))

      setPhotos((prev) => [...prev, ...newFiles])
      setPreviews((prev) => [...prev, ...newPreviews])
    },
    [photos.length],
  )

  const removePhoto = (index: number) => {
    URL.revokeObjectURL(previews[index])
    setPhotos((prev) => prev.filter((_, i) => i !== index))
    setPreviews((prev) => prev.filter((_, i) => i !== index))
  }

  const handleNext = () => {
    onNext({ photos })
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="text-center">
        <Camera className="h-10 w-10 sm:h-12 sm:w-12 text-rose-700 mx-auto mb-3 sm:mb-4" />
        <h2 className="text-lg sm:text-xl font-semibold mb-2">Upload Your Photos</h2>
        <p className="text-sm sm:text-base text-gray-600 px-2">
          Upload 3-5 photos from different angles and lighting. We&apos;ll help you find the best analysis.
        </p>
      </div>

      {/* Mobile-optimized photo grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {previews.map((preview, index) => (
          <Card key={index} className="relative">
            <CardContent className="p-2">
              <img
                src={preview || "/placeholder.svg"}
                alt={`Upload ${index + 1}`}
                className="w-full h-24 sm:h-32 object-cover rounded"
              />
              <Button
                variant="destructive"
                size="sm"
                className="absolute -top-2 -right-2 h-7 w-7 sm:h-6 sm:w-6 rounded-full p-0 touch-manipulation"
                onClick={() => removePhoto(index)}
              >
                <X className="h-3 w-3 sm:h-3 sm:w-3" />
              </Button>
            </CardContent>
          </Card>
        ))}

        {photos.length < 5 && (
          <Card className="border-dashed border-2 border-gray-300 hover:border-earth-400 transition-colors">
            <CardContent className="p-2">
              <button
                onClick={triggerFileInput}
                className="flex flex-col items-center justify-center h-24 sm:h-32 w-full cursor-pointer touch-manipulation"
              >
                <Plus className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400 mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm text-gray-500">Add Photo</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileUpload(e.target.files)}
              />
            </CardContent>
          </Card>
        )}
      </div>

      {/* Mobile-friendly upload button */}
      <div className="text-center space-y-4">
        <p className="text-sm text-gray-500 mb-3">{photos.length}/5 photos uploaded (minimum 3 required)</p>


        <div>
          <Button
            onClick={handleNext}
            disabled={photos.length < 3}
            className="w-full bg-rose-700 hover:bg-rose-800 min-h-[48px] touch-manipulation text-rose-50"
          >
            Analyze My Colors
          </Button>
        </div>
      </div>
    </div>
  )
}
