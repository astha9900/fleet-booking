"use client"

import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, Phone, MapPin, Star, MoreVertical, Mail, Calendar, Car } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const drivers = [
  {
    id: "d1",
    name: "Amit Singh",
    email: "amit@fleet.com",
    phone: "+91 97888 55444",
    address: "123, Sector 14, Gurgaon, Haryana - 122001",
    joined: "Mar 2024",
    rating: 4.8,
    status: "Active",
    vehicle: "HR-26-AD-1234",
    photo: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "d2",
    name: "Suresh Prasad",
    email: "suresh@fleet.com",
    phone: "+91 98111 22333",
    address: "B-45, Rohini Sec-7, Delhi - 110085",
    joined: "Jan 2024",
    rating: 4.5,
    status: "Active",
    vehicle: "DL-3C-BD-4455",
    photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "d3",
    name: "Kuldeep Singh",
    email: "kuldeep@fleet.com",
    phone: "+91 91222 33444",
    address: "Flat 102, Noida Sec-62, UP - 201301",
    joined: "May 2024",
    rating: 4.9,
    status: "On Trip",
    vehicle: "UP-16-ZT-2211",
    photo: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "d4",
    name: "Vikram Rathore",
    email: "vikram@fleet.com",
    phone: "+91 95555 11222",
    address: "H-56, Malviya Nagar, Jaipur, Rajasthan - 302017",
    joined: "Feb 2024",
    rating: 4.7,
    status: "Active",
    vehicle: "UP-80-XY-1234",
    photo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200",
  },
]

export default function DriversPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Driver Network</h2>
          <p className="text-muted-foreground">Manage driver profiles, assignments, and performance.</p>
        </div>
        <Button className="gap-2 shadow-lg shadow-primary/20">
          <Plus className="size-4" /> Onboard New Driver
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input className="pl-10" placeholder="Search by name, email, or vehicle number..." />
        </div>
      </div>

      {/* Driver Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {drivers.map((d) => (
          <Card key={d.id} className="overflow-hidden border-none shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <Avatar className="size-20 border-4 border-muted shadow-sm">
                      <AvatarImage src={d.photo || "/placeholder.svg"} alt={d.name} className="object-cover" />
                      <AvatarFallback className="text-xl font-bold">{d.name[0]}</AvatarFallback>
                    </Avatar>
                    <div
                      className={cn(
                        "absolute bottom-1 right-1 size-4 rounded-full border-2 border-white shadow-sm",
                        d.status === "Active" ? "bg-emerald-500" : "bg-warning",
                      )}
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">{d.name}</h3>
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                      <Badge variant="outline" className="bg-primary/5 text-primary border-primary/10">
                        {d.status}
                      </Badge>
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="size-3 fill-current" />
                        <span className="font-bold">{d.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="size-4 text-muted-foreground" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                    <DropdownMenuItem>Edit Details</DropdownMenuItem>
                    <DropdownMenuItem>Assignment History</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Suspend Driver</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-y-6 gap-x-4 border-t pt-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    <Phone className="size-3" /> Contact
                  </div>
                  <p className="text-sm font-semibold">{d.phone}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    <Mail className="size-3" /> Email
                  </div>
                  <p className="text-sm font-semibold truncate">{d.email}</p>
                </div>
                <div className="space-y-1 col-span-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    <MapPin className="size-3" /> Address
                  </div>
                  <p className="text-sm font-semibold">{d.address}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    <Calendar className="size-3" /> Joined
                  </div>
                  <p className="text-sm font-semibold">{d.joined}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    <Car className="size-3" /> Vehicle
                  </div>
                  <p className="text-sm font-bold text-primary">{d.vehicle}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardShell>
  )
}
