import Navigation from "@/components/Navigation";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Read My Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Explore AI Tools
              </Button>
            </div>
          </div>
        </div>
      </section>

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
