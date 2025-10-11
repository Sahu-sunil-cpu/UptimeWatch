import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Play, AlertCircle, Pause, Settings } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const MonitorDetail = () => {
  const { monitorId } = useParams();
  const navigate = useNavigate();

  // Mock data - replace with real data
  const monitor = {
    name: "google.com",
    status: "up",
    checkInterval: "3 minutes",
    uptime: "6 mins 58 seconds",
    lastChecked: "25 seconds ago",
    incidents: 0,
  };

  const responseData = [
    { time: "00:00", value: 320 },
    { time: "01:00", value: 280 },
    { time: "02:00", value: 250 },
    { time: "03:00", value: 240 },
    { time: "04:00", value: 230 },
    { time: "05:00", value: 220 },
    { time: "06:00", value: 210 },
  ];

  const getStatusColor = (status: string) => {
    return status === "up" ? "bg-green-500" : status === "degraded" ? "bg-yellow-500" : "bg-red-500";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/monitors")}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Monitors</span>
              <span>›</span>
              <span className="text-foreground font-medium">{monitor.name}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Monitor Status */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-3 h-3 rounded-full ${getStatusColor(monitor.status)} animate-pulse`} />
            <h1 className="text-3xl font-bold text-foreground">{monitor.name}</h1>
          </div>
          <p className="text-muted-foreground ml-6">
            {monitor.status === "up" ? "Up" : "Down"} · Checked every {monitor.checkInterval}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Button variant="outline" size="sm">
            <Play className="mr-2 h-4 w-4" />
            Send test alert
          </Button>
          <Button variant="outline" size="sm">
            <AlertCircle className="mr-2 h-4 w-4" />
            Incidents
          </Button>
          <Button variant="outline" size="sm">
            <Pause className="mr-2 h-4 w-4" />
            Pause
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Configure
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-2">Currently up for</p>
              <p className="text-2xl font-bold text-foreground">{monitor.uptime}</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-2">Last checked at</p>
              <p className="text-2xl font-bold text-foreground">{monitor.lastChecked}</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-2">Incidents</p>
              <p className="text-2xl font-bold text-foreground">{monitor.incidents}</p>
            </CardContent>
          </Card>
        </div>

        {/* Response Times Chart */}
        <Card className="bg-card/50 backdrop-blur border-border/50">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-semibold text-foreground">Response times</h2>
                <Select defaultValue="europe">
                  <SelectTrigger className="w-[140px] h-9">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="europe">Europe</SelectItem>
                    <SelectItem value="us-east">US East</SelectItem>
                    <SelectItem value="us-west">US West</SelectItem>
                    <SelectItem value="asia">Asia</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Tabs defaultValue="day">
                <TabsList>
                  <TabsTrigger value="day">Day</TabsTrigger>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="w-full h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={responseData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis 
                    dataKey="time" 
                    stroke="hsl(var(--muted-foreground))"
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    label={{ value: 'ms', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MonitorDetail;
