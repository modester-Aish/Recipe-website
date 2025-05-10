
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navItems = [
    { name: "Menu", path: "/menu" },
    { name: "Popular", path: "/popular" },
    { name: "Specials", path: "/specials" },
    { name: "Categories", path: "/categories" },
    { name: "Recipes", path: "/recipes" },
  ];
  
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white py-5 sticky top-0 z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-recipe-primary flex items-center justify-center mr-3 transition-transform duration-300 group-hover:rotate-12 shadow-md">
                  <span className="font-playfair text-lg font-bold text-white">R</span>
                </div>
                <span className="font-playfair text-xl font-bold text-gray-800">Recipe<span className="text-recipe-primary">Hub</span></span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <Link to={item.path}>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="hidden md:flex items-center">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search recipes..."
                className="pl-9 pr-4 py-2 w-56 rounded-full border border-gray-200 focus:ring-recipe-primary focus:border-recipe-primary transition-all duration-300 hover:shadow-sm"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className="text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t mt-2"
        >
          <div className="px-4 pt-2 pb-3 space-y-3">
            {navItems.map((item, index) => (
              <Link 
                key={index}
                to={item.path}
                className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-recipe-primary rounded-lg transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <div className="relative px-3 py-2">
              <Input
                type="text"
                placeholder="Search recipes..."
                className="pl-9 pr-4 py-2 w-full rounded-full border border-gray-200"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
