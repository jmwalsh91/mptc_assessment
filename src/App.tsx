import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateAcct from "./forms/CreateAcct";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import StaffDashboard from "./pages/Dashboard";
import Index from "./pages/Index";
import { queryClient } from "./services/QueryClient";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <div>App goes here</div>
      <BrowserRouter>
     
          <Routes>
            <Route path="/" element={<Index/>} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/dash" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
        <CreateAcct />
  
    </QueryClientProvider>
  );
}
