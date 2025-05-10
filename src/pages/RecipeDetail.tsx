
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, Utensils, Users, Heart, Bookmark, Share2 } from "lucide-react";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { recipes } from "@/components/RecipeGrid";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<any>(null);
  
  useEffect(() => {
    // Find the recipe by id
    const foundRecipe = recipes.find(r => r.id === id);
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-2xl">Loading recipe...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6 animate-fade-in">
            <div>
              <Badge className="bg-recipe-primary text-white mb-3">{recipe.category}</Badge>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold">{recipe.title}</h1>
              <p className="mt-4 text-gray-700 text-lg">{recipe.description}</p>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-recipe-primary">
                <Clock size={20} />
                <span>{recipe.time}</span>
              </div>
              <div className="flex items-center gap-2 text-recipe-primary">
                <Utensils size={20} />
                <span>{recipe.difficulty}</span>
              </div>
              <div className="flex items-center gap-2 text-recipe-primary">
                <Users size={20} />
                <span>{recipe.servings} servings</span>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="flex gap-2">
                <Heart size={16} />
                <span>Save</span>
              </Button>
              <Button variant="outline" size="sm" className="flex gap-2">
                <Bookmark size={16} />
                <span>Bookmark</span>
              </Button>
              <Button variant="outline" size="sm" className="flex gap-2">
                <Share2 size={16} />
                <span>Share</span>
              </Button>
            </div>
            
            <Separator className="bg-recipe-accent/20" />
            
            <div>
              <h2 className="font-medium text-xl mb-4">Ingredients</h2>
              <ul className="ingredient-list space-y-2">
                <li>2 cups all-purpose flour</li>
                <li>1 tablespoon baking powder</li>
                <li>1/2 teaspoon salt</li>
                <li>2 tablespoons sugar</li>
                <li>1/2 cup unsalted butter, cold and cubed</li>
                <li>3/4 cup milk</li>
                <li>1 teaspoon vanilla extract</li>
                <li>1 cup fresh or frozen berries</li>
              </ul>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="sticky top-24">
              <div className="rounded-2xl overflow-hidden shadow-xl mb-8 transition-transform hover:scale-[1.02] duration-300 ease-out">
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="w-full h-[400px] object-cover"
                />
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="font-medium text-xl mb-4">Preparation Steps</h2>
                <ol className="step-list">
                  <li>Preheat oven to 425°F (220°C). Line a baking sheet with parchment paper.</li>
                  <li>In a large bowl, mix flour, baking powder, salt, and sugar.</li>
                  <li>Cut in butter until mixture resembles coarse crumbs.</li>
                  <li>Stir in milk and vanilla until just moistened.</li>
                  <li>Gently fold in berries.</li>
                  <li>Drop dough by 1/4 cups onto prepared baking sheet.</li>
                  <li>Bake for 15-18 minutes until golden brown.</li>
                </ol>
                
                <div className="mt-6">
                  <Button className="w-full bg-recipe-primary hover:bg-recipe-accent py-6 text-lg">
                    Print Recipe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RecipeDetail;
