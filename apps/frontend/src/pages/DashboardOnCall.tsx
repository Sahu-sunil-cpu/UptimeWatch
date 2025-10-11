import { useState } from "react";
import { Calendar, Users, ExternalLink, PlayCircle, ArrowUpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const teamMembers = [
  { name: "Alice", color: "bg-blue-500" },
  { name: "Bob", color: "bg-green-500" },
  { name: "Charlie", color: "bg-purple-500" },
];

export default function DashboardOnCall() {
  const [inviteForm, setInviteForm] = useState({
    name: "",
    email: "",
    role: "member",
  });

  return (
    <div className="space-y-6 max-w-7xl">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Who's On-Call</h1>
        <p className="text-muted-foreground">
          Manage on-call rotations and schedules for your team
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Weekly On-Call Schedule Preview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {weekDays.map((day, index) => (
                  <div key={day} className="flex items-center gap-4">
                    <div className="w-12 text-sm text-muted-foreground font-medium">
                      {day}
                    </div>
                    <div className="flex-1 h-10 rounded-lg overflow-hidden border border-border flex">
                      {teamMembers.map((member, idx) => (
                        <div
                          key={idx}
                          className={`flex-1 flex items-center justify-center text-sm font-medium text-white ${member.color} ${
                            idx === (index + index) % 3 ? "opacity-100" : "opacity-20"
                          }`}
                        >
                          {idx === (index + index) % 3 && member.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PlayCircle className="h-5 w-5" />
                Tutorial: Setting up on-call rotations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video bg-muted rounded-lg flex items-center justify-center group cursor-pointer hover:bg-muted/80 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg" />
                <PlayCircle className="h-16 w-16 text-primary group-hover:scale-110 transition-transform z-10" />
                <div className="absolute bottom-4 right-4 bg-background/90 px-2 py-1 rounded text-xs font-medium">
                  3 min
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowUpCircle className="h-5 w-5 text-primary" />
                Upgrade Required
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Right now everyone gets notified during incidents. Invite colleagues and upgrade to configure schedules.
              </p>
              <div className="space-y-2">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Configure Schedule
                </Button>
                <Button variant="secondary" className="w-full gap-2">
                  View Docs
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Get Started</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-1">Create your team</h4>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="secondary" size="sm" className="gap-2">
                        <Users className="h-4 w-4" />
                        Invite Colleagues
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-card border-border">
                      <DialogHeader>
                        <DialogTitle>Invite Team Member</DialogTitle>
                        <DialogDescription>
                          Add a new member to your on-call team
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            value={inviteForm.name}
                            onChange={(e) =>
                              setInviteForm({ ...inviteForm, name: e.target.value })
                            }
                            className="bg-muted/50 border-border"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            value={inviteForm.email}
                            onChange={(e) =>
                              setInviteForm({ ...inviteForm, email: e.target.value })
                            }
                            className="bg-muted/50 border-border"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="role">Role</Label>
                          <Select
                            value={inviteForm.role}
                            onValueChange={(value) =>
                              setInviteForm({ ...inviteForm, role: value })
                            }
                          >
                            <SelectTrigger className="bg-muted/50 border-border">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="admin">Admin</SelectItem>
                              <SelectItem value="member">Member</SelectItem>
                              <SelectItem value="viewer">Viewer</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button className="w-full bg-primary hover:bg-primary/90">
                          Send Invitation
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-1">Configure rotations</h4>
                  <p className="text-sm text-muted-foreground">
                    Set up your on-call schedule and rotation rules
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium text-primary">1 of 2</span> steps completed
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
