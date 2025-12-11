import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-md mx-auto">
          <div className="mb-8">
            <AlertCircle className="h-24 w-24 text-destructive mx-auto mb-4" />
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              עמוד לא נמצא
            </h2>
            <p className="text-muted-foreground mb-8">
              מצטערים, העמוד שחיפשתם לא קיים או הועבר למקום אחר
            </p>
          </div>
          
          <Button 
            onClick={() => window.location.href = '/'}
            className="gap-2"
            size="lg"
          >
            <Home className="h-5 w-5" />
            חזרה לעמוד הבית
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
