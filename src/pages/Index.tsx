import Navigation from "@/components/Navigation";
import BlogCard from "@/components/BlogCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  // Sample blog posts - this will be dynamic later
  const posts = [
    {
      id: "1",
      title: "Starting My Journey: From Unemployment to AI Mastery",
      excerpt: "The beginning of an unexpected adventure. How losing my job became the catalyst for learning AI tools and discovering new possibilities.",
      date: "Nov 15, 2025",
      readTime: "5 min read",
      category: "Journey",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80"
    },
    {
      id: "2",
      title: "My First Week with ChatGPT: Lessons Learned",
      excerpt: "Diving into conversational AI. What I discovered about prompting, limitations, and the potential of large language models in daily workflows.",
      date: "Nov 12, 2025",
      readTime: "7 min read",
      category: "AI Tools",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
    },
    {
      id: "3",
      title: "Building Workflows with AI: Automation Experiments",
      excerpt: "Testing AI-powered automation tools. How I'm combining different AI services to streamline tasks and learn practical skills.",
      date: "Nov 10, 2025",
      readTime: "6 min read",
      category: "Workflows",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-16 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Navigating Unemployment Through <span className="text-primary">AI Learning</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Documenting my journey of self-discovery, learning AI tools, and building new skills during an unexpected career transition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/newsletter">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Read Weekly Updates
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline">
                  View AI Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Newsletter Card */}
            <Link to="/newsletter">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Weekly Newsletter</CardTitle>
                  <CardDescription className="text-base">
                    Honest weekly updates about my unemployment journey, AI experiments, and lessons learned.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="group">
                    Read Latest Issue
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* Portfolio Card */}
            <Link to="/portfolio">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">AI Projects Portfolio</CardTitle>
                  <CardDescription className="text-base">
                    Hands-on projects and experiments I'm building while learning AI tools and workflows.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="group">
                    View All Projects
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Latest Posts</h2>
            <p className="text-lg text-muted-foreground">
              Insights, experiments, and lessons from my journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">
              © 2025 My Journey. Documenting growth through AI.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
