import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    
    // TODO: Implement actual newsletter signup
    toast({
      title: "Thanks for subscribing!",
      description: "You'll receive weekly updates about my AI journey.",
    });
    setEmail("");
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join My Weekly Newsletter
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get honest updates about my unemployment journey, AI learning experiments, and lessons learned. 
            Delivered every Friday to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="lg">
              Subscribe
            </Button>
          </form>
          
          <p className="text-sm text-muted-foreground mt-4">
            No spam. Unsubscribe anytime. Your email stays private.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;