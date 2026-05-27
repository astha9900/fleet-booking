import { DashboardShell } from "@/components/dashboard-shell"
import { StatsCards } from "@/components/stats-cards"
import { RevenueChart } from "@/components/revenue-chart"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { VehicleTable } from "@/components/vehicle-table"
import { Badge } from "@/components/ui/badge"
import { BookingModal } from "@/components/booking-modal"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Fleet Overview</h2>
          <p className="text-muted-foreground">Monitor your business performance and vehicle status.</p>
        </div>
        <div className="flex items-center gap-3">
          <BookingModal />
        </div>
      </div>

      <StatsCards />

      <div className="grid gap-6 md:grid-cols-3">
        <RevenueChart />
        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle className="text-lg">Recent Alerts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { type: "Emergency", msg: "Hospital trip assigned to HR-26-AD-1234", time: "2 mins ago" },
              { type: "System", msg: "Commission rules updated for 2026", time: "1 hour ago" },
              { type: "Fleet", msg: "3 vehicles are currently offline", time: "3 hours ago" },
            ].map((alert, i) => (
              <div key={i} className="flex gap-4 items-start border-b pb-4 last:border-0 last:pb-0">
                <div
                  className={`size-2 mt-2 rounded-full shrink-0 ${alert.type === "Emergency" ? "bg-emergency" : "bg-warning"}`}
                />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">{alert.msg}</p>
                  <p className="text-xs text-muted-foreground">{alert.time}</p>
                </div>
              </div>
            ))}
            <Button variant="ghost" className="w-full text-primary hover:bg-primary/5 gap-2 group">
              View All History <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold tracking-tight">Active Fleet Management</h3>
          <div className="flex gap-2">
            <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
              6 Online
            </Badge>
            <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
              4 On Trip
            </Badge>
            <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
              2 Offline
            </Badge>
          </div>
        </div>
        <VehicleTable />
      </div>
    </DashboardShell>
  )
}
