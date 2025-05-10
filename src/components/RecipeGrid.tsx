
import RecipeCard from "./RecipeCard";

export const recipes = [
  {
    id: "1",
    title: "Creamy Butter Chicken",
    description: "A rich and flavorful Indian dish made with tender chicken in a creamy tomato sauce with aromatic spices.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2670",
    time: "45 mins",
    difficulty: "Medium",
    servings: 4,
    category: "Indian"
  },
  {
    id: "2",
    title: "Homemade Margherita Pizza",
    description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil on a thin, crispy crust.",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2670",
    time: "30 mins",
    difficulty: "Easy",
    servings: 2,
    category: "Italian"
  },
  {
    id: "3",
    title: "Thai Green Curry",
    description: "Spicy and aromatic curry with coconut milk, tender vegetables, and your choice of protein.",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=2670",
    time: "40 mins",
    difficulty: "Medium",
    servings: 4,
    category: "Thai"
  },
  {
    id: "4",
    title: "Classic Beef Burger",
    description: "Juicy beef patty with melted cheese, fresh vegetables, and special sauce on a toasted bun.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2690",
    time: "25 mins",
    difficulty: "Easy",
    servings: 2,
    category: "American"
  },
  {
    id: "5",
    title: "Chocolate Lava Cake",
    description: "Decadent dessert with a warm, gooey chocolate center that flows when you cut into it.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=2564",
    time: "20 mins",
    difficulty: "Medium",
    servings: 4,
    category: "Dessert"
  },
  {
    id: "6",
    title: "Fresh Vegetable Stir Fry",
    description: "Quick and healthy medley of colorful vegetables in a savory sauce with your choice of protein.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2670",
    time: "15 mins",
    difficulty: "Easy",
    servings: 2,
    category: "Vegetarian"
  }
];

const RecipeGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="section-title text-center">Popular Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe, index) => (
          <RecipeCard 
            key={recipe.id} 
            {...recipe} 
            delay={index}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeGrid;
