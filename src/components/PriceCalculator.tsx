import { useState, useMemo, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Calculator, MessageCircle, TrendingDown } from "lucide-react";
import pricingData from "@/data/pricing.json";

interface PriceCalculatorProps {
  productId: string;
}

// Helper function to find the appropriate tier based on quantity
function findTier(tiers: Array<{ quantity: number; pricePerUnit: number }>, quantity: number) {
  // Sort tiers by quantity descending to find the largest tier where tier.quantity <= user quantity
  const sortedTiers = [...tiers].sort((a, b) => b.quantity - a.quantity);
  
  // Find the largest tier where the tier quantity is <= user quantity
  const tier = sortedTiers.find(t => quantity >= t.quantity);
  
  // If no tier found (quantity is less than minimum), use the smallest tier
  return tier || sortedTiers[sortedTiers.length - 1];
}

export const PriceCalculator = ({ productId }: PriceCalculatorProps) => {
  const productPricing = pricingData[productId as keyof typeof pricingData];
  
  // Initialize state
  const [quantity, setQuantity] = useState(productPricing?.minQuantity || 500);
  const [selectedVariant, setSelectedVariant] = useState<string>("");
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set());

  // Initialize variant selection
  useEffect(() => {
    if (productPricing) {
      setQuantity(productPricing.minQuantity);
      
      if (productPricing.hasVariants && productPricing.variants && productPricing.variants.length > 0) {
        setSelectedVariant(productPricing.variants[0].id);
      }
    }
  }, [productPricing]);

  // Get the current pricing structure (either variants or direct tiers)
  const currentPricing = useMemo(() => {
    if (!productPricing) return null;
    
    if (productPricing.hasVariants && productPricing.variants) {
      const variant = productPricing.variants.find(v => v.id === selectedVariant);
      return variant || productPricing.variants[0];
    }
    
    return productPricing;
  }, [productPricing, selectedVariant]);

  const priceCalculation = useMemo(() => {
    if (!productPricing || !currentPricing) return null;

    // Get tiers from current pricing (either variant or direct)
    const tiers = currentPricing.tiers || [];
    if (tiers.length === 0) return null;

    // Find the appropriate tier
    const tier = findTier(tiers, quantity);
    if (!tier) return null;

    let unitPrice = tier.pricePerUnit;
    let baseTotalPrice = quantity * unitPrice;

    // Add additional options costs
    let additionalCost = 0;
    if (productPricing.additionalOptions) {
      productPricing.additionalOptions.forEach(option => {
        if (selectedOptions.has(option.id)) {
          additionalCost += option.pricePerUnit * quantity;
        }
      });
    }

    const totalPrice = baseTotalPrice + additionalCost;

    // Calculate savings compared to minimum tier
    const minTier = tiers[tiers.length - 1]; // Smallest quantity tier
    const minTierPrice = quantity * minTier.pricePerUnit;
    const savings = minTierPrice - baseTotalPrice;
    const savingsPercent = minTierPrice > 0 ? (savings / minTierPrice) * 100 : 0;

    return {
      unitPrice,
      baseTotalPrice,
      additionalCost,
      totalPrice,
      quantity,
      tier: tier,
      savings,
      savingsPercent,
    };
  }, [quantity, productPricing, currentPricing, selectedOptions]);

  if (!productPricing || !priceCalculation || !currentPricing) return null;

  const handleQuantityChange = (value: number) => {
    const newValue = Math.max(productPricing.minQuantity, value);
    setQuantity(newValue);
  };

  const handleOptionToggle = (optionId: string) => {
    const newOptions = new Set(selectedOptions);
    if (newOptions.has(optionId)) {
      newOptions.delete(optionId);
    } else {
      newOptions.add(optionId);
    }
    setSelectedOptions(newOptions);
  };

  // Get max quantity from tiers for slider
  const tiers = currentPricing.tiers || [];
  const maxTierQuantity = tiers.length > 0 
    ? Math.max(...tiers.map(t => t.quantity))
    : productPricing.minQuantity * 10;
  const maxSliderValue = Math.max(maxTierQuantity, 10000);

  // Get available quantities for quick selection
  const availableQuantities = tiers.map(t => t.quantity).sort((a, b) => a - b);

  return (
    <Card variant="gradient" className="mt-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 flex-row-reverse">
          <Calculator className="h-5 w-5" />
          מחשבון מחיר
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {/* Variant Selection */}
          {productPricing.hasVariants && productPricing.variants && (
            <div>
              <Label className="mb-2 block text-base text-right">
                סוג מוצר
              </Label>
              <RadioGroup
                value={selectedVariant}
                onValueChange={setSelectedVariant}
                className="space-y-2"
                dir="rtl"
              >
                {productPricing.variants.map((variant) => (
                  <div key={variant.id} className="flex items-center space-x-2 space-x-reverse flex-row-reverse">
                    <RadioGroupItem value={variant.id} id={variant.id} />
                    <Label
                      htmlFor={variant.id}
                      className="flex-1 cursor-pointer text-right"
                    >
                      {variant.name}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Quantity Input */}
          <div>
            <Label htmlFor="quantity" className="mb-2 block text-base text-right">
              כמות יחידות
            </Label>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
              <Input
                id="quantity"
                type="number"
                min={productPricing.minQuantity}
                value={quantity}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (!isNaN(val) && val >= productPricing.minQuantity) {
                    handleQuantityChange(val);
                  }
                }}
                className="text-lg font-semibold text-center sm:flex-1"
                dir="ltr"
              />
              <span className="text-sm text-muted-foreground text-right sm:text-right whitespace-nowrap">
                מינימום: {productPricing.minQuantity.toLocaleString('he-IL')}
              </span>
            </div>
            <Slider
              value={[quantity]}
              onValueChange={([value]) => handleQuantityChange(value)}
              min={productPricing.minQuantity}
              max={maxSliderValue}
              step={productPricing.minQuantity >= 500 ? 50 : 25}
              className="mt-4"
            />
            {/* Quick quantity selection buttons */}
            {availableQuantities.length > 0 && availableQuantities.length <= 12 && (
              <div className="flex flex-wrap gap-2 mt-3 justify-end">
                {availableQuantities.map((qty) => (
                  <Button
                    key={qty}
                    variant={quantity >= qty ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleQuantityChange(qty)}
                    className="text-xs"
                  >
                    {qty.toLocaleString('he-IL')}
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* Additional Options */}
          {productPricing.additionalOptions && productPricing.additionalOptions.length > 0 && (
            <div>
              <Label className="mb-2 block text-base text-right">
                אפשרויות נוספות
              </Label>
              <div className="space-y-2" dir="rtl">
                {productPricing.additionalOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2 space-x-reverse flex-row-reverse">
                    <Checkbox
                      id={option.id}
                      checked={selectedOptions.has(option.id)}
                      onCheckedChange={() => handleOptionToggle(option.id)}
                    />
                    <Label
                      htmlFor={option.id}
                      className="flex-1 cursor-pointer text-right text-sm"
                    >
                      {option.name}
                      {option.description && (
                        <span className="block text-xs text-muted-foreground mt-1">
                          {option.description}
                        </span>
                      )}
                      <span className="block text-xs font-semibold text-primary mt-1">
                        +₪{option.pricePerUnit.toFixed(2)} ליחידה
                      </span>
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Price Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t">
            <div className="text-right">
              <div className="text-sm text-muted-foreground mb-1">
                מחיר ליחידה
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-primary">
                ₪{priceCalculation.unitPrice.toFixed(2)}
                {priceCalculation.additionalCost > 0 && (
                  <span className="text-lg text-muted-foreground">
                    {" "}+ {priceCalculation.additionalCost / quantity} תוספות
                  </span>
                )}
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground mb-1">
                מחיר כולל
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-accent">
                ₪{priceCalculation.totalPrice.toLocaleString('he-IL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              {priceCalculation.additionalCost > 0 && (
                <div className="text-xs text-muted-foreground mt-1">
                  כולל תוספות: ₪{priceCalculation.additionalCost.toLocaleString('he-IL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              )}
            </div>
          </div>

          {/* Savings Display */}
          {priceCalculation.savings > 0 && (
            <div className="bg-success/10 border border-success/20 rounded-lg p-3 flex items-center gap-2 flex-row-reverse">
              <TrendingDown className="h-4 w-4 text-success flex-shrink-0" />
              <div className="text-sm text-right">
                <span className="font-semibold text-success">
                  חיסכון של ₪{priceCalculation.savings.toLocaleString('he-IL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className="text-muted-foreground mr-1">
                  ({priceCalculation.savingsPercent.toFixed(0)}%) בהשוואה לכמות מינימלית
                </span>
              </div>
            </div>
          )}

          {/* Price Tiers Info */}
          <div className="bg-muted/30 rounded-lg p-4">
            <div className="text-sm font-semibold mb-2 text-right">
              טבלת מחירים{currentPricing.name ? ` - ${currentPricing.name}` : ""}:
            </div>
            <div className="space-y-1 text-xs">
              {tiers.map((tier, index) => {
                const isActive = priceCalculation.tier.quantity === tier.quantity;
                const nextTier = tiers[index - 1];
                const displayQuantity = nextTier 
                  ? `${tier.quantity.toLocaleString('he-IL')} - ${(nextTier.quantity - 1).toLocaleString('he-IL')}`
                  : `${tier.quantity.toLocaleString('he-IL')}+`;
                
                return (
                  <div
                    key={index}
                    className={`flex justify-between items-center py-1 px-2 rounded flex-row-reverse ${
                      isActive ? "bg-primary/10 font-semibold" : ""
                    }`}
                  >
                    <span className="text-right">
                      {displayQuantity}
                    </span>
                    <span className={`text-right ${isActive ? "text-primary" : ""}`}>
                      ₪{tier.pricePerUnit.toFixed(2)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <Button
            variant="hero"
            size="lg"
            className="w-full flex items-center justify-center gap-2 flex-row-reverse"
            onClick={() => {
              const variantText = productPricing.hasVariants && currentPricing.name 
                ? `\nסוג: ${currentPricing.name}` 
                : "";
              const optionsText = selectedOptions.size > 0
                ? `\nאפשרויות נוספות: ${Array.from(selectedOptions).map(id => {
                    const option = productPricing.additionalOptions?.find(o => o.id === id);
                    return option?.name || id;
                  }).join(', ')}`
                : "";
              const message = `היי, אני מעוניין ב-${quantity.toLocaleString('he-IL')} יחידות.${variantText}${optionsText}\n\nהמחיר שהמחשבון הציג:\n• מחיר ליחידה: ₪${priceCalculation.unitPrice.toFixed(2)}\n• מחיר כולל: ₪${priceCalculation.totalPrice.toLocaleString('he-IL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
              window.open(
                `https://wa.me/9720559753446?text=${encodeURIComponent(message)}`,
                "_blank"
              );
            }}
          >
            <MessageCircle className="h-5 w-5" />
            שלחו לי הצעת מחיר
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
