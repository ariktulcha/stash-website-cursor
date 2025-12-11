import { useState, useMemo, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MessageCircle, TrendingDown } from "lucide-react";
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
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set());
  const [selectedVariant, setSelectedVariant] = useState<string>("");

  // Initialize quantity and variant
  useEffect(() => {
    if (productPricing) {
      setQuantity(productPricing.minQuantity);
      
      // Set default variant if has variants
      if (productPricing.hasVariants && productPricing.variants && productPricing.variants.length > 0) {
        setSelectedVariant(productPricing.variants[0].id);
      }
    }
  }, [productPricing]);

  // Get the current pricing structure (use selected variant or direct pricing)
  const currentPricing = useMemo(() => {
    if (!productPricing) return null;
    
    // If has variants, use the selected variant
    if (productPricing.hasVariants && productPricing.variants && productPricing.variants.length > 0) {
      const variant = productPricing.variants.find(v => v.id === selectedVariant);
      return variant || productPricing.variants[0];
    }
    
    // Otherwise use direct pricing
    return productPricing;
  }, [productPricing, selectedVariant]);

  const priceCalculation = useMemo(() => {
    if (!productPricing || !currentPricing) return null;

    // Get tiers from current pricing
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
    const savings = minTierPrice - totalPrice;
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

  return (
    <Card variant="gradient" className="mt-8">
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {/* Variant Selection */}
          {productPricing.hasVariants && productPricing.variants && productPricing.variants.length > 0 && (
            <div>
              <Label className="mb-2 block text-base text-center">
                סוג הדפסה
              </Label>
              <RadioGroup
                value={selectedVariant}
                onValueChange={setSelectedVariant}
                className="space-y-2 flex flex-col items-center"
                dir="rtl"
              >
                {productPricing.variants.map((variant) => (
                  <div key={variant.id} className="flex items-center gap-2 w-full justify-center">
                    <RadioGroupItem value={variant.id} id={variant.id} />
                    <Label
                      htmlFor={variant.id}
                      className="flex-1 cursor-pointer text-center text-sm"
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
            <Label htmlFor="quantity" className="mb-2 block text-base text-center">
              כמות יחידות
            </Label>
            <div className="flex flex-col gap-3 items-center">
              <Input
                id="quantity"
                type="number"
                min={productPricing.minQuantity}
                value={quantity}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (!isNaN(val) && val >= productPricing.minQuantity) {
                    handleQuantityChange(val);
                  } else if (e.target.value === "" || e.target.value === "0") {
                    // Allow empty input while typing
                    setQuantity(productPricing.minQuantity);
                  }
                }}
                onBlur={(e) => {
                  const val = Number(e.target.value);
                  if (isNaN(val) || val < productPricing.minQuantity) {
                    setQuantity(productPricing.minQuantity);
                  }
                }}
                className="text-2xl font-semibold text-center w-full max-w-xs py-6"
                dir="ltr"
                placeholder={`הזן כמות (מינימום: ${productPricing.minQuantity.toLocaleString('he-IL')})`}
              />
              <span className="text-sm text-muted-foreground text-center">
                מינימום: {productPricing.minQuantity.toLocaleString('he-IL')} יחידות
              </span>
            </div>
            <div className="mt-4">
              <Slider
                value={[Math.min(quantity, maxSliderValue)]}
                onValueChange={([value]) => handleQuantityChange(value)}
                min={productPricing.minQuantity}
                max={maxSliderValue}
                step={productPricing.minQuantity >= 500 ? 50 : 25}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>{productPricing.minQuantity.toLocaleString('he-IL')}</span>
                <span>{maxSliderValue.toLocaleString('he-IL')}</span>
              </div>
            </div>
          </div>

          {/* Additional Options */}
          {productPricing.additionalOptions && productPricing.additionalOptions.length > 0 && (
            <div>
              <Label className="mb-2 block text-base text-center">
                אפשרויות נוספות
              </Label>
              <div className="space-y-2 flex flex-col items-center">
                {productPricing.additionalOptions.map((option) => (
                  <div key={option.id} className="flex items-center gap-2 w-full justify-center">
                    <Checkbox
                      id={option.id}
                      checked={selectedOptions.has(option.id)}
                      onCheckedChange={() => handleOptionToggle(option.id)}
                    />
                    <Label
                      htmlFor={option.id}
                      className="cursor-pointer text-center text-sm"
                    >
                      {option.name}
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
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-1">
                מחיר ליחידה
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-primary">
                ₪{priceCalculation.unitPrice.toFixed(2)}
                {priceCalculation.additionalCost > 0 && (
                  <span className="text-lg text-muted-foreground block mt-1">
                    + ₪{(priceCalculation.additionalCost / quantity).toFixed(2)} תוספות
                  </span>
                )}
              </div>
            </div>
            <div className="text-center">
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
            <div className="bg-success/10 border border-success/20 rounded-lg p-3 flex items-center justify-center gap-2">
              <TrendingDown className="h-4 w-4 text-success flex-shrink-0" />
              <div className="text-sm text-center">
                <span className="font-semibold text-success">
                  חיסכון של ₪{priceCalculation.savings.toLocaleString('he-IL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className="text-muted-foreground mr-1">
                  ({priceCalculation.savingsPercent.toFixed(0)}%) בהשוואה לכמות מינימלית
                </span>
              </div>
            </div>
          )}

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
              const message = `היי, אני מעוניין ב-${quantity.toLocaleString('he-IL')} יחידות.${variantText}${optionsText}\n\nהמחיר שהמחשבון הציג:\n• מחיר ליחידה: ₪${priceCalculation.unitPrice.toFixed(2)}${priceCalculation.additionalCost > 0 ? ` + ₪${(priceCalculation.additionalCost / quantity).toFixed(2)} תוספות` : ''}\n• מחיר כולל: ₪${priceCalculation.totalPrice.toLocaleString('he-IL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
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
