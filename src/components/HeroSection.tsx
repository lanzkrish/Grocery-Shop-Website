import { Button } from "./ui/button";
import { Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-secondary via-white to-accent/20 overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-accent rounded-full">
              <span className="text-sm text-accent-foreground">Fresh Daily Deliveries</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary">
              Fresh Groceries Delivered to Your Door
            </h1>
            <p className="text-lg text-muted-foreground">
              Shop from our wide selection of fresh produce, quality meats, dairy products, and pantry essentials. Experience the convenience of online grocery shopping.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-primary text-primary hover:bg-primary/10">
                <Play className="h-4 w-4" />
                Watch Video
              </Button>
            </div>
          </div>

          {/* Video/Image Placeholder */}
          <div className="relative">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted shadow-2xl border-4 border-white">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/30">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Play className="h-8 w-8 text-primary ml-1" />
                  </div>
                  <p className="text-muted-foreground">Video Placeholder</p>
                  <p className="text-sm text-muted-foreground px-4">Upload your grocery shop video here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-accent/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
    </section>
  );
}
