import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Plus, MoreVertical, Activity } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { BASE_URL } from "@/lib/config";

interface MonitorData {
  id: string,
  name: string,
  status: string,
  currentResponseTime: string,
  uptime: string,
  createdAt: string
}

const Monitors = () => {
  const navigate = useNavigate();
  const urlRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<MonitorData[]>([]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "up":
        return "bg-green-500";
      case "degraded":
        return "bg-yellow-500";
      case "down":
        return "bg-red-500";
      default:
        return "bg-muted";
    }
  };

  const getStatusText = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const url = urlRef.current.value;

    const res = await axios.post(`${BASE_URL}/api/v1/core/website`, {
      url,

    }, {
      headers: {
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmZDI4MmE0YS0zNzE0LTRlYzUtYjNiNS1mMDZlZTZjYzg0Y2MiLCJpYXQiOjE3NTk1NjE0MDd9.E_SQTxdjoNDUbS0csMk3pmb7pgUlsrJC8xy2HScFuuE'
      }
    }
    )

    getWebsites();


    setLoading(false);

  }

  const getWebsites = async () => {
    setLoading(true);
    const res = await axios.get(`${BASE_URL}/api/v1/core/user/websites`, {
      headers: {
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmZDI4MmE0YS0zNzE0LTRlYzUtYjNiNS1mMDZlZTZjYzg0Y2MiLCJpYXQiOjE3NTk1NjE0MDd9.E_SQTxdjoNDUbS0csMk3pmb7pgUlsrJC8xy2HScFuuE'
      }
    }
    )

    console.log(res.data)

    const responseData: MonitorData[] = res.data.message.map(d => (
     { id: d.id,
      name: d.url ,
      status: d.ticks[0] ? d.ticks[0].status == "Up" ? "up" : "down" :  "unknown",
      currentResponseTime: d.ticks[0] ? parseFloat(d.ticks[0].response_time_ms)/1000 + " " + "sec": "unknown",
      uptime: "90%",
      createdAt: d.ticks[0] ?  new Date(d.ticks[0].CreatedAt).toLocaleString() : "unknown",
    }
    ))

    //console.log(responseData)

    setData([...responseData])
    setLoading(false);
  }

  useEffect(() => {
   getWebsites();
   const interval = setInterval(() => { 
    getWebsites();
    console.log("websites refreshed")
   }, 1000 * 30)

   return () => clearInterval(interval);
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="h-6 w-6 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">Monitors</h1>
            </div>
            <Button variant="outline" asChild>
              <a href="/">← Back to Home</a>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search monitors..."
              className="pl-10"
            />
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="hero" size="default">
                <Plus className="mr-2 h-4 w-4" />
                Create Monitor
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Create New Monitor</DialogTitle>
                <DialogDescription>
                  Add a new endpoint to monitor its uptime and performance.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                {/* <div className="space-y-2">
                  <Label htmlFor="monitor-name">Monitor Name</Label>
                  <Input id="monitor-name" placeholder="My API Endpoint" />
                </div> */}
                <div className="space-y-2">
                  <Label htmlFor="monitor-url">URL</Label>
                  <Input id="monitor-url" type="url" ref={urlRef} placeholder="https://api.example.com" />
                </div>
                {/* <div className="space-y-2">
                  <Label htmlFor="check-interval">Check Interval</Label>
                  <Select>
                    <SelectTrigger id="check-interval">
                      <SelectValue placeholder="Select interval" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3m">3 minutes</SelectItem>
                      <SelectItem value="30s">30 seconds</SelectItem>
                      <SelectItem value="1m">1 minute</SelectItem>
                      <SelectItem value="5m">5 minutes</SelectItem>
                      <SelectItem value="10m">10 minutes</SelectItem>
                      <SelectItem value="30m">30 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div> */}
                {/* <div className="space-y-2">
                  <Label htmlFor="notification">Notification Method</Label>
                  <Select>
                    <SelectTrigger id="notification">
                      <SelectValue placeholder="Select method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="slack">Slack</SelectItem>
                      <SelectItem value="sms">SMS</SelectItem>
                      <SelectItem value="webhook">Webhook</SelectItem>
                    </SelectContent>
                  </Select>
                </div> */}
              </div>
              <div className="flex gap-3">
                <Button
                  variant="hero"
                  className="flex-1"
                  onClick={() => handleSubmit()}
                  disabled={loading}
                >
                  Create Monitor
                </Button>
                {/* <Button variant="outline">Cancel</Button> */}
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Monitors Table */}
        <div className="rounded-lg border border-border/50 bg-card/50 backdrop-blur overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Status</TableHead>
                <TableHead>Monitor</TableHead>
                <TableHead>Current Response Time</TableHead>
                <TableHead>Uptime</TableHead>
                <TableHead className="text-right">Last Checked</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((monitor) => (
                <TableRow
                  key={monitor.id}
                  className="hover:bg-muted/50 transition-colors cursor-pointer group"
                  onClick={() => navigate(`/dashboard/monitors/${monitor.id}`)}
                >
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(monitor.status)} animate-pulse`} />
                      <span className="text-sm font-medium">{getStatusText(monitor.status)}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{monitor.name}</TableCell>
                  <TableCell className="text-muted-foreground">{monitor.currentResponseTime} </TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {monitor.uptime}
                    </span>
                  </TableCell>
                  <TableCell className="text-right text-muted-foreground">
                  {monitor.createdAt}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Empty State (Hidden when monitors exist) */}
        {data.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-24 h-24 rounded-full bg-muted/50 flex items-center justify-center mb-6">
              <Activity className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No monitors created yet</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Start monitoring your endpoints by creating your first monitor. Get instant alerts when something goes down.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="hero" size="lg">
                  <Plus className="mr-2 h-4 w-4" />
                  Add your first monitor
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Create New Monitor</DialogTitle>
                  <DialogDescription>
                    Add a new endpoint to monitor its uptime and performance.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="monitor-name-empty">Monitor Name</Label>
                    <Input id="monitor-name-empty" placeholder="My API Endpoint" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="monitor-url-empty">URL</Label>
                    <Input id="monitor-url-empty" type="url" placeholder="https://api.example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="check-interval-empty">Check Interval</Label>
                    <Select>
                      <SelectTrigger id="check-interval-empty">
                        <SelectValue placeholder="Select interval" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30s">30 seconds</SelectItem>
                        <SelectItem value="1m">1 minute</SelectItem>
                        <SelectItem value="5m">5 minutes</SelectItem>
                        <SelectItem value="10m">10 minutes</SelectItem>
                        <SelectItem value="30m">30 minutes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notification-empty">Notification Method</Label>
                    <Select>
                      <SelectTrigger id="notification-empty">
                        <SelectValue placeholder="Select method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="slack">Slack</SelectItem>
                        <SelectItem value="sms">SMS</SelectItem>
                        <SelectItem value="webhook">Webhook</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="hero" className="flex-1">Create Monitor</Button>
                  <Button variant="outline">Cancel</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          Need help?{" "}
          <a href="mailto:support@yourdomain.com" className="text-primary hover:underline">
            Reach us at support@yourdomain.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Monitors;
