import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

const Newsletter = () => {
  const newsletters = [
    {
      id: 1,
      week: "Week 4",
      title: "Breakthrough Moment: Landing My First AI Freelance Gig",
      date: "Nov 15, 2025",
      readTime: "8 min read",
      excerpt: "This week brought unexpected opportunities. How my AI skills caught the attention of a local startup, and what I learned about pricing my services.",
      highlights: ["First paid project", "Networking wins", "Skill validation"]
    },
    {
      id: 2,
      week: "Week 3",
      title: "The Reality Check: When AI Tools Don't Solve Everything",
      date: "Nov 8, 2025",
      readTime: "6 min read",
      excerpt: "A honest reflection on hitting walls, dealing with imposter syndrome, and learning that AI is a tool, not a magic solution.",
      highlights: ["Challenges faced", "Mental health", "Course correction"]
    },
    {
      id: 3,
      week: "Week 2",
      title: "Building Momentum: My First AI Workflow Automation",
      date: "Nov 1, 2025",
      readTime: "7 min read",
      excerpt: "Creating my first automated workflow using multiple AI tools. The wins, the failures, and everything in between.",
      highlights: ["Tool integration", "Time saved", "Lessons learned"]
    },
    {
      id: 4,
      week: "Week 1",
      title: "Starting Over: The First Week of My AI Journey",
      date: "Oct 25, 2025",
      readTime: "5 min read",
      excerpt: "Fresh start after job loss. Setting goals, choosing tools to learn, and managing the emotional rollercoaster of unemployment.",
      highlights: ["Goal setting", "Tool selection", "Mindset shifts"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Weekly Unemployment Newsletter
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Honest weekly updates about my journey through unemployment, learning AI tools, and building new skills. 
              The good, the bad, and the lessons learned.
            </p>
            <Badge variant="secondary" className="text-base px-4 py-2">
              Published Every Friday
            </Badge>
          </div>

          {/* Newsletter Archive */}
          <div className="max-w-4xl mx-auto space-y-6">
            {newsletters.map((newsletter) => (
              <Card key={newsletter.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge>{newsletter.week}</Badge>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {newsletter.date}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {newsletter.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-2xl hover:text-primary transition-colors cursor-pointer">
                    {newsletter.title}
                  </CardTitle>
                  <CardDescription className="text-base mt-2">
                    {newsletter.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {newsletter.highlights.map((highlight, index) => (
                      <Badge key={index} variant="outline">
                        {highlight}
                      </Badge>
                    ))}
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

export default Newsletter;