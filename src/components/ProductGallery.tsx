import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import productsData from "@/data/products.json";

interface ProductGalleryProps {
  productId: string;
}

const ProductGallery = ({ productId }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get product data from JSON
  const product = productsData[productId as keyof typeof productsData];
  
  if (!product || !product.gallery || product.gallery.length === 0) {
    return null;
  }

  // Filter out images without URLs
  const images = product.gallery.filter(img => img.url && img.url.trim() !== "");

  // If no images, show placeholder
  if (images.length === 0) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              גלריית המוצר
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden bg-gradient-card shadow-card">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    תמונות יופיעו כאן בקרוב
                  </div>
                  <div className="text-lg text-muted-foreground">
                    הוסף קישורי תמונות בקובץ products.json
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextLightbox = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevLightbox = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              גלריית המוצר
            </span>
          </h2>

          {/* Mobile: Slider, Desktop: Grid with main image */}
          <div className="max-w-4xl mx-auto">
            {/* Mobile Slider */}
            <div className="block md:hidden">
              <div className="relative">
                <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden bg-gradient-card shadow-card">
                  <img
                    src={images[currentIndex].url}
                    alt={images[currentIndex].title || `${product.name} - תמונה ${currentIndex + 1} | Stash Events`}
                    title={images[currentIndex].description || images[currentIndex].title}
                    className="w-full h-full object-cover"
                    onClick={() => openLightbox(currentIndex)}
                    loading={currentIndex === 0 ? "eager" : "lazy"}
                  />
                  
                  {images.length > 1 && (
                    <>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/90 hover:bg-background z-10 h-8 w-8"
                        onClick={prevImage}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/90 hover:bg-background z-10 h-8 w-8"
                        onClick={nextImage}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                    </>
                  )}

                  {/* Dots Indicator */}
                  {images.length > 1 && (
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 space-x-reverse z-10">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentIndex
                              ? 'bg-white shadow-glow w-6'
                              : 'bg-white/50 hover:bg-white/75'
                          }`}
                          onClick={() => setCurrentIndex(index)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Desktop: Main Image with Thumbnails */}
            <div className="hidden md:block">
              <div className="relative mb-6">
                <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden bg-gradient-card shadow-card">
                  <img
                    src={images[currentIndex].url}
                    alt={images[currentIndex].title || `${product.name} - תמונה ${currentIndex + 1} | Stash Events`}
                    title={images[currentIndex].description || images[currentIndex].title}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openLightbox(currentIndex)}
                    loading="eager"
                  />
                  
                  {images.length > 1 && (
                    <>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background z-10"
                        onClick={prevImage}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background z-10"
                        onClick={nextImage}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                    </>
                  )}

                  {/* Image Info */}
                  {(images[currentIndex].title || images[currentIndex].description) && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 lg:p-6">
                      {images[currentIndex].title && (
                        <h3 className="text-lg lg:text-xl font-bold text-white mb-2">
                          {images[currentIndex].title}
                        </h3>
                      )}
                      {images[currentIndex].description && (
                        <p className="text-white/90 text-sm">
                          {images[currentIndex].description}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Thumbnail Grid - Desktop Only */}
              {images.length > 1 && (
                <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
                  {images.map((image, index) => (
                    <Card
                      key={image.id}
                      variant="product"
                      className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                        index === currentIndex ? 'ring-2 ring-primary' : ''
                      }`}
                      onClick={() => setCurrentIndex(index)}
                    >
                      <CardContent className="p-0">
                        <div className="aspect-square overflow-hidden rounded-lg">
                          <img
                            src={image.url}
                            alt={image.title || `${product.name} - תמונה ${index + 1} | Stash Events`}
                            title={image.description || image.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl max-h-full">
            <img
              src={images[selectedImage].url}
              alt={images[selectedImage].title || `${product.name} - תמונה ${selectedImage + 1} | Stash Events`}
              title={images[selectedImage].description || images[selectedImage].title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 left-4 bg-background/80 hover:bg-background"
              onClick={closeLightbox}
            >
              <X className="h-4 w-4" />
            </Button>

            {images.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevLightbox();
                  }}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextLightbox();
                  }}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </>
            )}

            {(images[selectedImage].title || images[selectedImage].description) && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg">
                {images[selectedImage].title && (
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {images[selectedImage].title}
                  </h3>
                )}
                {images[selectedImage].description && (
                  <p className="text-white/90">
                    {images[selectedImage].description}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductGallery;

