import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  AlertCircle,
  Calendar,
  Activity,
  Zap,
  Radio,
  Grid,
  BarChart3,
  ChevronRight,
  Search,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const navigationItems = [
  { title: "Incidents", url: "/dashboard/incidents", icon: AlertCircle, badge: 1 },
  { title: "Who's on-call?", url: "/dashboard/oncall", icon: Calendar },
  { title: "Monitors", url: "/dashboard/monitors", icon: Activity },
  { title: "Heartbeats", url: "/dashboard/heartbeats", icon: Zap },
  { title: "Status pages", url: "/dashboard/status-pages", icon: Radio },
  { title: "Integrations", url: "/dashboard/integrations", icon: Grid },
  { title: "Reporting", url: "/dashboard/reporting", icon: BarChart3 },
];

function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-sidebar">
        <div className="p-4 border-b border-sidebar-border">
          {!collapsed && (
            <h1 className="text-xl font-bold text-sidebar-foreground">UptimeWatch</h1>
          )}
          {collapsed && (
            <div className="flex justify-center">
              <Activity className="h-6 w-6 text-sidebar-primary" />
            </div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive
                            ? "bg-sidebar-accent text-sidebar-accent-foreground"
                            : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && (
                        <>
                          <span className="flex-1">{item.title}</span>
                          {item.badge && (
                            <Badge
                              variant="secondary"
                              className="bg-primary text-primary-foreground"
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

const incidentFormSchema = z.object({
  title: z.string().min(1, "Title is required").max(100),
  description: z.string().min(1, "Description is required").max(500),
  affectedMonitor: z.string().min(1, "Please select a monitor"),
});

export default function DashboardLayout() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isIncidentDialogOpen, setIsIncidentDialogOpen] = useState(false);
  
  const form = useForm<z.infer<typeof incidentFormSchema>>({
    resolver: zodResolver(incidentFormSchema),
    defaultValues: {
      title: "",
      description: "",
      affectedMonitor: "",
    },
  });

  const onSubmitIncident = (values: z.infer<typeof incidentFormSchema>) => {
    console.log(values);
    toast({
      title: "Incident reported",
      description: "Your incident has been successfully reported.",
    });
    setIsIncidentDialogOpen(false);
    form.reset();
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />

        <div className="flex-1 flex flex-col">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-border bg-background/80 backdrop-blur-lg px-6">
            <SidebarTrigger />
            
            <div className="flex-1 flex items-center gap-4 max-w-3xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 bg-muted/50 border-border"
                />
              </div>
            </div>

            <Button 
              variant="default" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => setIsIncidentDialogOpen(true)}
            >
              Report a new incident
            </Button>
          </header>

          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </div>
      </div>

      <Dialog open={isIncidentDialogOpen} onOpenChange={setIsIncidentDialogOpen}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Report a New Incident</DialogTitle>
            <DialogDescription>
              Fill in the details to report a new incident. This will notify your team.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmitIncident)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Incident Title</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Website down" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="affectedMonitor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Affected Monitor</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., google.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe what happened..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-3 justify-end pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsIncidentDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">Report Incident</Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </SidebarProvider>
  );
}
