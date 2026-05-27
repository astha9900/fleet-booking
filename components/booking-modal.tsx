"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlusCircle, AlertTriangle, Heart, Car } from "lucide-react"

export function BookingModal() {
  const [bookingType, setBookingType] = React.useState("Normal")

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2 shadow-lg hover:shadow-primary/20">
          <PlusCircle className="size-4" />
          New Booking
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Create New Booking</DialogTitle>
          <DialogDescription>Enter trip details to assign a vehicle from your fleet.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="customer">Customer Name</Label>
              <Input id="customer" placeholder="Enter name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="+91 XXXXX XXXXX" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Booking Type</Label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Normal", icon: Car, color: "text-blue-600 bg-blue-50 border-blue-200" },
                { label: "Wedding", icon: Heart, color: "text-pink-600 bg-pink-50 border-pink-200" },
                { label: "Emergency", icon: AlertTriangle, color: "text-red-600 bg-red-50 border-red-200" },
              ].map((type) => (
                <button
                  key={type.label}
                  type="button"
                  onClick={() => setBookingType(type.label)}
                  className={`flex flex-col items-center gap-2 rounded-xl border p-3 transition-all ${
                    bookingType === type.label
                      ? `${type.color} ring-2 ring-offset-1 ring-primary`
                      : "bg-card hover:bg-muted"
                  }`}
                >
                  <type.icon className="size-5" />
                  <span className="text-xs font-bold uppercase">{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="pickup">Pickup Location</Label>
              <Input id="pickup" placeholder="Pickup point" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="drop">Drop Location</Label>
              <Input id="drop" placeholder="Destination" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="datetime">Date & Time</Label>
              <Input id="datetime" type="datetime-local" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fare">Total Fare (₹)</Label>
              <Input id="fare" type="number" placeholder="0.00" />
            </div>
          </div>

          {bookingType === "Emergency" && (
            <div className="rounded-lg bg-emergency/10 p-4 border border-emergency/20 text-emergency flex items-start gap-3">
              <AlertTriangle className="size-5 shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                <p className="font-bold uppercase tracking-tight">Priority Emergency Booking</p>
                <p className="leading-normal">
                  This will trigger an instant 30s countdown alert to all available drivers and owners. 15% commission
                  applies.
                </p>
              </div>
            </div>
          )}
        </div>
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" className="flex-1 sm:flex-none bg-transparent">
            Cancel
          </Button>
          <Button
            className={`flex-1 sm:flex-none font-bold ${bookingType === "Emergency" ? "bg-emergency hover:bg-emergency/90 text-white" : ""}`}
          >
            {bookingType === "Emergency" ? "Trigger Alert System" : "Confirm Booking"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
