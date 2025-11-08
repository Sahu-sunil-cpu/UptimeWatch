import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, MoreVertical, TrendingUp, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import axios from "axios";
import { AUTHORIZATION, BASE_URL } from "@/lib/config";

interface Tick {
  time: string;
  responseTime: string
}


const mockData = [
  { time: "00:00", responseTime: 120 },
  { time: "04:00", responseTime: 135 },
  { time: "08:00", responseTime: 150 },
  { time: "12:00", responseTime: 145 },
  { time: "16:00", responseTime: 160 },
  { time: "20:00", responseTime: 140 },
  { time: "24:00", responseTime: 130 },
];

export default function DashboardMonitorDetail() {
  const { monitorId } = useParams();
  const navigate = useNavigate();
  const [ticks, setTicks] = useState<Tick[]>([])

  
  const getTicks = async () => {
    const res = await axios.get(`${BASE_URL}/api/v1/core/website/ticks/${monitorId}`, {
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
        responseTime: d.response_time_ms,
        time: new Date(d.CreatedAt).toLocaleString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true
        })
      }
    ))

    responseData.sort((a, b) => a.time.localeCompare(b.time));

    //console.log(responseData)

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
            <span className="hover:text-foreground cursor-pointer">Monitors</span>
            <span>/</span>
            <span>example.com</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground">example.com</h1>
        </div>
        <Badge className="bg-green-500/20 text-green-500 border-green-500/30">
          <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
          Up
        </Badge>
        <Button variant="secondary">Edit</Button>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-5 w-5" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Uptime (24h)</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">99.9%</div>
            <p className="text-xs text-muted-foreground mt-1">All systems operational</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Checked</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2 min ago</div>
            <p className="text-xs text-muted-foreground mt-1">Response time: 145ms</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Incidents (7d)</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground mt-1">No incidents this week</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Response Times</CardTitle>
            <div className="flex items-center gap-4">
              <Select defaultValue="us-east">
                <SelectTrigger className="w-[140px] bg-muted/50 border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us-east">US East</SelectItem>
                  <SelectItem value="us-west">US West</SelectItem>
                  <SelectItem value="eu-west">EU West</SelectItem>
                  <SelectItem value="asia">Asia Pacific</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="24h">
                <SelectTrigger className="w-[120px] bg-muted/50 border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="24h">Last 24 hours</SelectItem>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
        
         
            <ResponsiveContainer width="100%" height={300}>
            <LineChart data={ticks}>
              <CartesianGrid strokeDasharray="5 5" stroke="hsl(var(--border))" />
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
        
        </CardContent>
      </Card>
    </div>
  );
}
