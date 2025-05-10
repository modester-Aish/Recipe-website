
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import RecipeGrid from "@/components/RecipeGrid";
import FeaturedRecipe from "@/components/FeaturedRecipe";
import Categories from "@/components/Categories";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-background relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=1000')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Low intensity overlay */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          <Hero />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RecipeGrid />
            <FeaturedRecipe />
            <Categories />
          </div>
          <Newsletter />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
