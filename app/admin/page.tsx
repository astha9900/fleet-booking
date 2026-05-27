"use client"

import { cn } from "@/lib/utils"

import { DashboardShell } from "@/components/dashboard-shell"
import { StatsCards } from "@/components/stats-cards"
import { RevenueChart } from "@/components/revenue-chart"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, AlertTriangle, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { BookingModal } from "@/components/booking-modal"

export default function AdminDashboard() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Admin Overview</h2>
          <p className="text-muted-foreground">Monitor fleet status, earnings, and emergency alerts.</p>
        </div>
        <div className="flex items-center gap-3">
          <BookingModal />
        </div>
      </div>

      <StatsCards />

      <div className="grid gap-6 lg:grid-cols-3">
        <RevenueChart />

        <Card className="border-none shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-bold">Live Alerts</CardTitle>
            <Badge variant="outline" className="bg-emergency/10 text-emergency border-emergency/20">
              3 Active
            </Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { type: "Emergency", msg: "Hospital trip assigned to Amit Singh", time: "2 mins ago", status: "pending" },
              { type: "System", msg: "New vehicle UP-16-ZT-2211 added", time: "1 hour ago", status: "info" },
              { type: "Maintenance", msg: "HR-26-AD-1234 service due", time: "3 hours ago", status: "warning" },
            ].map((alert, i) => (
              <div
                key={i}
                className="flex gap-4 items-start border-b pb-4 last:border-0 last:pb-0 group hover:bg-muted/30 p-2 rounded-lg transition-colors"
              >
                <div
                  className={cn(
                    "size-10 rounded-xl flex items-center justify-center shrink-0",
                    alert.type === "Emergency" ? "bg-emergency/10 text-emergency" : "bg-primary/10 text-primary",
                  )}
                >
                  {alert.type === "Emergency" ? (
                    <AlertTriangle className="size-5" />
                  ) : (
                    <CheckCircle2 className="size-5" />
                  )}
                </div>
                <div className="space-y-1 min-w-0">
                  <p className="text-sm font-bold leading-tight truncate">{alert.msg}</p>
                  <p className="text-xs text-muted-foreground">{alert.time}</p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full gap-2 group border-dashed bg-transparent">
              View All Activity Logs <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">Quick Fleet Status</h3>
          <Button variant="ghost" className="text-primary font-bold">
            Manage All Vehicles
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Available", count: 8, color: "bg-available" },
            { label: "On Trip", count: 12, color: "bg-warning" },
            { label: "Emergency", count: 2, color: "bg-emergency" },
            { label: "Offline", count: 3, color: "bg-muted" },
          ].map((item) => (
            <div key={item.label} className="p-4 rounded-xl border bg-muted/20 space-y-1">
              <div className="flex items-center gap-2">
                <div className={cn("size-2 rounded-full", item.color)} />
                <span className="text-xs font-bold text-muted-foreground uppercase">{item.label}</span>
              </div>
              <p className="text-2xl font-black">{item.count}</p>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  )
}
