import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, DollarSign, Calendar, Users, Percent } from "lucide-react"

const stats = [
  {
    title: "Total Bookings Today",
    value: "24",
    change: "+12%",
    trend: "up",
    icon: Calendar,
    description: "4 emergency trips included",
  },
  {
    title: "Total Revenue",
    value: "₹42,500",
    change: "+8.2%",
    trend: "up",
    icon: DollarSign,
    description: "Across all 12 vehicles",
  },
  {
    title: "Commission Earned",
    value: "₹5,200",
    change: "-2.4%",
    trend: "down",
    icon: Percent,
    description: "10-15% per booking",
  },
  {
    title: "Active Drivers",
    value: "9/12",
    change: "+1",
    trend: "up",
    icon: Users,
    description: "3 drivers currently offline",
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="overflow-hidden border-none shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <div className="rounded-full bg-primary/10 p-2 text-primary">
              <stat.icon className="size-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold tracking-tight">{stat.value}</div>
            <div className="mt-1 flex items-center gap-1">
              {stat.trend === "up" ? (
                <TrendingUp className="size-3 text-available" />
              ) : (
                <TrendingDown className="size-3 text-emergency" />
              )}
              <span className={`text-xs font-semibold ${stat.trend === "up" ? "text-available" : "text-emergency"}`}>
                {stat.change}
              </span>
              <span className="text-xs text-muted-foreground ml-1">from yesterday</span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground/80">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
