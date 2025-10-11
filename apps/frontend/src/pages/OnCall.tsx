import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlayCircle, Calendar, ArrowRight, CheckCircle2, Circle } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const OnCall = () => {
  const schedule = [
    { day: "Monday", person: "---", time: "00:00 - 24:00" },
    { day: "Tuesday", person: "---", time: "00:00 - 24:00" },
    { day: "Wednesday", person: "---", time: "00:00 - 24:00" },
    { day: "Thursday", person: "---", time: "00:00 - 24:00" },
    { day: "Friday", person: "---", time: "00:00 - 24:00" },
    { day: "Saturday", person: "---", time: "00:00 - 24:00" },
    { day: "Sunday", person: "---", time: "00:00 - 24:00" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">Who's On-Call</h1>
            <Button variant="outline" asChild>
              <a href="/">← Back to Home</a>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Schedule Preview */}
          <div className="space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Weekly Rotation Schedule</h2>
              </div>
              
              <div className="space-y-2">
                {schedule.map((day) => (
                  <div
                    key={day.day}
                    className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/30 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-medium text-foreground w-24">{day.day}</span>
                      <span className="text-muted-foreground">{day.person}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{day.time}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Tutorial Button */}
            <Card className="p-6 bg-card/50 backdrop-blur border-border/50 relative overflow-hidden group cursor-pointer hover:border-primary/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-4">
                <div className="relative">
                  <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <PlayCircle className="h-12 w-12 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                    3 min
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Watch Tutorial</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn how to set up on-call rotations and manage your team effectively.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Upgrade CTA */}
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-to-br from-primary/10 via-card to-card backdrop-blur border-primary/20">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Upgrade to enable on-call schedules</h2>
                  <p className="text-muted-foreground">
                    Right now everyone gets notified during incidents. Invite colleagues and upgrade to configure schedules.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="hero" size="lg" className="flex-1">
                    Configure Schedule
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="#docs">View Docs</a>
                  </Button>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      Invite Colleagues
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Invite Team Members</DialogTitle>
                      <DialogDescription>
                        Add colleagues to your team so they can participate in on-call rotations.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="john@company.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role">Role</Label>
                        <Select>
                          <SelectTrigger id="role">
                            <SelectValue placeholder="Select a role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="admin">Admin</SelectItem>
                            <SelectItem value="member">Member</SelectItem>
                            <SelectItem value="viewer">Viewer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="hero" className="flex-1">Send Invitation</Button>
                      <Button variant="outline">Cancel</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>

            {/* Get Started Section */}
            <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
              <h3 className="text-lg font-semibold mb-4">Get Started</h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Step 1: Create your team</h4>
                    <p className="text-sm text-muted-foreground">
                      Invite colleagues to join your workspace and collaborate on incident response.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <Circle className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Step 2: Configure rotation</h4>
                    <p className="text-sm text-muted-foreground">
                      Set up your on-call schedule with automatic rotation and escalation policies.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">1 of 2 steps completed</span>
                  </div>
                  <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-primary rounded-full" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnCall;
