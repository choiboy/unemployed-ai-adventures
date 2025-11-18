import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Bot, Workflow, BookOpen } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      name: "Journey",
      description: "Personal reflections and updates on my unemployment journey",
      icon: Briefcase,
      count: 8,
      color: "text-primary"
    },
    {
      name: "AI Tools",
      description: "Reviews, tutorials, and experiments with AI applications",
      icon: Bot,
      count: 12,
      color: "text-accent"
    },
    {
      name: "Workflows",
      description: "Automation setups and productivity systems using AI",
      icon: Workflow,
      count: 6,
      color: "text-primary"
    },
    {
      name: "Learning",
      description: "Resources, courses, and educational content I'm exploring",
      icon: BookOpen,
      count: 5,
      color: "text-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Categories
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Browse posts by topic to find what interests you most.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Card 
                    key={category.name}
                    className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center ${category.color}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <Badge variant="secondary">{category.count} posts</Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {category.name}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {category.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
