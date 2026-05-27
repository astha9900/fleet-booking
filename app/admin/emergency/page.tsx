"use client"

import * as React from "react"
import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, MapPin, Phone, Clock, ShieldAlert, Navigation, Search, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Suspense } from "react"

const pendingEmergencies = [
  {
    id: "EM-992",
    customer: "Sarah Johnson",
    pickup: "City Hospital, North Block",
    drop: "LifeCare Cardiac Center",
    phone: "+91 98888 11223",
    time: "2 mins ago",
    status: "Priority",
  },
]

const availableEmergencyVehicles = [
  {
    id: "v1",
    model: "Mahindra Scorpio S11",
    number: "HR-26-AD-1234",
    driver: "Amit Singh",
    distance: "1.2 km away",
    status: "Ready",
  },
  {
    id: "v4",
    model: "Mahindra Scorpio N",
    number: "DL-10-CZ-5566",
    driver: "Vikram R.",
    distance: "2.8 km away",
    status: "Ready",
  },
]

function EmergencyContent() {
  const [dispatchStatus, setDispatchStatus] = React.useState<string | null>(null)

  const handleDispatch = (id: string) => {
    setDispatchStatus("dispatching")
    setTimeout(() => {
      setDispatchStatus("success")
    }, 2000)
  }

  return (
    <div className="flex-1 p-4 md:p-8 space-y-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-bold tracking-tight">Emergency Dispatch</h2>
            <Badge className="bg-emergency animate-pulse">LIVE MONITOR</Badge>
          </div>
          <p className="text-muted-foreground">Priority medical trip management and vehicle allocation.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-muted-foreground uppercase">Response Team</p>
            <p className="text-sm font-black text-emerald-600">Active & Ready</p>
          </div>
          <div className="size-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
            <CheckCircle2 className="size-6" />
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-5 items-start">
        {/* Active Emergency Queue */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-none shadow-2xl bg-emergency/5 border-emergency/20">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-emergency">
                  <ShieldAlert className="size-5" /> Incoming Requests
                </CardTitle>
                <Badge variant="outline" className="bg-emergency/10 text-emergency border-emergency/20">
                  {pendingEmergencies.length} New
                </Badge>
              </div>
              <CardDescription>Immediate action required for these medical bookings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {pendingEmergencies.map((em) => (
                <div key={em.id} className="p-4 rounded-xl bg-white border-2 border-emergency/30 space-y-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="size-10 border-2 border-emergency/10">
                        <AvatarFallback className="bg-emergency/10 text-emergency font-bold">
                          {em.customer[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-bold">{em.customer}</p>
                        <p className="text-[10px] font-bold text-emergency uppercase tracking-wider">{em.id}</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                      <Clock className="size-3" /> {em.time}
                    </p>
                  </div>

                  <div className="space-y-3 bg-muted/30 p-3 rounded-lg">
                    <div className="flex items-start gap-3">
                      <MapPin className="size-4 text-primary shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase">Pickup</p>
                        <p className="text-xs font-bold leading-tight">{em.pickup}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Navigation className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase">Destination</p>
                        <p className="text-xs font-bold leading-tight">{em.drop}</p>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full gap-2 text-primary border-primary/20 hover:bg-primary/5 bg-transparent"
                  >
                    <Phone className="size-4" /> Call Customer
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Dispatch Controls */}
        <div className="lg:col-span-3 space-y-6">
          <Card className="border-none shadow-xl">
            <CardHeader className="pb-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <CardTitle>Dispatch Nearest Vehicle</CardTitle>
                  <CardDescription>Allocation engine for medical-certified Scorpio fleet.</CardDescription>
                </div>
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input className="pl-9 h-9" placeholder="Quick search vehicles..." />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {availableEmergencyVehicles.map((v) => (
                  <div
                    key={v.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border bg-muted/20 hover:border-primary/50 transition-colors gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <AlertTriangle className="size-6" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-bold flex items-center gap-2">
                          {v.model} <span className="text-xs font-mono text-muted-foreground">({v.number})</span>
                        </p>
                        <p className="text-xs font-medium text-muted-foreground">Driver: {v.driver}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-xs font-bold text-emerald-600">{v.distance}</p>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase">{v.status}</p>
                      </div>
                      <Button
                        size="sm"
                        className="font-bold gap-2 px-6"
                        onClick={() => handleDispatch(v.id)}
                        disabled={dispatchStatus === "dispatching"}
                      >
                        {dispatchStatus === "dispatching" ? "Dispatching..." : "Dispatch Now"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {dispatchStatus === "success" && (
                <div className="mt-6 p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4">
                  <div className="size-10 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                    <CheckCircle2 className="size-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-emerald-900">Vehicle Dispatched Successfully</p>
                    <p className="text-xs text-emerald-700">Driver Amit Singh has accepted the emergency trip.</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <Card className="border-none shadow-md bg-slate-900 text-white">
              <CardContent className="p-6 space-y-2">
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Avg Response</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-black italic">4:12</p>
                  <span className="text-xs font-bold text-emerald-400">min</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-white">
              <CardContent className="p-6 space-y-2 text-right">
                <p className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em]">Live Fleet</p>
                <p className="text-3xl font-black italic text-primary">24/28</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function EmergencyPage() {
  return (
    <DashboardShell>
      <Suspense fallback={null}>
        <EmergencyContent />
      </Suspense>
    </DashboardShell>
  )
}
