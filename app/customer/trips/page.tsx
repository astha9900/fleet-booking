"use client"

import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, FileText, Star, IndianRupee } from "lucide-react"

const trips = [
  {
    id: "TR-105",
    date: "Dec 27, 2025",
    time: "10:30 AM",
    pickup: "DLF Cyber City, Phase 2",
    drop: "Indira Gandhi Int'l Airport",
    type: "Normal",
    fare: "1,200",
    status: "Upcoming",
    driver: "Rajesh Kumar",
  },
  {
    id: "TR-102",
    date: "Dec 26, 2025",
    time: "08:15 PM",
    pickup: "Hauz Khas Village, Delhi",
    drop: "Sector 15, Gurgaon",
    type: "Normal",
    fare: "950",
    status: "Completed",
    driver: "Amit Singh",
  },
  {
    id: "EM-044",
    date: "Dec 20, 2025",
    time: "02:45 AM",
    pickup: "City Hospital, Ward 3",
    drop: "Heart Institute, Okhla",
    type: "Emergency",
    fare: "1,500",
    status: "Completed",
    driver: "Suresh P.",
  },
]

export default function TripsPage() {
  return (
    <DashboardShell>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Trip History</h2>
        <p className="text-muted-foreground">Review and manage your past and upcoming journeys.</p>
      </div>

      <div className="space-y-6">
        {trips.map((trip) => (
          <Card key={trip.id} className="border-none shadow-xl overflow-hidden hover:bg-muted/5 transition-colors">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="p-6 flex-1 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-muted rounded-lg">
                        <Calendar className="size-4 text-primary" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold">{trip.date}</span>
                        <span className="text-xs text-muted-foreground">{trip.time}</span>
                      </div>
                    </div>
                    <Badge
                      className={
                        trip.status === "Upcoming"
                          ? "bg-primary"
                          : trip.type === "Emergency"
                            ? "bg-emergency"
                            : "bg-emerald-600"
                      }
                    >
                      {trip.status}
                    </Badge>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="size-4 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[10px] font-bold text-muted-foreground uppercase">Pickup</p>
                          <p className="text-sm font-semibold">{trip.pickup}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[10px] font-bold text-muted-foreground uppercase">Drop</p>
                          <p className="text-sm font-semibold">{trip.drop}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-muted/30 rounded-xl p-4 flex flex-col justify-center space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Driver</span>
                        <span className="font-bold">{trip.driver}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Total Fare</span>
                        <span className="font-bold flex items-center">
                          <IndianRupee className="size-3" /> {trip.fare}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/20 md:w-48 p-6 flex flex-col justify-center gap-2 border-t md:border-t-0 md:border-l">
                  <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent text-xs font-bold">
                    <FileText className="size-3" /> Invoice
                  </Button>
                  {trip.status === "Completed" && (
                    <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent text-xs font-bold">
                      <Star className="size-3 text-amber-500 fill-amber-500" /> Rate Trip
                    </Button>
                  )}
                  <Button variant="ghost" size="sm" className="w-full text-xs font-bold">
                    Report Issue
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardShell>
  )
}
