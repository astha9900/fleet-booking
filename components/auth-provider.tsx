"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [isReady, setIsReady] = React.useState(false)

  React.useEffect(() => {
    const user = getCurrentUser()
    const isPublicPath = pathname === "/login"

    if (!user && !isPublicPath) {
      router.push("/login")
    } else if (user && isPublicPath) {
      // <CHANGE> Already logged in, redirect to respective dashboard
      if (user.role === "admin") router.push("/admin")
      else if (user.role === "customer") router.push("/customer")
      else if (user.role === "driver") router.push("/driver")
    } else if (user && pathname === "/") {
      // <CHANGE> Root redirect
      if (user.role === "admin") router.push("/admin")
      else if (user.role === "customer") router.push("/customer")
      else if (user.role === "driver") router.push("/driver")
    }

    setIsReady(true)
  }, [pathname, router])

  if (!isReady) return null

  return <>{children}</>
}
