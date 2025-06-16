import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    title: "Building Scalable APIs with Node.js and TypeScript",
    excerpt:
      "A deep dive into architectural patterns and best practices for building robust, scalable APIs that can handle high traffic loads.",
    category: "Technical",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    type: "technical",
  },
  {
    title: "The Future of AI in Software Development",
    excerpt:
      "Exploring how artificial intelligence is transforming the way we write code, debug applications, and approach problem-solving.",
    category: "AI & Tech",
    readTime: "6 min read",
    date: "Dec 10, 2024",
    type: "general",
  },
  {
    title: "Optimizing React Performance: Advanced Techniques",
    excerpt:
      "Advanced strategies for optimizing React applications, including code splitting, memoization, and virtual DOM optimization.",
    category: "Technical",
    readTime: "12 min read",
    date: "Dec 5, 2024",
    type: "technical",
  },
];

export function BlogSection() {
  return (
    <section
      id="blog"
      className="nav-shield py-24 px-4 sm:px-6 lg:px-8 bg-white text-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Technical deep-dives, problem-solving approaches, and thoughts on
            the evolving landscape of software development.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white border border-black/10 rounded-lg p-8 hover:border-black/20 transition-all duration-300 group cursor-pointer shadow-sm"
            >
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge
                      variant="outline"
                      className="border-black/20 text-black"
                    >
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold group-hover:text-gray-700 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4">
                  <span className="text-black font-medium group-hover:underline">
                    Read Article →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-black text-black hover:bg-black hover:text-white"
          >
            VIEW ALL POSTS
          </Button>
        </div>
      </div>
    </section>
  );
}
