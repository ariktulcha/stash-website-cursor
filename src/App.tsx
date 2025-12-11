import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WhichWristbandToChoose from "./pages/WhichWristbandToChoose";
import Privacy from "./pages/Privacy";
import DesignConsultation from "./pages/DesignConsultation";
import DeliveryTimes from "./pages/DeliveryTimes";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fabric-wristbands" element={<ProductPage productId="fabric-wristbands" />} />
          <Route path="/colored-paper-wristbands" element={<ProductPage productId="colored-paper-wristbands" />} />
          <Route path="/paper-graphic-wristbands" element={<ProductPage productId="paper-graphic-wristbands" />} />
          <Route path="/vinyl-wristbands" element={<ProductPage productId="vinyl-wristbands" />} />
          <Route path="/production-tags" element={<ProductPage productId="production-tags" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/which-wristband-to-choose" element={<WhichWristbandToChoose />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/design-consultation" element={<DesignConsultation />} />
          <Route path="/delivery-times" element={<DeliveryTimes />} />
          <Route path="/faq" element={<FAQ />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
