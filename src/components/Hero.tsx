
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChefHat } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-10 pb-16 md:pt-16 md:pb-24">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-48 h-48 -translate-x-1/4 -translate-y-1/4">
        <motion.div 
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: -15, opacity: 0.6 }}
          transition={{ duration: 1.2 }}
          className="w-full h-full bg-recipe-muted rounded-full"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/4 translate-y-1/4">
        <motion.div 
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 15, opacity: 0.7 }}
          transition={{ duration: 1.2 }}
          className="w-full h-full bg-recipe-secondary rounded-full"
        />
      </div>
      
      <div className="relative z-10 px-6 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Content left side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:col-span-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center px-4 py-1.5 mb-6 bg-recipe-secondary rounded-full mx-auto lg:mx-0"
            >
              <ChefHat size={18} className="mr-2 text-recipe-primary" />
              <span className="font-medium text-sm text-recipe-primary">CHEF'S SPECIAL</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-foreground mb-6 leading-tight">
              <span className="block">Discover</span>
              <span className="block">Delicious <span className="text-recipe-primary">Recipes</span></span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Explore mouthwatering dishes, easy cooking techniques, and share your culinary creations with our community.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Button 
                asChild 
                className="group bg-recipe-primary hover:bg-recipe-accent text-white px-6 py-6 rounded-lg text-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <Link to="/recipes">
                  Explore Recipes
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                asChild 
                className="bg-transparent border-2 border-recipe-primary text-recipe-primary hover:bg-recipe-primary/10 px-6 py-6 rounded-lg text-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Link to="/community">Join Community</Link>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Image right side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative lg:col-span-6"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-recipe-primary to-recipe-accent rounded-full opacity-10"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 15,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute inset-2 bg-white rounded-full shadow-lg overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000"
                  alt="Fresh food"
                  className="w-full h-full object-cover rounded-full p-2"
                />
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute top-5 -right-5 w-20 h-20 bg-yellow-200 rounded-full opacity-70 shadow-lg"
                animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -bottom-5 left-5 w-16 h-16 bg-green-200 rounded-full opacity-70 shadow-lg"
                animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              />
              <motion.div 
                className="absolute bottom-20 -right-10 w-14 h-14 bg-orange-200 rounded-full opacity-70 shadow-lg"
                animate={{ y: [0, -7, 0], rotate: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
