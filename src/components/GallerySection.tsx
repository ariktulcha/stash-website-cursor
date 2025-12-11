import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const GallerySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // For now using placeholder descriptions - images would be generated separately
  const galleryItems = [
    {
      id: 1,
      title: "מסיבת חוף - תל אביב",
      description: "צמידי בד עמידים במים לאירוע חוף מושלם",
      type: "מסיבת חוף"
    },
    {
      id: 2,
      title: "פסטיבל מוזיקה",
      description: "צמידי נייר צבעוניים למיון קהל לפי אזורים",
      type: "פסטיבל"
    },
    {
      id: 3,
      title: "אירוע עסקי - חיפה",
      description: "תגי הפקה אלגנטיים לכנס מקצועי",
      type: "אירוע עסקי"
    },
    {
      id: 4,
      title: "חתונה בטבע",
      description: "צמידי נייר עם גרפיקה מותאמת אישית",
      type: "חתונה"
    },
    {
      id: 5,
      title: "מועדון לילה - ירושלים",
      description: "צמידי בד עם לוגו הברנד בהדפסה איכותית",
      type: "מועדון"
    },
    {
      id: 6,
      title: "הופעה פרטית",
      description: "תגי הפקה מעוצבים לניהול צוות ולקוחות VIP",
      type: "הופעה"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              גלריית לקוחות
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            מברים ומועדונים ועד פסטיבלים והופעות - הלקוחות שלנו מספרים את הסיפור
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Gallery Display */}
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden bg-gradient-card shadow-card">
            {/* Placeholder for gallery image */}
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  {galleryItems[currentSlide].title}
                </div>
                <div className="text-lg text-muted-foreground mb-2">
                  {galleryItems[currentSlide].description}
                </div>
                <div className="inline-block px-4 py-2 bg-gradient-hero rounded-full text-sm font-medium text-white">
                  {galleryItems[currentSlide].type}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
            onClick={prevSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
            onClick={nextSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2 space-x-reverse">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary shadow-glow' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Grid of Event Types */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              className={`p-4 rounded-lg border transition-all duration-300 ${
                index === currentSlide
                  ? 'border-primary bg-primary/10 shadow-glow'
                  : 'border-border hover:border-primary/50 bg-card'
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="text-sm font-medium text-center">
                {item.type}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;