"use client"

import * as React from "react"
import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, History, IndianRupee, Power, Check, X, ShieldAlert, Car } from "lucide-react"
import { cn } from "@/lib/utils"
import { getCurrentUser } from "@/lib/auth"

export default function DriverDashboard() {
  const user = getCurrentUser()
  const [isOnline, setIsOnline] = React.useState(true)
  const [isMounted, setIsMounted] = React.useState(false)
  const [incomingBooking, setIncomingBooking] = React.useState<any>({
    id: "EM-99",
    type: "Emergency",
    customer: "City Hospital Referral",
    pickup: "City Hospital, Ward 4",
    drop: "Super-Specialty Care",
    fare: "1,200",
    timer: 28,
  })
  const [isReady, setIsReady] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  React.useEffect(() => {
    setIsReady(true)
  }, [])

  React.useEffect(() => {
    if (!isMounted || !isReady || !incomingBooking) return
    const timer = setInterval(() => {
      setIncomingBooking((prev: any) => {
        if (!prev || prev.timer <= 0) {
          clearInterval(timer)
          return null
        }
        return { ...prev, timer: prev.timer - 1 }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [incomingBooking, isReady, isMounted])

  if (!isReady || !user || !isMounted) return null

  return (
    <DashboardShell>
      {/* Header & Status Toggle */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 bg-white p-6 rounded-2xl border shadow-sm">
        <div className="flex items-center gap-4">
          <div className="size-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-2xl shadow-lg">
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <h1 className="font-black text-2xl leading-none">{user.name}</h1>
            <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
              <Car className="size-3" /> Vehicle: {user.vehicleId || "HR-26-AD-1234"}
            </p>
          </div>
        </div>
        <Button
          onClick={() => setIsOnline(!isOnline)}
          variant={isOnline ? "outline" : "default"}
          size="lg"
          className={cn(
            "rounded-xl gap-2 font-black px-8 h-14 text-lg",
            isOnline
              ? "border-emerald-200 text-emerald-600 hover:bg-emerald-50"
              : "bg-primary shadow-xl shadow-primary/30",
          )}
        >
          <Power className="size-5" />
          {isOnline ? "Online" : "Go Online"}
        </Button>
      </div>

      {/* Incoming Emergency Alert */}
      {incomingBooking && isOnline && (
        <Card className="border-emergency border-2 shadow-2xl shadow-emergency/20 overflow-hidden animate-in fade-in zoom-in duration-300 mb-8">
          <div className="bg-emergency p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3 font-black uppercase tracking-widest text-sm">
              <ShieldAlert className="size-5 animate-pulse" />
              Incoming Emergency Trip
            </div>
            <div className="font-mono font-black text-2xl bg-white/20 px-4 py-1 rounded-lg">
              00:{incomingBooking.timer.toString().padStart(2, "0")}
            </div>
          </div>
          <CardContent className="p-8 space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-full bg-emergency/10 text-emergency flex items-center justify-center shrink-0">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Pickup</p>
                    <p className="text-lg font-bold leading-tight">{incomingBooking.pickup}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Drop</p>
                    <p className="text-lg font-bold leading-tight">{incomingBooking.drop}</p>
                  </div>
                </div>
              </div>
              <div className="bg-muted/50 rounded-2xl p-6 flex flex-col justify-center space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-muted-foreground">Estimated Fare</span>
                  <span className="text-xl font-black">₹{incomingBooking.fare}</span>
                </div>
                <div className="flex items-center justify-between border-t pt-3">
                  <span className="text-sm font-bold text-muted-foreground">Your Earnings (85%)</span>
                  <span className="text-xl font-black text-emerald-600">₹1,020</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                className="flex-1 h-14 border-muted-foreground/20 text-muted-foreground font-bold text-lg hover:bg-muted/50 bg-transparent"
                onClick={() => setIncomingBooking(null)}
              >
                <X className="size-5 mr-2" /> Reject
              </Button>
              <Button className="flex-1 h-14 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xl shadow-xl shadow-emerald-600/20">
                <Check className="size-6 mr-2" /> Accept & Start
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Stats and History */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-none shadow-xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="size-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm">
              <IndianRupee className="size-7" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-black uppercase tracking-widest">Daily Earnings</p>
              <p className="text-3xl font-black">₹3,450</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="size-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
              <History className="size-7" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-black uppercase tracking-widest">Total Trips</p>
              <p className="text-3xl font-black">8</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-xl bg-primary text-primary-foreground overflow-hidden">
          <CardContent className="p-6 flex items-center gap-4 relative">
            <div className="size-14 rounded-2xl bg-white/20 flex items-center justify-center">
              <Check className="size-7" />
            </div>
            <div>
              <p className="text-xs text-primary-foreground/70 font-black uppercase tracking-widest">Online Time</p>
              <p className="text-3xl font-black">5h 24m</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Trip List */}
      <Card className="border-none shadow-xl overflow-hidden mt-8">
        <CardHeader className="bg-card">
          <CardTitle className="text-xl font-black">Today's Performance</CardTitle>
          <CardDescription>Track your trip earnings and routes.</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y">
            {[
              { id: "T1", route: "Airport to MG Road", type: "Normal", fare: "850", time: "02:30 PM" },
              { id: "T2", route: "Sec-15 to Cyber Hub", type: "Wedding", fare: "4,200", time: "11:00 AM" },
              { id: "T3", route: "Medanta to Max Hospital", type: "Emergency", fare: "1,100", time: "04:15 AM" },
            ].map((trip) => (
              <div key={trip.id} className="p-5 flex items-center justify-between hover:bg-muted/20 transition-colors">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-sm">{trip.route}</span>
                    <Badge
                      variant="outline"
                      className={cn(
                        "text-[10px] font-black uppercase tracking-widest h-5",
                        trip.type === "Emergency"
                          ? "bg-emergency/10 text-emergency border-emergency/20"
                          : "bg-primary/10 text-primary border-primary/20",
                      )}
                    >
                      {trip.type}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground font-medium">{trip.time}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-black text-emerald-600">₹{trip.fare}</p>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase">Earnings</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </DashboardShell>
  )
}
