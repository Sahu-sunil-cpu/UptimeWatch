import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import DashboardLayout from "./components/DashboardLayout";
import Incidents from "./pages/Incidents";
import DashboardMonitors from "./pages/DashboardMonitors";
import DashboardMonitorDetail from "./pages/DashboardMonitorDetail";
import DashboardOnCall from "./pages/DashboardOnCall";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          
          {/* Dashboard Routes with Sidebar Layout */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Incidents />} />
            <Route path="incidents" element={<Incidents />} />
            <Route path="monitors" element={<DashboardMonitors />} />
            <Route path="monitors/:monitorId" element={<DashboardMonitorDetail />} />
            <Route path="oncall" element={<DashboardOnCall />} />
            <Route path="heartbeats" element={<NotFound />} />
            <Route path="status-pages" element={<NotFound />} />
            <Route path="integrations" element={<NotFound />} />
            <Route path="reporting" element={<NotFound />} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
