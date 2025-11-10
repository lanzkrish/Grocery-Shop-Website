import { ProductCard } from "./ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const products = [
  // Vegetables
  { id: 1, name: "Fresh Organic Tomatoes", price: 3.99, unit: "lb", category: "Vegetables", inStock: true, discount: 15 },
  { id: 2, name: "Crisp Lettuce", price: 2.49, unit: "head", category: "Vegetables", inStock: true },
  { id: 3, name: "Baby Carrots", price: 2.99, unit: "bag", category: "Vegetables", inStock: true },
  { id: 4, name: "Red Bell Peppers", price: 4.99, unit: "lb", category: "Vegetables", inStock: true, discount: 10 },
  { id: 5, name: "Organic Spinach", price: 3.49, unit: "bunch", category: "Vegetables", inStock: true },
  { id: 6, name: "Fresh Broccoli", price: 2.99, unit: "lb", category: "Vegetables", inStock: false },
  { id: 7, name: "Sweet Corn", price: 1.99, unit: "each", category: "Vegetables", inStock: true },
  { id: 8, name: "Cucumber", price: 1.49, unit: "each", category: "Vegetables", inStock: true },
  
  // Fruits
  { id: 9, name: "Fresh Strawberries", price: 4.99, unit: "lb", category: "Fruits", inStock: true, discount: 20 },
  { id: 10, name: "Organic Bananas", price: 0.99, unit: "lb", category: "Fruits", inStock: true },
  { id: 11, name: "Honeycrisp Apples", price: 3.99, unit: "lb", category: "Fruits", inStock: true },
  { id: 12, name: "Navel Oranges", price: 4.49, unit: "bag", category: "Fruits", inStock: true, discount: 15 },
  { id: 13, name: "Fresh Blueberries", price: 5.99, unit: "pint", category: "Fruits", inStock: true },
  { id: 14, name: "Red Grapes", price: 3.99, unit: "lb", category: "Fruits", inStock: true },
  { id: 15, name: "Watermelon", price: 6.99, unit: "each", category: "Fruits", inStock: true, discount: 10 },
  { id: 16, name: "Pineapple", price: 3.99, unit: "each", category: "Fruits", inStock: false },
  
  // Bakery
  { id: 17, name: "Artisan Sourdough Bread", price: 5.99, unit: "loaf", category: "Bakery", inStock: true },
  { id: 18, name: "Fresh Croissants", price: 4.49, unit: "pack", category: "Bakery", inStock: true, discount: 10 },
  { id: 19, name: "Whole Wheat Bread", price: 3.99, unit: "loaf", category: "Bakery", inStock: true },
  { id: 20, name: "Chocolate Muffins", price: 6.99, unit: "6-pack", category: "Bakery", inStock: true },
  { id: 21, name: "Bagels Assorted", price: 4.99, unit: "pack", category: "Bakery", inStock: true },
  { id: 22, name: "Baguette", price: 2.99, unit: "each", category: "Bakery", inStock: true, discount: 5 },
  
  // Dairy
  { id: 23, name: "Organic Whole Milk", price: 4.99, unit: "gallon", category: "Dairy", inStock: true },
  { id: 24, name: "Greek Yogurt", price: 5.99, unit: "32oz", category: "Dairy", inStock: true, discount: 15 },
  { id: 25, name: "Cheddar Cheese Block", price: 6.49, unit: "lb", category: "Dairy", inStock: true },
  { id: 26, name: "Farm Fresh Eggs", price: 4.49, unit: "dozen", category: "Dairy", inStock: true },
  { id: 27, name: "Butter Unsalted", price: 5.99, unit: "lb", category: "Dairy", inStock: true, discount: 10 },
  { id: 28, name: "Cream Cheese", price: 3.99, unit: "8oz", category: "Dairy", inStock: true },
  
  // Meat
  { id: 29, name: "Chicken Breast", price: 8.99, unit: "lb", category: "Meat", inStock: true, discount: 20 },
  { id: 30, name: "Ground Beef", price: 6.99, unit: "lb", category: "Meat", inStock: true },
  { id: 31, name: "Pork Chops", price: 7.99, unit: "lb", category: "Meat", inStock: true },
  { id: 32, name: "Salmon Fillet", price: 12.99, unit: "lb", category: "Meat", inStock: true, discount: 15 },
  
  // Pantry
  { id: 33, name: "Organic Brown Rice", price: 4.99, unit: "2lb", category: "Pantry", inStock: true },
  { id: 34, name: "Pasta Spaghetti", price: 2.49, unit: "lb", category: "Pantry", inStock: true, discount: 10 },
  { id: 35, name: "Olive Oil Extra Virgin", price: 12.99, unit: "bottle", category: "Pantry", inStock: true },
  { id: 36, name: "Canned Tomatoes", price: 2.99, unit: "can", category: "Pantry", inStock: true },
  { id: 37, name: "Black Beans", price: 1.99, unit: "can", category: "Pantry", inStock: true },
  { id: 38, name: "Honey", price: 8.99, unit: "jar", category: "Pantry", inStock: true, discount: 5 },
];

export function ProductGrid() {
  const categories = ["All", "Vegetables", "Fruits", "Bakery", "Dairy", "Meat", "Pantry"];
  
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-primary mb-2">Our Products</h2>
          <p className="text-muted-foreground">Fresh quality products at great prices</p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto gap-2 bg-white p-2 mb-8">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {(category === "All" 
                  ? products 
                  : products.filter(p => p.category === category)
                ).map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
