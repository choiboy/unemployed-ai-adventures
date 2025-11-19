import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "AI Content Summarizer",
      description: "A tool that uses ChatGPT API to automatically summarize long articles and documents. Built to practice API integration and prompt engineering.",
      tags: ["ChatGPT API", "React", "Node.js"],
      status: "Completed",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Email Automation Workflow",
      description: "Automated email response system using Make.com and GPT-4. Processes incoming emails and generates contextual responses for review.",
      tags: ["Make.com", "GPT-4", "Automation"],
      status: "In Progress",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80",
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "AI Image Gallery",
      description: "Experimenting with DALL-E and Midjourney to create themed image collections. Learning prompt crafting and image generation workflows.",
      tags: ["DALL-E", "Midjourney", "Creative AI"],
      status: "In Progress",
      image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800&q=80",
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 4,
      title: "Personal Knowledge Base",
      description: "Building a searchable knowledge base using Notion API and AI-powered search. Organizing everything I'm learning about AI tools.",
      tags: ["Notion API", "Vector Search", "RAG"],
      status: "Planning",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
      demoLink: "#",
      githubLink: "#"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500";
      case "In Progress":
        return "bg-blue-500";
      case "Planning":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              AI Projects Portfolio
            </h1>
            <p className="text-lg text-muted-foreground">
              Hands-on experiments and projects I'm building while learning AI tools and workflows. 
              Each project represents new skills gained and problems solved.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="h-full bg-gradient-to-b from-transparent to-background/80 flex items-end p-4">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" variant="default" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;