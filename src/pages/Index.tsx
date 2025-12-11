import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import WhyUsSection from "@/components/WhyUsSection";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";
import { PriceCalculator } from "@/components/PriceCalculator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        
        {/* Price Calculators Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  מחשבון מחירים
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                חשבו את המחיר המדויק לפי הכמות שאתם צריכים
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="colored-paper" className="w-full">
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-6 sm:mb-8 gap-1 sm:gap-2 h-auto">
                  <TabsTrigger value="colored-paper" className="text-[10px] xs:text-xs sm:text-sm py-2 px-2 sm:px-4">צמידי נייר</TabsTrigger>
                  <TabsTrigger value="fabric" className="text-[10px] xs:text-xs sm:text-sm py-2 px-2 sm:px-4">צמידי בד</TabsTrigger>
                  <TabsTrigger value="graphic" className="text-[10px] xs:text-xs sm:text-sm py-2 px-2 sm:px-4">נייר + גרפיקה</TabsTrigger>
                  <TabsTrigger value="tags" className="text-[10px] xs:text-xs sm:text-sm py-2 px-2 sm:px-4">תגי הפקה</TabsTrigger>
                </TabsList>
                
                <TabsContent value="colored-paper">
                  <PriceCalculator productId="colored-paper-wristbands" />
                </TabsContent>
                <TabsContent value="fabric">
                  <PriceCalculator productId="fabric-wristbands" />
                </TabsContent>
                <TabsContent value="graphic">
                  <PriceCalculator productId="paper-graphic-wristbands" />
                </TabsContent>
                <TabsContent value="tags">
                  <PriceCalculator productId="production-tags" />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        
        <WhyUsSection />
        <GallerySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
