import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Target, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About This Journey
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              A personal chronicle of learning, growth, and discovery during unemployment.
            </p>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-muted-foreground">
                This blog is more than just a record of job searching—it's a documentation of transformation. 
                After unexpectedly losing my job, I decided to turn this challenge into an opportunity to dive 
                deep into AI tools and workflows that are reshaping how we work and create.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-border">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Learn</h3>
                  <p className="text-muted-foreground">
                    Exploring AI tools, experimenting with workflows, and documenting what works.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Build</h3>
                  <p className="text-muted-foreground">
                    Creating projects and practical applications while developing new skills.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Share</h3>
                  <p className="text-muted-foreground">
                    Sharing insights, lessons learned, and resources that might help others.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Why AI?</h2>
                <p className="text-muted-foreground mb-4">
                  Artificial Intelligence isn't just the future—it's transforming the present. During this 
                  unexpected break from traditional employment, I'm using the time to understand these tools 
                  deeply, not just superficially. From large language models to automation workflows, I'm 
                  exploring how AI can enhance productivity, creativity, and problem-solving.
                </p>
                <p className="text-muted-foreground">
                  This blog serves as both a learning journal and a resource for others who might be on a 
                  similar journey. Whether you're between jobs, looking to upskill, or just curious about 
                  AI tools, I hope you'll find something valuable here.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
