"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings, DollarSign, Calendar, Star } from "lucide-react"

interface OptionalConstraintsProps {
  onNext: (data: any) => void
  userData: any
}

const occasions = [
  "Work/Professional",
  "Casual/Everyday",
  "Date Night",
  "Party/Event",
  "Travel",
  "Weekend",
  "Special Occasion",
]

const brands = [
  "Zara",
  "H&M",
  "Uniqlo",
  "ASOS",
  "Mango",
  "COS",
  "Everlane",
  "Reformation",
  "Anthropologie",
  "J.Crew",
  "Banana Republic",
  "Gap",
]

export default function OptionalConstraints({ onNext, userData }: OptionalConstraintsProps) {
  const [occasion, setOccasion] = useState("")
  const [minBudget, setMinBudget] = useState("")
  const [maxBudget, setMaxBudget] = useState("")
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]))
  }

  const handleNext = () => {
    onNext({
      occasion,
      budget: {
        min: minBudget ? Number(minBudget) : null,
        max: maxBudget ? Number(maxBudget) : null,
      },
      preferredBrands: selectedBrands,
    })
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Settings className="h-12 w-12 text-earth-700 mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">Final Preferences</h2>
        <p className="text-gray-600">Optional details to make your outfits even more relevant</p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Occasion
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={occasion} onValueChange={setOccasion}>
              <SelectTrigger>
                <SelectValue placeholder="What's the occasion? (Optional)" />
              </SelectTrigger>
              <SelectContent>
                {occasions.map((occ) => (
                  <SelectItem key={occ} value={occ.toLowerCase().replace(/[^a-z0-9]/g, "-")}>
                    {occ}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Budget Range
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="min-budget">Min Budget ($)</Label>
                <Input
                  id="min-budget"
                  type="number"
                  value={minBudget}
                  onChange={(e) => setMinBudget(e.target.value)}
                  placeholder="50"
                />
              </div>
              <div>
                <Label htmlFor="max-budget">Max Budget ($)</Label>
                <Input
                  id="max-budget"
                  type="number"
                  value={maxBudget}
                  onChange={(e) => setMaxBudget(e.target.value)}
                  placeholder="200"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              Favorite Brands
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={brand}
                    checked={selectedBrands.includes(brand)}
                    onCheckedChange={() => handleBrandToggle(brand)}
                  />
                  <Label htmlFor={brand} className="text-sm">
                    {brand}
                  </Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Button onClick={handleNext} className="w-full bg-rose-700 hover:bg-rose-800 text-rose-50 min-h-16 min-w-32 text-lg font-semibold touch-manipulation" size="lg">
        Generate My Outfits ✨
      </Button>
    </div>
  )
}
