"use client"

import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getCurrentUser } from "@/lib/auth"
import { Save, User, Phone, Mail, MapPin } from "lucide-react"

export default function ProfilePage() {
  const user = getCurrentUser()

  if (!user) return null

  return (
    <DashboardShell>
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex items-center gap-6">
          <Avatar className="size-24 border-4 border-card shadow-xl">
            <AvatarImage src={user.photoUrl || "/placeholder.svg"} alt={user.name} />
            <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">{user.name[0]}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h2 className="text-3xl font-bold tracking-tight">{user.name}</h2>
            <p className="text-muted-foreground capitalize font-medium">{user.role} Member</p>
          </div>
        </div>

        <Card className="border-none shadow-2xl overflow-hidden">
          <CardHeader className="bg-muted/30">
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Update your contact details and account settings.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="size-4 text-muted-foreground" /> Full Name
                </Label>
                <Input id="name" defaultValue={user.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="size-4 text-muted-foreground" /> Email Address
                </Label>
                <Input id="email" defaultValue={user.email} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="size-4 text-muted-foreground" /> Phone Number
                </Label>
                <Input id="phone" defaultValue={user.phone} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address" className="flex items-center gap-2">
                  <MapPin className="size-4 text-muted-foreground" /> Default Pickup
                </Label>
                <Input id="address" placeholder="Add your home address" />
              </div>
            </div>

            <div className="pt-6 border-t flex justify-end">
              <Button className="gap-2 px-8">
                <Save className="size-4" /> Save Profile
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}
