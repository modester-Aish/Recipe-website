
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Utensils, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface RecipeCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  time: string;
  difficulty: string;
  servings: number;
  category: string;
  delay?: number;
}

const RecipeCard = ({ 
  id, 
  title, 
  description, 
  image, 
  time, 
  difficulty, 
  servings, 
  category,
  delay = 0
}: RecipeCardProps) => {
  return (
    <Card 
      className="recipe-card animate-card overflow-hidden h-full flex flex-col transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1" 
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="recipe-card-img transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="recipe-tag bg-white text-recipe-primary px-3 py-1 rounded-full text-sm font-medium">{category}</span>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="font-playfair text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="pb-4 flex-grow">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <Utensils size={16} className="mr-1" />
            <span>{difficulty}</span>
          </div>
          <div className="flex items-center">
            <Users size={16} className="mr-1" />
            <span>{servings}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full bg-recipe-primary hover:bg-recipe-accent" asChild>
          <Link to={`/recipe/${id}`}>View Recipe</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
