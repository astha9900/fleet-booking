import { cn } from "@/lib/utils"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Phone, CheckCircle2, XCircle } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const vehicles = [
  {
    id: "1",
    number: "HR-26-AD-1234",
    owner: "Self",
    driver: "Rajesh Kumar",
    phone: "+91 98765 43210",
    status: "Available",
    emergencyReady: true,
  },
  {
    id: "2",
    number: "HR-55-XY-9000",
    owner: "Amit Singh",
    driver: "Amit Singh",
    phone: "+91 99988 77766",
    status: "On Trip",
    emergencyReady: true,
  },
  {
    id: "3",
    number: "DL-3C-BD-4455",
    owner: "Vikas Verma",
    driver: "Suresh P.",
    phone: "+91 88877 66655",
    status: "Offline",
    emergencyReady: false,
  },
  {
    id: "4",
    number: "UP-16-ZT-2211",
    owner: "Self",
    driver: "Kuldeep S.",
    phone: "+91 77766 55544",
    status: "Available",
    emergencyReady: true,
  },
]

export function VehicleTable() {
  return (
    <div className="rounded-xl bg-card border shadow-md overflow-hidden">
      <div className="p-6 border-b flex items-center justify-between bg-muted/20">
        <div>
          <h3 className="font-bold text-lg">Vehicle Fleet</h3>
          <p className="text-sm text-muted-foreground">Manage vehicles and track live availability</p>
        </div>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/30">
            <TableHead className="font-bold">Vehicle Number</TableHead>
            <TableHead className="font-bold">Owner</TableHead>
            <TableHead className="font-bold">Driver Info</TableHead>
            <TableHead className="font-bold text-center">Emergency Ready</TableHead>
            <TableHead className="font-bold">Status</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vehicles.map((vehicle) => (
            <TableRow key={vehicle.id} className="hover:bg-muted/10 transition-colors">
              <TableCell className="font-medium">{vehicle.number}</TableCell>
              <TableCell>{vehicle.owner}</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{vehicle.driver}</span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Phone className="size-3" />
                    {vehicle.phone}
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-center">
                {vehicle.emergencyReady ? (
                  <div className="flex justify-center">
                    <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 gap-1">
                      <CheckCircle2 className="size-3" /> Ready
                    </Badge>
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <Badge variant="outline" className="text-muted-foreground gap-1">
                      <XCircle className="size-3" /> No
                    </Badge>
                  </div>
                )}
              </TableCell>
              <TableCell>
                <Badge
                  className={cn(
                    "font-bold",
                    vehicle.status === "Available"
                      ? "bg-available text-white"
                      : vehicle.status === "On Trip"
                        ? "bg-warning text-black border-none"
                        : "bg-muted text-muted-foreground",
                  )}
                >
                  {vehicle.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8">
                      <MoreHorizontal className="size-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Assign Driver</DropdownMenuItem>
                    <DropdownMenuItem>Update Status</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Mark Offline</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
