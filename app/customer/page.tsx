"use client"

import * as React from "react"
import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Calendar, Clock, Car, Navigation, ShieldAlert, Heart, Star, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function CustomerDashboard() {
  const [bookingType, setBookingType] = React.useState("normal")
  const [isSearching, setIsSearching] = React.useState(false)

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSearching(true)
    setTimeout(() => {
      setIsSearching(false)
      alert("Booking request sent! A driver will be assigned shortly.")
    }, 2000)
  }

  return (
    <DashboardShell>
      <div className="grid gap-8 lg:grid-cols-5 items-start">
        {/* Booking Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Plan Your Journey</h2>
            <p className="text-muted-foreground">Book a premium Scorpio for any occasion.</p>
          </div>

          <Card className="border-none shadow-2xl overflow-hidden">
            <Tabs defaultValue="normal" onValueChange={setBookingType} className="w-full">
              <CardHeader className="bg-muted/30 pb-4">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="normal">Daily</TabsTrigger>
                  <TabsTrigger value="wedding">Wedding</TabsTrigger>
                  <TabsTrigger value="emergency" className="text-emergency data-[state=active]:bg-emergency/10">
                    Emergency
                  </TabsTrigger>
                </TabsList>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleBook} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <MapPin className="size-4 text-primary" /> Pickup Location
                      </Label>
                      <Input placeholder="Enter pickup address" required />
                    </div>
                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <Navigation className="size-4 text-emerald-500" /> Drop Location
                      </Label>
                      <Input placeholder="Enter destination address" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                          <Calendar className="size-4 text-muted-foreground" /> Date
                        </Label>
                        <Input type="date" required />
                      </div>
                      <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                          <Clock className="size-4 text-muted-foreground" /> Time
                        </Label>
                        <Input type="time" required />
                      </div>
                    </div>
                  </div>

                  {bookingType === "emergency" && (
                    <div className="p-4 bg-emergency/5 border border-emergency/20 rounded-xl space-y-2">
                      <div className="flex items-center gap-2 text-emergency font-bold text-sm">
                        <ShieldAlert className="size-4" /> Priority Medical Dispatch
                      </div>
                      <p className="text-xs text-muted-foreground leading-tight">
                        Nearest available vehicle will be prioritized. Emergency trips carry a fixed convenience fee for
                        priority dispatch.
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className={cn(
                      "w-full h-12 text-lg font-bold gap-2 shadow-lg",
                      bookingType === "emergency" ? "bg-emergency hover:bg-emergency/90" : "bg-primary",
                    )}
                    disabled={isSearching}
                  >
                    {isSearching ? (
                      <span className="flex items-center gap-2">
                        <div className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Searching Drivers...
                      </span>
                    ) : (
                      <>
                        <Car className="size-5" />
                        {bookingType === "emergency" ? "Send Emergency Alert" : "Book Scorpio Now"}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Tabs>
          </Card>
        </div>

        {/* Info & Promotions */}
        <div className="lg:col-span-3 space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="border-none shadow-xl bg-primary text-primary-foreground overflow-hidden relative">
              <CardContent className="p-6 space-y-4">
                <div className="size-12 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Heart className="size-6 fill-current" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Premium Comfort</h3>
                  <p className="text-sm text-primary-foreground/80 mt-1">
                    All our Scorpios are maintained to the highest standards.
                  </p>
                </div>
              </CardContent>
              <div className="absolute -bottom-4 -right-4 size-32 bg-white/10 rounded-full blur-2xl" />
            </Card>

            <Card className="border-none shadow-xl bg-emerald-600 text-white overflow-hidden relative">
              <CardContent className="p-6 space-y-4">
                <div className="size-12 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Star className="size-6 fill-current" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">5-Star Drivers</h3>
                  <p className="text-sm text-white/80 mt-1">
                    Verified professionals trained for both city and highway.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-none shadow-xl overflow-hidden">
            <CardHeader>
              <CardTitle>Recent Trip Activity</CardTitle>
              <CardDescription>Track your latest journeys and status.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {[
                  {
                    id: "TR-102",
                    date: "Today",
                    route: "Gurgaon to Airport T3",
                    status: "Completed",
                    fare: "1,250",
                  },
                  {
                    id: "TR-098",
                    date: "Dec 25",
                    route: "Noida Sec-18 to DLF Phase 3",
                    status: "Completed",
                    fare: "1,800",
                  },
                ].map((trip) => (
                  <div
                    key={trip.id}
                    className="p-4 flex items-center justify-between hover:bg-muted/30 transition-colors"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm">{trip.route}</span>
                        <Badge
                          variant="outline"
                          className="text-[10px] bg-emerald-50 text-emerald-700 border-emerald-100"
                        >
                          {trip.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {trip.date} • ID: {trip.id}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-black">₹{trip.fare}</p>
                      <button className="text-[10px] text-primary font-bold hover:underline">Download Bill</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-muted/20 border-t">
                <Button variant="ghost" className="w-full text-xs font-bold gap-2">
                  View Full Trip History <Clock className="size-3" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100 flex items-start gap-4">
            <div className="size-10 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0">
              <CheckCircle2 className="size-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-blue-900">Your Identity is Verified</p>
              <p className="text-xs text-blue-700 mt-1">
                You are a verified customer. This allows you to book long-distance trips without advance deposits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}
