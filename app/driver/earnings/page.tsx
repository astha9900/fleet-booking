"use client"

import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Calendar, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const history = [
  { date: "Dec 27, 2025", trips: 8, earnings: "3,450", status: "Paid" },
  { date: "Dec 26, 2025", trips: 6, earnings: "2,800", status: "Paid" },
  { date: "Dec 25, 2025", trips: 10, earnings: "5,120", status: "Pending" },
  { date: "Dec 24, 2025", trips: 5, earnings: "2,100", status: "Paid" },
]

export default function EarningsPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Earnings Dashboard</h2>
          <p className="text-muted-foreground">Track your weekly performance and payout status.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-none shadow-xl bg-primary text-primary-foreground">
            <CardContent className="p-6 space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Available Balance</p>
                <ArrowUpRight className="size-5 opacity-50" />
              </div>
              <p className="text-3xl font-black">₹15,480</p>
              <button className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition-colors">
                Request Payout
              </button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl">
            <CardContent className="p-6 space-y-2">
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Total Earnings</p>
              <p className="text-3xl font-black">₹84,200</p>
              <div className="flex items-center gap-1 text-emerald-600 font-bold text-xs">
                <TrendingUp className="size-3" /> +12% from last month
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-none shadow-xl overflow-hidden">
          <CardHeader>
            <CardTitle className="font-black">Payout History</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {history.map((h, i) => (
                <div key={i} className="p-6 flex items-center justify-between hover:bg-muted/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-muted rounded-xl">
                      <Calendar className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">{h.date}</p>
                      <p className="text-xs text-muted-foreground">{h.trips} Trips Completed</p>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="text-lg font-black">₹{h.earnings}</p>
                    <Badge variant={h.status === "Paid" ? "outline" : "default"} className="font-black text-[10px]">
                      {h.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}
