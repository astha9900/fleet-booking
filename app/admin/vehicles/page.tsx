"use client"

import { cn } from "@/lib/utils"

import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, Filter, Fuel, Settings2, ShieldCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const vehicles = [
  {
    id: "v1",
    model: "Mahindra Scorpio S11",
    number: "HR-26-AD-1234",
    type: "Classic White",
    status: "Available",
    fuel: "Diesel",
    driver: "Rajesh Kumar",
    photo: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "v2",
    model: "Mahindra Scorpio N",
    number: "DL-3C-BD-4455",
    type: "Deep Black",
    status: "On Trip",
    fuel: "Diesel",
    driver: "Amit Singh",
    photo: "https://images.unsplash.com/photo-1617469165786-8007eda3caa7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "v3",
    model: "Mahindra Scorpio S11",
    number: "UP-16-ZT-2211",
    type: "Silver Metallic",
    status: "Maintenance",
    fuel: "Diesel",
    driver: "Suresh P.",
    photo: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "v4",
    model: "Mahindra Scorpio N",
    number: "UP-80-XY-1234",
    type: "Pearl White",
    status: "Available",
    fuel: "Petrol",
    driver: "Vikram R.",
    photo: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "v5",
    model: "Mahindra Scorpio S11",
    number: "DL-1-AA-9999",
    type: "Midnight Black",
    status: "On Trip",
    fuel: "Diesel",
    driver: "Kuldeep S.",
    photo: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80&w=800",
  },
]

export default function VehiclesPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Vehicle Management</h2>
          <p className="text-muted-foreground">Add, track, and manage your Scorpio fleet details.</p>
        </div>
        <Button className="gap-2 shadow-lg shadow-primary/20">
          <Plus className="size-4" /> Add New Vehicle
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input className="pl-10" placeholder="Search by vehicle number or model..." />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2 bg-transparent">
            <Filter className="size-4" /> Filters
          </Button>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Settings2 className="size-4" /> Fleet Rules
          </Button>
        </div>
      </div>

      {/* Vehicle Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {vehicles.map((v) => (
          <Card
            key={v.id}
            className="overflow-hidden border-none shadow-xl group hover:scale-[1.02] transition-transform"
          >
            <div className="relative h-48 bg-muted">
              <img
                src={v.photo || "/placeholder.svg"}
                alt={v.model}
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute top-3 right-3">
                <Badge
                  className={cn(
                    "font-bold shadow-md",
                    v.status === "Available"
                      ? "bg-available"
                      : v.status === "On Trip"
                        ? "bg-warning text-black"
                        : "bg-muted text-muted-foreground",
                  )}
                >
                  {v.status}
                </Badge>
              </div>
            </div>
            <CardContent className="p-5 space-y-4">
              <div className="space-y-1">
                <h3 className="text-lg font-bold flex items-center justify-between">
                  {v.model}
                  <span className="text-xs font-mono bg-muted px-2 py-0.5 rounded text-muted-foreground">
                    {v.number}
                  </span>
                </h3>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{v.type}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Fuel className="size-4" />
                  <span>{v.fuel}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <ShieldCheck className="size-4 text-emerald-500" />
                  <span>Insured</span>
                </div>
              </div>

              <div className="pt-4 border-t flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="size-7">
                    <AvatarFallback className="text-[10px] font-bold">
                      {v.driver
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold">{v.driver}</span>
                    <span className="text-[10px] text-muted-foreground">Assigned Driver</span>
                  </div>
                </div>
                <Button size="sm" variant="ghost" className="text-primary font-bold">
                  Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardShell>
  )
}
