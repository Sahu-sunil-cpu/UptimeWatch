import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, MoreVertical, Globe, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import { AUTHORIZATION, BASE_URL } from "@/lib/config";
import axios from "axios";

const mockResponseData = [
  { time: "00:00", responseTime: 45 },
  { time: "04:00", responseTime: 52 },
  { time: "08:00", responseTime: 48 },
  { time: "12:00", responseTime: 50 },
  { time: "16:00", responseTime: 55 },
  { time: "20:00", responseTime: 47 },
  { time: "24:00", responseTime: 49 },
];


interface Tick {
  time: string;
  responseTime: string
}

const mockDnsRecords = {
  cname: [
    { name: "www.example.com", value: "example.com", ttl: "3600" },
    { name: "mail.example.com", value: "mail.provider.com", ttl: "7200" },
  ],
  a: [
    { name: "example.com", value: "192.0.2.1", ttl: "3600" },
    { name: "api.example.com", value: "192.0.2.2", ttl: "3600" },
  ],
  aaaa: [
    { name: "example.com", value: "2001:0db8:85a3:0000:0000:8a2e:0370:7334", ttl: "3600" },
  ],
  mx: [
    { name: "example.com", value: "mail.example.com", priority: "10", ttl: "3600" },
    { name: "example.com", value: "mail2.example.com", priority: "20", ttl: "3600" },
  ],
};

const mockLocations = [
  { name: "United States", status: "operational", lat: 37.0902, lng: -95.7129 },
  { name: "United Kingdom", status: "operational", lat: 55.3781, lng: -3.4360 },
  { name: "Germany", status: "operational", lat: 51.1657, lng: 10.4515 },
  { name: "Japan", status: "operational", lat: 36.2048, lng: 138.2529 },
  { name: "Australia", status: "degraded", lat: -25.2744, lng: 133.7751 },
  { name: "Brazil", status: "operational", lat: -14.2350, lng: -51.9253 },
];

export default function DashboardDnsMonitorDetail() {
  const { monitorId } = useParams();
  const navigate = useNavigate();

  const [ticks, setTicks] = useState<Tick[]>([])

  
  const getTicks = async () => {
    const res = await axios.get(`${BASE_URL}/api/v1/core/dns/ticks/${monitorId}`, {
      headers: {
        'Authorization': AUTHORIZATION
      }
    }
    )

    //console.log(res.data)

    if (!res.data.message) {
      return
    }

    const responseData: Tick[] = res.data.message.map(d => (
      {
        responseTime: d.latency_ms,
        time: new Date(d.CreatedAt).toLocaleString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true
        })
      }
    ))

    responseData.sort((a, b) => a.time.localeCompare(b.time));

   // console.log(responseData)

    setTicks([...responseData])
  }

  useEffect(() => {
    getTicks()
    const interval = setInterval(() => {
      getTicks();
      //console.log("websites refreshed")
    }, 1000 * 30)

    return () => clearInterval(interval);
  }, [])

  return (
    <div className="space-y-6 max-w-7xl">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/dashboard/monitors")}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <span className="hover:text-foreground cursor-pointer">DNS Monitors</span>
            <span>/</span>
            <span>example.com</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground">example.com DNS Monitor</h1>
        </div>
        <Badge className="bg-green-500/20 text-green-500 border-green-500/30">
          <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
          Operational
        </Badge>
        <Button variant="secondary">Edit</Button>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-5 w-5" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monitor Name</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">example.com</div>
            <p className="text-xs text-muted-foreground mt-1">DNS monitoring</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Domain Name</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">example.com</div>
            <p className="text-xs text-muted-foreground mt-1">Last checked: 2 min ago</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Global DNS Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {mockLocations.map((location) => (
              <div
                key={location.name}
                className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border border-border"
              >
                <div
                  className={`w-3 h-3 rounded-full ${
                    location.status === "operational"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  }`}
                />
                <div>
                  <p className="font-medium text-sm">{location.name}</p>
                  <p className="text-xs text-muted-foreground capitalize">
                    {location.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="response-chart" className="border border-border rounded-lg bg-card overflow-hidden">
          <AccordionTrigger className="px-6 hover:no-underline">
            <span className="text-lg font-semibold">Response Chart</span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={ticks}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  dataKey="time"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  label={{ value: "ms", angle: -90, position: "insideLeft" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="responseTime"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--primary))", r: 1 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="dns-records" className="border border-border rounded-lg bg-card overflow-hidden">
          <AccordionTrigger className="px-6 hover:no-underline">
            <span className="text-lg font-semibold">DNS Records</span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 space-y-6">
            <div>
              <h3 className="text-sm font-semibold mb-3 text-primary">CNAME Records</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>TTL</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockDnsRecords.cname.map((record, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="font-mono text-sm">{record.name}</TableCell>
                      <TableCell className="font-mono text-sm">{record.value}</TableCell>
                      <TableCell>{record.ttl}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3 text-primary">A Records</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>TTL</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockDnsRecords.a.map((record, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="font-mono text-sm">{record.name}</TableCell>
                      <TableCell className="font-mono text-sm">{record.value}</TableCell>
                      <TableCell>{record.ttl}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3 text-primary">AAAA Records</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>TTL</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockDnsRecords.aaaa.map((record, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="font-mono text-sm">{record.name}</TableCell>
                      <TableCell className="font-mono text-sm break-all">{record.value}</TableCell>
                      <TableCell>{record.ttl}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3 text-primary">MX Records</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>TTL</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockDnsRecords.mx.map((record, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="font-mono text-sm">{record.name}</TableCell>
                      <TableCell className="font-mono text-sm">{record.value}</TableCell>
                      <TableCell>{record.priority}</TableCell>
                      <TableCell>{record.ttl}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
