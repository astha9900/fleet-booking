"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { name: "Mon", revenue: 4000, commission: 450 },
  { name: "Tue", revenue: 3000, commission: 320 },
  { name: "Wed", revenue: 5000, commission: 580 },
  { name: "Thu", revenue: 2780, commission: 290 },
  { name: "Fri", revenue: 6890, commission: 720 },
  { name: "Sat", revenue: 8390, commission: 950 },
  { name: "Sun", revenue: 7490, commission: 810 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-1 md:col-span-2 border-none shadow-md">
      <CardHeader>
        <CardTitle className="text-lg">Weekly Analytics</CardTitle>
        <CardDescription>Revenue and commission performance for the last 7 days</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} stroke="oklch(0.5 0.05 240)" />
              <YAxis
                fontSize={12}
                tickLine={false}
                axisLine={false}
                stroke="oklch(0.5 0.05 240)"
                tickFormatter={(value) => `₹${value}`}
              />
              <Tooltip
                cursor={{ fill: "oklch(0.95 0.01 240)" }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-3 shadow-xl">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">Revenue</span>
                            <span className="font-bold text-primary">₹{payload[0].value}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">Comm.</span>
                            <span className="font-bold text-available">₹{payload[1].value}</span>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Bar dataKey="revenue" fill="var(--color-primary)" radius={[4, 4, 0, 0]} barSize={24} />
              <Bar dataKey="commission" fill="var(--color-available)" radius={[4, 4, 0, 0]} barSize={24} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
