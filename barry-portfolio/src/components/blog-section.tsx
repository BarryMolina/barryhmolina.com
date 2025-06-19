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
    <section id="blog" className="nav-shield bg-white text-black">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left column */}
          <div className="md:col-span-1 flex flex-col items-start">
            <h2 className="heading-lg mb-4">Blog</h2>
            <p className="text-xl text-gray-600 max-w-3xl mb-8">
              Technical deep-dives, problem-solving approaches, and thoughts on
              the evolving landscape of software development.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white"
            >
              ALL POSTS
            </Button>
          </div>

          {/* Right column */}
          <div className="md:col-span-2 flex flex-col gap-12">
            {blogPosts.map((post, index) => (
              <div key={index} className="flex flex-col gap-6 group">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 mb-2">
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
                  <h3 className="text-3xl mb-2">{post.title}</h3>
                  <p className="text-gray-700 mb-2 max-w-2xl">{post.excerpt}</p>
                </div>
                <div className="pt-2">
                  <span className="text-black font-medium hover:underline cursor-pointer">
                    Read Article →
                  </span>
                </div>
                {index < blogPosts.length - 1 && (
                  <hr className="border-t border-black/10 my-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
