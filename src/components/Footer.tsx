
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-playfair text-xl font-bold text-recipe-primary">RecipeHub</h3>
            <p className="mt-4 text-gray-600">
              Discover delicious recipes from around the world, share your culinary creations, and join our community of food lovers.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-recipe-primary">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-recipe-primary">Categories</a></li>
              <li><a href="#" className="text-gray-600 hover:text-recipe-primary">Popular Recipes</a></li>
              <li><a href="#" className="text-gray-600 hover:text-recipe-primary">Submit Recipe</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-recipe-primary">Breakfast</a></li>
              <li><a href="#" className="text-gray-600 hover:text-recipe-primary">Lunch</a></li>
              <li><a href="#" className="text-gray-600 hover:text-recipe-primary">Dinner</a></li>
              <li><a href="#" className="text-gray-600 hover:text-recipe-primary">Desserts</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-recipe-primary">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-recipe-primary">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-recipe-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-recipe-primary">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} RecipeHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
