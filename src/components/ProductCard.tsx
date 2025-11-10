import { ShoppingCart, Plus } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  unit: string;
  category: string;
  inStock: boolean;
  discount?: number;
  image?: string;
}

export function ProductCard({ 
  name, 
  price, 
  unit, 
  category, 
  inStock, 
  discount,
  image 
}: ProductCardProps) {
  const discountedPrice = discount ? price * (1 - discount / 100) : price;

  return (
    <Card className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-square bg-secondary overflow-hidden">
        {image ? (
          <ImageWithFallback 
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-accent/20">
            <span className="text-4xl opacity-50">🛒</span>
          </div>
        )}
        {discount && (
          <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground">
            -{discount}%
          </Badge>
        )}
        {!inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="destructive">Out of Stock</Badge>
          </div>
        )}
      </div>
      
      <div className="p-4 space-y-3">
        <div>
          <p className="text-xs text-muted-foreground mb-1">{category}</p>
          <h4 className="text-foreground line-clamp-2">{name}</h4>
        </div>
        
        <div className="flex items-baseline gap-2">
          <span className="text-primary">${discountedPrice.toFixed(2)}</span>
          {discount && (
            <span className="text-sm text-muted-foreground line-through">
              ${price.toFixed(2)}
            </span>
          )}
          <span className="text-xs text-muted-foreground">/ {unit}</span>
        </div>
        
        <Button 
          className="w-full bg-primary hover:bg-primary/90 gap-2" 
          disabled={!inStock}
        >
          <Plus className="h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
}
