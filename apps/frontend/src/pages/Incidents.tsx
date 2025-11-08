import { useEffect, useState } from "react";
import { Shield, Copy, CheckCircle, Users, FileText, MoreVertical, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "@/hooks/use-toast";
import axios from "axios";
import { AUTHORIZATION, BASE_URL } from "@/lib/config";

interface Incident {
  id: string;
  name: string;
  description: string;
  status: "Ongoing" | "Resolved";
  startedAt: string;
  length: string;
  commentsCount: number
}

const mockIncidents = [
  {
    id: 1,
    name: "google.com",
    description: "Sample incident",
    status: "ongoing",
    startedAt: "3 days ago",
    length: "Ongoing",
    commentsCount: 2,
  },
];

const onboardingSteps = [
  {
    id: 1,
    title: "Create your first monitor",
    completed: true,
    icon: CheckCircle,
  },
  {
    id: 2,
    title: "Connect Slack or Microsoft Teams",
    description: "Get alerted about new incidents, and acknowledge and resolve incidents directly from Slack.",
    completed: false,
    icon: Shield,
    action: "Integrations",
  },
  {
    id: 3,
    title: "Invite colleagues",
    completed: false,
    icon: Users,
  },
  {
    id: 4,
    title: "Create a public status page",
    completed: false,
    icon: FileText,
  },
];

export default function Incidents() {
  const [activeTab, setActiveTab] = useState("comments");
  const [copiedId, setCopiedId] = useState<number | string | null>(null);
  const completedSteps = onboardingSteps.filter(step => step.completed).length;
  const totalSteps = onboardingSteps.length;

  const copyIncidentDetails = (incident: Incident) => {
    const details = `Incident: ${incident.name}\nDescription: ${incident.description}\nStatus: ${incident.status}\nStarted: ${incident.startedAt}\nLength: ${incident.length}`;
    navigator.clipboard.writeText(details);
    setCopiedId(incident.id);
    toast({
      title: "Copied to clipboard",
      description: "Incident details have been copied.",
    });
    setTimeout(() => setCopiedId(null), 2000);
  };

  const [incidents, setIncidents] = useState<Incident[]>([])


  const getIncidents = async () => {
    const res = await axios.get(`${BASE_URL}/api/v1/core/alerts`, {
      headers: {
        'Authorization': AUTHORIZATION
      }
    }
    )

    //console.log(res.data)

    if (!res.data.message) {
      return
    }

    const responseData: Incident[] = res.data.message.map(d => (
      {
        id: d.id,
        name: d.alert_type,
        description: d.msg,
        status: d.status,
        startedAt: new Date(d.created_at).toLocaleString(),
        length: d.status,
        commentsCount: 2,
      }
    ))


    //console.log(responseData)

    setIncidents([...responseData])
  }

  useEffect(() => {
    getIncidents()
  }, [])


  return (
    <div className="space-y-6 max-w-7xl">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          How are you today?
        </h1>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-muted">
          <TabsTrigger value="comments" className="gap-2">
            <Copy className="h-4 w-4" />
            Comments
          </TabsTrigger>
          <TabsTrigger value="post-mortems" className="gap-2">
            <FileText className="h-4 w-4" />
            Post-mortems
          </TabsTrigger>
        </TabsList>

        <TabsContent value="comments" className="mt-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-medium">Recent Incidents</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-border hover:bg-transparent">
                    <TableHead>Incident</TableHead>
                    <TableHead>Started at</TableHead>
                    <TableHead>Length</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {incidents.map((incident) => (
                    <TableRow
                      key={incident.id}
                      className="border-border hover:bg-muted/50 cursor-pointer"
                    >
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded bg-destructive/20">
                            <Shield className="h-4 w-4 text-destructive" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground">{incident.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {incident.description}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Copy className="h-4 w-4" />
                          {incident.commentsCount}
                          <span className="ml-2">{incident.startedAt}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="destructive"
                          className="bg-destructive/20 text-destructive border-destructive/30"
                        >
                          <div className="w-2 h-2 rounded-full bg-destructive mr-2" />
                          {incident.length}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={(e) => {
                            e.stopPropagation();
                            copyIncidentDetails(incident);
                          }}
                        >
                          {copiedId === incident.id ? (
                            <Check className="h-4 w-4 text-primary" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="post-mortems" className="mt-6">
          <Card className="bg-card border-border">
            <CardContent className="py-12">
              <div className="text-center text-muted-foreground">
                <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No post-mortems yet</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="bg-card border-border">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Get the most out of Better Stack</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>
                {completedSteps} out of {totalSteps} steps left
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {onboardingSteps.map((step) => (
            <div
              key={step.id}
              className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors"
            >
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full ${step.completed
                    ? "bg-primary/20 text-primary"
                    : "bg-muted text-muted-foreground"
                  }`}
              >
                <step.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground mb-1">{step.title}</h3>
                {step.description && (
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                )}
              </div>
              {step.action && (
                <Button variant="secondary" size="sm">
                  {step.action}
                </Button>
              )}
              {!step.completed && !step.action && (
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
