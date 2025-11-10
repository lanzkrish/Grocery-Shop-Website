import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Play } from "lucide-react";

export function GallerySection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-primary mb-2">Our Store Gallery</h2>
          <p className="text-muted-foreground">Take a look inside our fresh market</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Photo Placeholder 1 */}
          <Card className="overflow-hidden group cursor-pointer">
            <div className="aspect-video relative bg-gradient-to-br from-secondary to-accent/20">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1681276145283-dc19e0ffb8d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc3RvcmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjI3NTI4NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Store Interior"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 bg-white">
              <h4 className="text-foreground">Store Interior</h4>
              <p className="text-sm text-muted-foreground">Clean and organized aisles</p>
            </div>
          </Card>

          {/* Video Placeholder 1 */}
          <Card className="overflow-hidden group cursor-pointer">
            <div className="aspect-video relative bg-gradient-to-br from-primary/20 to-accent/30">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="h-6 w-6 text-primary ml-1" />
                </div>
              </div>
            </div>
            <div className="p-4 bg-white">
              <h4 className="text-foreground">Video Tour</h4>
              <p className="text-sm text-muted-foreground">Upload your store tour video</p>
            </div>
          </Card>

          {/* Photo Placeholder 2 */}
          <Card className="overflow-hidden group cursor-pointer">
            <div className="aspect-video relative bg-gradient-to-br from-accent/30 to-primary/10 flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="text-5xl">📸</div>
                <p className="text-muted-foreground">Add Photo</p>
              </div>
            </div>
            <div className="p-4 bg-white">
              <h4 className="text-foreground">Store Photos</h4>
              <p className="text-sm text-muted-foreground">Showcase your products</p>
            </div>
          </Card>

          {/* Video Placeholder 2 */}
          <Card className="overflow-hidden group cursor-pointer">
            <div className="aspect-video relative bg-gradient-to-br from-primary/20 to-accent/30">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="h-6 w-6 text-primary ml-1" />
                </div>
              </div>
            </div>
            <div className="p-4 bg-white">
              <h4 className="text-foreground">Product Videos</h4>
              <p className="text-sm text-muted-foreground">Upload product showcase videos</p>
            </div>
          </Card>

          {/* Photo Placeholder 3 */}
          <Card className="overflow-hidden group cursor-pointer">
            <div className="aspect-video relative bg-gradient-to-br from-accent/30 to-primary/10 flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="text-5xl">📸</div>
                <p className="text-muted-foreground">Add Photo</p>
              </div>
            </div>
            <div className="p-4 bg-white">
              <h4 className="text-foreground">Behind the Scenes</h4>
              <p className="text-sm text-muted-foreground">Show your team at work</p>
            </div>
          </Card>

          {/* Photo Placeholder 4 */}
          <Card className="overflow-hidden group cursor-pointer">
            <div className="aspect-video relative bg-gradient-to-br from-accent/30 to-primary/10 flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="text-5xl">📸</div>
                <p className="text-muted-foreground">Add Photo</p>
              </div>
            </div>
            <div className="p-4 bg-white">
              <h4 className="text-foreground">More Photos</h4>
              <p className="text-sm text-muted-foreground">Add more gallery items</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
