import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Plus, MoreVertical, Activity, Globe, Server, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AUTHORIZATION, BASE_URL } from "@/lib/config";

type MonitorType = "website" | "dns";

interface Monitor {
  id: string;
  status: string;
  lastCheck: string;
  uptime: string;
  type: MonitorType;
  active: boolean;
  name: string;
  domain?: string;
  resolver?: string;
  recordType?: string;
  interval?: string;
}

export default function DashboardMonitors() {
  const navigate = useNavigate();
  const { toast,  } = useToast();
  const [websiteMonitor, setWebsiteMonitor] = useState<Monitor[]>([]);
  const [dnsMonitor, setDnsMonitor] = useState<Monitor[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMonitorTypeDialogOpen, setIsMonitorTypeDialogOpen] = useState(false);
  const [isWebsiteDialogOpen, setIsWebsiteDialogOpen] = useState(false);
  const [isDnsDialogOpen, setIsDnsDialogOpen] = useState(false);
  const [newWebsiteMonitorUrl, setNewWebsiteMonitorUrl] = useState<string>("");
  const [newDnsMonitor, setNewDnsMonitor] = useState({
    domain: "",
    resolver: "1.1.1.1",
    ip_addr: "A",
    interval: "60",
  });
  const [loading, setLoading] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "up":
        return "bg-green-500";
      case "down":
        return "bg-destructive";
      case "warning":
        return "bg-yellow-500";
      case "ok":
        return "bg-green-500";
      case "fail":
        return "bg-destructive";
      default:
        return "bg-muted";
    }
  };

  const getStatusText = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  // const handleCreateWebsiteMonitor = () => {
  //   const monitor: Monitor = {
  //     id: monitors.length + 1,
  //     url: newWebsiteMonitorUrl,
  //     status: "up",
  //     lastCheck: "Just now",
  //     uptime: "100%",
  //     type: "website",
  //     active: true,
  //   };
  //   setMonitors([...monitors, monitor]);
  //   setNewWebsiteMonitorUrl("");
  //   setIsWebsiteDialogOpen(false);
  // };

  //--------------------------------------------------------------------------------------------------------------------------

  // const handleCreateDnsMonitor = () => {
  //   const monitor: Monitor = {
  //     id: monitors.length + 1,
  //     status: "up",
  //     lastCheck: "Just now",
  //     uptime: "100%",
  //     type: "dns",
  //     active: true,
  //     domain: newDnsMonitor.domain,
  //     resolver: newDnsMonitor.resolver,
  //     recordType: newDnsMonitor.recordType,
  //     interval: newDnsMonitor.interval,
  //   };
  //   setMonitors([...monitors, monitor]);
  //   setNewDnsMonitor({domain: "", resolver: "1.1.1.1", recordType: "A", interval: "60" });
  //   setIsDnsDialogOpen(false);
  // };

  const toggleDnsMonitorActive = async (id: string) => {
    const monitor = dnsMonitor.find(m => m.id === id);
    setDnsMonitor(dnsMonitor.map(m =>
      m.id === id ? { ...m, active: !m.active } : m
    ));
    const res = await axios.post(`${BASE_URL}/api/v1/core/dns/toggle`, {
      id: id,
      active: !monitor.active
    }, {
      headers: {
        'Authorization': AUTHORIZATION
      }
    }
    )

    if (res.data.message == "successful") {
      toast({
        title: "Monitor Status Updated",
        description: `Monitor has been ${monitor?.active ? "deactivated" : "activated"}.`,
      });
    }else {
      toast({
        title: "Error",
      });
    }

    getDnsData()
  };

  const toggleWebsiteMonitorActive = async (id: string) => {
    const monitor = websiteMonitor.find(m => m.id === id);
    setWebsiteMonitor(websiteMonitor.map(m =>
      m.id === id ? { ...m, active: !m.active } : m
    ));
    const res = await axios.post(`${BASE_URL}/api/v1/core/website/toggle`, {
      id: id,
      active: !monitor.active
    }, {
      headers: {
        'Authorization': AUTHORIZATION
      }
    }
    )

    if (res.data.message == "successful") {
      toast({
        title: "Monitor Status Updated",
        description: `Monitor has been ${monitor?.active ? "deactivated" : "activated"}.`,
      });
    }else {
      toast({
        title: "Error",
      });
    }

    getWebsitesData()
  };

  const deleteDnsMonitor = async (id: string) => {
    setDnsMonitor(dnsMonitor.filter((m) => m.id !== id));

    const res = await axios.post(`${BASE_URL}/api/v1/core/dns/delete`, {
      id: id
    }, {
      headers: {
        'Authorization': AUTHORIZATION
      }
    }
    )

    if (res.data.message == "successful") {
      toast({
        title: "Monitor Deleted",
        description: "Monitor has been successfully deleted.",
      });
    }else {
      toast({
        title: "Error",
      });
    }

    getDnsData()
  };

  const deleteWebsiteMonitor = async (id: string) => {
    setDnsMonitor(websiteMonitor.filter((m) => m.id !== id));


    const res = await axios.post(`${BASE_URL}/api/v1/core/website/delete`, {
      id: id
    }, {
      headers: {
        'Authorization': AUTHORIZATION
      }
    }
    )

    if (res.data.message == "successful") {
      toast({
        title: "Monitor Deleted",
        description: "Monitor has been successfully deleted.",
      });
    }else {
      toast({
        title: "Error",
      });
    }

    getWebsitesData()
  };

  const handleMonitorTypeSelect = (type: MonitorType) => {
    setIsMonitorTypeDialogOpen(false);
    if (type === "website") {
      setIsWebsiteDialogOpen(true);
    } else {
      setIsDnsDialogOpen(true);
    }
  };


  const handleWebsiteSubmit = async () => {
    
    const res = await axios.post(`${BASE_URL}/api/v1/core/website`, {
      url: newWebsiteMonitorUrl
    }, {
      headers: {
        'Authorization': AUTHORIZATION
      }
    }
    )

    setNewWebsiteMonitorUrl("");
    setIsWebsiteDialogOpen(false);

    getWebsitesData();

  }

  const handleDnsSubmit = async () => {

    const res = await axios.post(`${BASE_URL}/api/v1/core/dns`, {
      domain: newDnsMonitor.domain,
      ip_addr: newDnsMonitor.ip_addr,
      resolver: newDnsMonitor.resolver,
      interval: Number(newDnsMonitor.interval),
     
    }, {
      headers: {
        'Authorization': AUTHORIZATION
      }
    }
    )

    setNewDnsMonitor({ domain: "", resolver: "", ip_addr: "", interval: "" });
    setIsDnsDialogOpen(false);

    getDnsData();
  }

  const getWebsitesData = async () => {
    const res = await axios.get(`${BASE_URL}/api/v1/core/user/websites`, {
      headers: {
        'Authorization': AUTHORIZATION
      }
    }
    )

    console.log(res.data)

    const responseData: Monitor[] = res.data.message.map(d => (
      {
        id: d.id,
        name: d.url,
        status: d.ticks[0] ? d.ticks[0].status == "Up" ? "up" : "down" : "unknown",
        type: "website",
        uptime: "90%",
        lastCheck: d.ticks[0] ? new Date(d.ticks[0].CreatedAt).toLocaleString() : "unknown",
        active: d.active,
      }
    ))

    setWebsiteMonitor([...responseData]);
    // console.log(websiteMonitor)
  }

  const getDnsData = async () => {
    const res = await axios.get(`${BASE_URL}/api/v1/core/user/dns`, {
      headers: {
        'Authorization': AUTHORIZATION
      }
    }
    )

    console.log(res.data)

    const responseData: Monitor[] = res.data.message.map(d => (
      {
        id: d.id,
        name: d.domain,
        status: d.ticks[0] ? d.ticks[0].status == "Ok" ? "ok" : "fail" : "unknown",
        type: "dns",
        uptime: "90%",
        lastCheck: d.ticks[0] ? new Date(d.ticks[0].CreatedAt).toLocaleString() : "unknown",
        active: d.active,
      }
    ))

    setDnsMonitor([...responseData]);

   // console.log(dnsMonitor)
  }

  useEffect(() => {
    getDnsData();
    getWebsitesData();
    
    setLoading(true)
    const interval = setInterval(() => {
      getDnsData();
      getWebsitesData();
      console.log("refreshed")
    }, 1000 * 30)

    return () => clearInterval(interval);
  }, [])


  const renderMonitorTable = (monitorList: Monitor[], showToggle: boolean = false, isDns: boolean = false) => (
    monitorList.length > 0 ? (
      <Card className="bg-card border-border">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead>Status</TableHead>
                <TableHead>Monitor Name</TableHead>
                <TableHead>Last Check</TableHead>
                <TableHead>Uptime</TableHead>
                {showToggle && <TableHead>Active</TableHead>}
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {monitorList.map((monitor) => (
                <TableRow
                  key={monitor.id}
                  className="border-border hover:bg-muted/50 cursor-pointer"
                  onClick={() => navigate(isDns ? `/dashboard/dns-monitors/${monitor.id}` : `/dashboard/monitors/${monitor.id}`)}
                >
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(monitor.status)}`} />
                      <span className="text-sm text-muted-foreground">
                        {getStatusText(monitor.status)}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{monitor.name}</TableCell>
                  <TableCell className="text-muted-foreground">{monitor.lastCheck}</TableCell>
                  <TableCell className="text-muted-foreground">{monitor.uptime}</TableCell>
                  {showToggle && (
                    <TableCell onClick={(e) => e.stopPropagation()}>
                      <Switch
                        checked={monitor.active}
                        onCheckedChange={() => monitor.type == "dns" ? toggleDnsMonitorActive(monitor.id) : toggleWebsiteMonitorActive(monitor.id)}
                      />
                    </TableCell>
                  )}
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                        onClick={(e) => {
                          e.stopPropagation();
                          monitor.type == "dns" ? deleteDnsMonitor(monitor.id) : deleteWebsiteMonitor(monitor.id);
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    ) : (
      <Card className="bg-card border-border">
        <CardContent className="py-12">
          <div className="text-center">
            <Activity className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
            <h3 className="text-lg font-medium mb-2">No monitors found</h3>
            <p className="text-muted-foreground mb-4">
              {searchQuery
                ? "Try a different search term"
                : "Get started by creating your first monitor"}
            </p>
            {!searchQuery && (
              <Button
                className="gap-2 bg-primary hover:bg-primary/90"
                onClick={() => setIsMonitorTypeDialogOpen(true)}
              >
                <Plus className="h-4 w-4" />
                Add your first monitor
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    )
  );

  return (
    <div className="space-y-6 max-w-7xl">

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search Monitors"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-muted/50 border-border"
          />
        </div>

        <Button
          className="gap-2 bg-primary hover:bg-primary/90"
          onClick={() => setIsMonitorTypeDialogOpen(true)}
        >
          <Plus className="h-4 w-4" />
          Create Monitor
        </Button>

        {/* Monitor Type Selection Dialog */}
        <Dialog open={isMonitorTypeDialogOpen} onOpenChange={setIsMonitorTypeDialogOpen}>
          <DialogContent className="bg-card border-border sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Select Monitor Type</DialogTitle>
              <DialogDescription>
                Choose the type of monitor you want to create
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4">
              <button
                onClick={() => handleMonitorTypeSelect("website")}
                className="flex flex-col items-center gap-3 p-6 rounded-lg border-2 border-border bg-card hover:border-primary transition-all"
              >
                <Globe className="h-8 w-8 text-primary" />
                <div className="text-center">
                  <h3 className="font-semibold text-foreground">Website Monitoring</h3>
                  <p className="text-xs text-muted-foreground mt-1">Monitor website uptime</p>
                </div>
              </button>

              <button
                onClick={() => handleMonitorTypeSelect("dns")}
                className="flex flex-col items-center gap-3 p-6 rounded-lg border-2 border-border bg-card hover:border-primary transition-all"
              >
                <Server className="h-8 w-8 text-primary" />
                <div className="text-center">
                  <h3 className="font-semibold text-foreground">DNS Monitoring</h3>
                  <p className="text-xs text-muted-foreground mt-1">Monitor DNS records</p>
                </div>
              </button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Website Monitor Dialog */}
        <Dialog open={isWebsiteDialogOpen} onOpenChange={setIsWebsiteDialogOpen}>
          <DialogContent className="bg-card border-border">
            <DialogHeader>
              <DialogTitle>Create Website Monitor</DialogTitle>
              <DialogDescription>
                Monitor website uptime and performance
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="website-url">URL</Label>
                <Input
                  id="website-url"
                  placeholder="https://example.com"
                  value={newWebsiteMonitorUrl}
                  onChange={(e) =>
                    setNewWebsiteMonitorUrl(e.target.value)
                  }
                  className="bg-muted/50 border-border"
                />
              </div>
              <Button
                onClick={handleWebsiteSubmit}
                className="w-full bg-primary hover:bg-primary/90"
              >
                Create Monitor
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* DNS Monitor Dialog */}
        <Dialog open={isDnsDialogOpen} onOpenChange={setIsDnsDialogOpen}>
          <DialogContent className="bg-card border-border">
            <DialogHeader>
              <DialogTitle>Create DNS Monitor</DialogTitle>
              <DialogDescription>
                Monitor DNS records and resolution
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="dns-domain">Domain</Label>
                <Input
                  id="dns-domain"
                  placeholder="example.com"
                  value={newDnsMonitor.domain}
                  onChange={(e) =>
                    setNewDnsMonitor({ ...newDnsMonitor, domain: e.target.value })
                  }
                  className="bg-muted/50 border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dns-resolver">Resolver</Label>
                <Input
                  id="dns-resolver"
                  placeholder="i.e. if want to add google resolver, then input 8.8.8.8"
                  value={newDnsMonitor.resolver}
                  onChange={(e) =>
                    setNewDnsMonitor({ ...newDnsMonitor, resolver: e.target.value })
                  }
                  className="bg-muted/50 border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dns-record-type">IP Address</Label>
                <Input
                  id="dns-resolver"
                  placeholder="22:33:44:55"
                  value={newDnsMonitor.ip_addr}
                  onChange={(e) =>
                    setNewDnsMonitor({ ...newDnsMonitor, ip_addr: e.target.value })
                  }
                  className="bg-muted/50 border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dns-interval">Interval (seconds)</Label>
                <Input
                  id="dns-interval"
                  type="number"
                  placeholder="60"
                  value={newDnsMonitor.interval}
                  onChange={(e) =>
                    setNewDnsMonitor({ ...newDnsMonitor, interval: e.target.value })
                  }
                  className="bg-muted/50 border-border"
                />
              </div>
              <Button
                onClick={handleDnsSubmit}
                className="w-full bg-primary hover:bg-primary/90"
              >
                Create Monitor
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="website" className="w-full">
        <TabsList className="bg-muted">
          <TabsTrigger value="website">Website</TabsTrigger>
          <TabsTrigger value="dns">DNS</TabsTrigger>
        </TabsList>

        <TabsContent value="website" className="mt-6">
          {renderMonitorTable(websiteMonitor, true, false)}
        </TabsContent>

        <TabsContent value="dns" className="mt-6">
          {renderMonitorTable(dnsMonitor, true, true)}
        </TabsContent>
      </Tabs>
    </div>
  );
}
