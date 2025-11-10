import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { CategorySection } from "./components/CategorySection";
import { ProductGrid } from "./components/ProductGrid";
import { GallerySection } from "./components/GallerySection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CategorySection />
        <ProductGrid />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}
