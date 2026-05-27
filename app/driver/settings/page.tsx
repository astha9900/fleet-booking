"use client"

import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { MapPin, Shield } from "lucide-react"

export default function DriverSettings() {
  return (
    <DashboardShell>
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Driver Settings</h2>
          <p className="text-muted-foreground">Manage your availability, notifications, and vehicle alerts.</p>
        </div>

        <Card className="border-none shadow-xl overflow-hidden">
          <CardHeader className="bg-muted/30 pb-4">
            <CardTitle className="flex items-center gap-2">
              <Shield className="size-5 text-primary" /> Emergency Preferences
            </CardTitle>
            <CardDescription>Configure how you receive high-priority medical alerts.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="font-bold">Emergency Auto-Accept</p>
                <p className="text-sm text-muted-foreground">Automatically accept emergency trips when online.</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between border-t pt-6">
              <div className="space-y-1">
                <p className="font-bold">Urgent SMS Alerts</p>
                <p className="text-sm text-muted-foreground">Receive trip details via SMS for emergency bookings.</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-xl overflow-hidden">
          <CardHeader className="bg-muted/30 pb-4">
            <CardTitle className="flex items-center gap-2">
              <MapPin className="size-5 text-emerald-600" /> Working Zone
            </CardTitle>
            <CardDescription>Set your preferred operating radius.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <div className="space-y-4">
              <Label>Maximum Operating Radius (km)</Label>
              <Input type="number" defaultValue="50" />
            </div>
            <Button className="w-full font-black py-6 text-lg">Update Zone</Button>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}
