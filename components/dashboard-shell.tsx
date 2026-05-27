"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Car, Users, Settings, AlertTriangle, LogOut, Bell, Menu, User, MapPin, History, ShieldCheck, CreditCard } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { logout, getCurrentUser } from "@/lib/auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface NavItem {
  title: string
  href: string
  icon: React.ElementType
}

const adminNavItems: NavItem[] = [
  { title: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { title: "Vehicles", href: "/admin/vehicles", icon: Car },
  { title: "Drivers", href: "/admin/drivers", icon: Users },
  { title: "Emergency", href: "/admin/emergency", icon: AlertTriangle },
  { title: "Settings", href: "/admin/settings", icon: Settings },
]

const customerNavItems: NavItem[] = [
  { title: "Book a Ride", href: "/customer", icon: MapPin },
  { title: "My Trips", href: "/customer/trips", icon: History },
  { title: "Payment", href: "/customer/payment", icon: CreditCard },
  { title: "Profile", href: "/customer/profile", icon: User },
]

const driverNavItems: NavItem[] = [
  { title: "Dashboard", href: "/driver", icon: LayoutDashboard },
  { title: "Earnings", href: "/driver/earnings", icon: CreditCard },
  { title: "Profile", href: "/driver/profile", icon: User },
  { title: "Settings", href: "/driver/settings", icon: Settings },
]

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const user = getCurrentUser()

  const navItems = React.useMemo(() => {
    if (user?.role === "admin") return adminNavItems
    if (user?.role === "customer") return customerNavItems
    if (user?.role === "driver") return driverNavItems
    return []
  }, [user])

  const handleLogout = () => {
    logout()
  }

  if (!user) return null

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar */}
        <aside className="hidden border-r bg-card w-64 flex-col md:flex">
          <div className="flex h-16 items-center border-b px-6">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-primary">
              <Car className="size-6 text-primary" />
              <span>FleetManager</span>
            </Link>
          </div>
          <nav className="flex-1 space-y-1 p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                  pathname === item.href ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground",
                )}
              >
                <item.icon className="size-4" />
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="mt-auto border-t p-4">
            <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium">
              <Avatar className="size-9 border-2 border-primary/10">
                <AvatarImage src={user.photoUrl || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback className="bg-primary/10 text-primary font-bold">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col min-w-0">
                <span className="text-foreground font-semibold truncate">{user.name}</span>
                <span className="text-xs text-muted-foreground capitalize">{user.role}</span>
              </div>
            </div>
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 mt-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
              onClick={handleLogout}
            >
              <LogOut className="size-4" />
              Sign Out
            </Button>
          </div>
        </aside>

        {/* <CHANGE> Mobile Nav & Content - removed emergency banner */}
        <main className="flex-1 flex flex-col overflow-y-auto bg-muted/30">
          <header className="flex h-16 items-center justify-between border-b bg-card px-4 md:px-8 shrink-0">
            <div className="flex items-center gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="size-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 w-64">
                  <SheetHeader className="h-16 border-b px-6 flex items-center justify-start">
                    <SheetTitle className="flex items-center gap-2 font-bold text-xl text-primary">
                      <Car className="size-6" />
                      FleetManager
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="space-y-1 p-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium",
                          pathname === item.href
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-accent",
                        )}
                      >
                        <item.icon className="size-4" />
                        {item.title}
                      </Link>
                    ))}
                  </nav>
                  <div className="absolute bottom-0 w-full p-4 border-t">
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive"
                      onClick={handleLogout}
                    >
                      <LogOut className="size-4" />
                      Sign Out
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
              <h1 className="text-lg font-semibold tracking-tight text-foreground md:text-xl capitalize">
                {navItems.find((item) => item.href === pathname)?.title || user.role + " Panel"}
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative text-muted-foreground">
                <Bell className="size-5" />
              </Button>
              <div className="h-8 w-[1px] bg-border mx-1 hidden md:block" />
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 hidden sm:flex">
                  <ShieldCheck className="size-4" />
                </div>
                <div className="text-sm font-medium text-muted-foreground hidden lg:block">System Status: Active</div>
              </div>
            </div>
          </header>
          <div className="flex-1 p-4 md:p-8 space-y-8 max-w-7xl mx-auto w-full">{children}</div>
        </main>
      </div>
    </div>
  )
}
