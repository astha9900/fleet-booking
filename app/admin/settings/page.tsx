"use client"

import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Bell, CreditCard, Building, Save } from "lucide-react"

export default function SettingsPage() {
  return (
    <DashboardShell>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">System Settings</h2>
        <p className="text-muted-foreground">Manage your fleet configuration, pricing, and admin profiles.</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-4 max-w-2xl mb-8">
          <TabsTrigger value="general" className="gap-2">
            <Building className="size-4" /> General
          </TabsTrigger>
          <TabsTrigger value="pricing" className="gap-2">
            <CreditCard className="size-4" /> Pricing
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2">
            <Bell className="size-4" /> Alerts
          </TabsTrigger>
          <TabsTrigger value="security" className="gap-2">
            <Shield className="size-4" /> Security
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card className="border-none shadow-xl">
            <CardHeader>
              <CardTitle>Business Information</CardTitle>
              <CardDescription>Update your company details and fleet rules.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" defaultValue="Scorpio Fleet Solutions" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Support Phone</Label>
                  <Input id="phone" defaultValue="+91 98765 43210" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Admin Email</Label>
                  <Input id="email" defaultValue="admin@fleet.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Headquarters</Label>
                  <Input id="address" defaultValue="Sector 29, Gurgaon, India" />
                </div>
              </div>
              <Button className="gap-2">
                <Save className="size-4" /> Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pricing">
          <Card className="border-none shadow-xl">
            <CardHeader>
              <CardTitle>Commission & Trip Rates</CardTitle>
              <CardDescription>Define how much you earn from different booking types.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-2">
                  <Label>Normal Trip Commission (%)</Label>
                  <Input type="number" defaultValue="10" />
                </div>
                <div className="space-y-2">
                  <Label>Wedding Trip Commission (%)</Label>
                  <Input type="number" defaultValue="20" />
                </div>
                <div className="space-y-2">
                  <Label>Emergency Commission (%)</Label>
                  <Input type="number" defaultValue="15" />
                </div>
              </div>
              <div className="p-4 bg-muted/50 rounded-xl">
                <p className="text-sm font-bold text-primary mb-2">Commission Logic</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Commissions are automatically deducted from the total fare before paying the driver. Emergency trips
                  have a fixed 15% rate to ensure driver availability for critical medical trips.
                </p>
              </div>
              <Button className="gap-2">
                <Save className="size-4" /> Update Pricing Policy
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
