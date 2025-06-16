import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with Next.js, Stripe integration, and real-time inventory management.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    status: "Completed",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "AI Content Generator",
    description:
      "AI-powered content generation tool using OpenAI API with custom fine-tuning and user management.",
    tech: ["React", "Node.js", "OpenAI API", "MongoDB", "Express"],
    status: "In Progress",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Real-time Analytics Dashboard",
    description:
      "High-performance analytics dashboard with real-time data visualization and custom reporting.",
    tech: ["Vue.js", "D3.js", "WebSocket", "Redis", "Docker"],
    status: "Completed",
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="nav-shield py-24 px-4 sm:px-6 lg:px-8 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl">
            A selection of recent projects showcasing technical expertise across
            various technologies and problem domains.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <Badge
                      variant="outline"
                      className="border-white/20 text-white"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-white/10 text-white border-0"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white hover:text-black"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white hover:text-black"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black"
          >
            VIEW ALL PROJECTS
          </Button>
        </div>
      </div>
    </section>
  );
}
