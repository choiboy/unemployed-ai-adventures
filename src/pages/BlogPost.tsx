import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  // Sample post data - will be dynamic later
  const post = {
    title: "Starting My Journey: From Unemployment to AI Mastery",
    date: "November 15, 2025",
    readTime: "5 min read",
    category: "Journey",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
    content: `
      <p>The day I lost my job, I felt like the ground had shifted beneath my feet. After years of stability, suddenly I was facing an uncertain future. But as the initial shock wore off, something unexpected happened—I saw an opportunity.</p>

      <h2>The Decision to Learn</h2>
      <p>Rather than immediately diving into another job search, I decided to take a different approach. I'd been hearing about AI tools revolutionizing various industries, but I'd never taken the time to truly understand them. This was my chance.</p>

      <p>I started with the basics—ChatGPT, Midjourney, and various automation tools. What began as curiosity quickly turned into a deep dive into the capabilities and limitations of these technologies.</p>

      <h2>Setting Up My Learning Framework</h2>
      <p>I knew that random experimentation wouldn't be enough. I needed structure. So I created a simple framework:</p>

      <ul>
        <li>Spend mornings learning new tools and concepts</li>
        <li>Afternoons for hands-on projects and experiments</li>
        <li>Document everything in this blog</li>
        <li>Network with others in the AI space</li>
      </ul>

      <h2>First Impressions</h2>
      <p>What struck me most was how accessible these tools have become. You don't need a computer science degree to start experimenting with AI. The barrier to entry is lower than ever, and that's both exciting and empowering.</p>

      <p>This blog will chronicle my journey—the successes, the failures, and everything in between. Whether you're in a similar situation or just curious about AI, I hope you'll follow along.</p>

      <h2>What's Next</h2>
      <p>My immediate goals are to:</p>
      <ul>
        <li>Master prompt engineering techniques</li>
        <li>Build automated workflows for common tasks</li>
        <li>Create projects that showcase practical AI applications</li>
        <li>Connect with the AI learning community</li>
      </ul>

      <p>Join me on this journey. Let's learn together.</p>
    `
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link to="/">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>

            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              {post.category}
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <img 
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-lg mb-12 shadow-lg"
            />

            <div 
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-ul:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
