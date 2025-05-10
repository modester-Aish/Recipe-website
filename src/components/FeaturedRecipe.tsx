
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FeaturedRecipe = () => {
  const featuredId = "featured-1";
  
  return (
    <div className="bg-recipe-secondary py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">Featured Recipe</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
          <motion.div 
            className="rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=2574" 
              alt="Homemade Ramen Bowl" 
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <span className="recipe-tag bg-recipe-primary text-white px-3 py-1 rounded-full text-sm font-medium">Japanese</span>
              <h3 className="font-playfair text-3xl font-bold mt-2">Homemade Ramen Bowl</h3>
              <p className="mt-2 text-gray-700">A comforting bowl of rich broth, tender noodles, and savory toppings that will transport you to Japan.</p>
            </div>
            
            <Separator className="bg-recipe-accent/20" />
            
            <div>
              <h4 className="font-medium text-lg mb-2">Ingredients</h4>
              <ul className="ingredient-list space-y-1">
                <li>4 cups chicken or vegetable broth</li>
                <li>2 packages ramen noodles (discard seasoning)</li>
                <li>2 tablespoons soy sauce</li>
                <li>1 tablespoon miso paste</li>
                <li>2 soft-boiled eggs, halved</li>
                <li>1 cup sliced mushrooms</li>
                <li>2 green onions, thinly sliced</li>
              </ul>
            </div>
            
            <Separator className="bg-recipe-accent/20" />
            
            <div>
              <h4 className="font-medium text-lg mb-2">Preparation Steps</h4>
              <ol className="step-list">
                <li>In a large pot, bring broth to a simmer.</li>
                <li>Add soy sauce and miso paste, stirring until dissolved.</li>
                <li>In a separate pot, cook ramen noodles according to package directions.</li>
                <li>Divide noodles between bowls and pour hot broth over them.</li>
                <li>Top with soft-boiled eggs, mushrooms, and green onions.</li>
              </ol>
            </div>
            
            <Button className="bg-recipe-primary hover:bg-recipe-accent mt-4" asChild>
              <Link to={`/recipe/${featuredId}`}>View Full Recipe</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRecipe;
