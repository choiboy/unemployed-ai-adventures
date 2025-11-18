import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink 
            to="/" 
            className="text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            My Journey
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink
              to="/"
              className="text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-medium"
            >
              Blog
            </NavLink>
            <NavLink
              to="/about"
              className="text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-medium"
            >
              About
            </NavLink>
            <NavLink
              to="/categories"
              className="text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-medium"
            >
              Categories
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <NavLink
                to="/"
                className="text-foreground hover:text-primary transition-colors"
                activeClassName="text-primary font-medium"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </NavLink>
              <NavLink
                to="/about"
                className="text-foreground hover:text-primary transition-colors"
                activeClassName="text-primary font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/categories"
                className="text-foreground hover:text-primary transition-colors"
                activeClassName="text-primary font-medium"
                onClick={() => setIsOpen(false)}
              >
                Categories
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
