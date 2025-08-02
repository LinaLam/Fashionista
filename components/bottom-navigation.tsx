"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, LayoutGrid, ShoppingCart, User } from "lucide-react"
import { cn } from "@/lib/utils"

export default function BottomNavigation() {
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Categories", href: "/products", icon: LayoutGrid },
    { name: "Cart", href: "/cart", icon: ShoppingCart },
    { name: "Profile", href: "/membership", icon: User },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-earth-50 border-t border-earth-200 shadow-lg z-50 md:hidden">
      <div className="flex justify-around h-16 items-center">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          return (
            <Link key={item.name} href={item.href} className="flex flex-col items-center justify-center flex-1 h-full">
              <Icon className={cn("h-6 w-6", isActive ? "text-earth-700" : "text-earth-400")} />
              <span className={cn("text-xs mt-1", isActive ? "text-earth-700 font-semibold" : "text-earth-400")}>
                {item.name}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
