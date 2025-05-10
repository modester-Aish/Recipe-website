
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, you would send this to your backend
    toast({
      title: "Success!",
      description: "You've successfully subscribed to our newsletter.",
    });
    
    setEmail("");
  };
  
  return (
    <div 
      className="relative py-16 overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2968')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold font-playfair text-white mb-4">Join Our Recipe Community</h2>
        <p className="text-white text-lg mb-8">
          Subscribe to our newsletter for weekly recipe inspirations, cooking tips, and exclusive content.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            className="flex-grow"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button 
            type="submit" 
            className="bg-recipe-primary hover:bg-recipe-accent text-white"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
