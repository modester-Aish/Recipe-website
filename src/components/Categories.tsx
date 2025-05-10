
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    name: "Italian",
    image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?q=80&w=2092",
    count: 32
  },
  {
    name: "Indian",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356c36?q=80&w=2096",
    count: 24
  },
  {
    name: "Thai",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=2070",
    count: 18
  },
  {
    name: "Desserts",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2825",
    count: 45
  }
];

const Categories = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h2 className="section-title text-center">Explore Categories</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8">
        {categories.map((category) => (
          <Card 
            key={category.name}
            className="group overflow-hidden cursor-pointer recipe-card"
          >
            <div className="relative h-40 overflow-hidden">
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                <h3 className="font-playfair text-xl font-medium text-white">{category.name}</h3>
                <p className="text-sm text-white/80">{category.count} recipes</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Categories;
