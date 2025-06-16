import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Kubernetes",
  "GraphQL",
];

export function AboutSection() {
  return (
    <section id="about" className="nav-shield bg-black text-white">
      <div className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl font-bold">About Me</h2>
                <div className="space-y-4 text-lg text-gray-400 leading-relaxed">
                  <p>
                    I'm a passionate software engineer with over 5 years of
                    experience building scalable web applications and solving
                    complex technical challenges. My expertise spans full-stack
                    development, cloud architecture, and modern DevOps
                    practices.
                  </p>
                  <p>
                    I believe in writing clean, maintainable code and staying
                    current with emerging technologies. When I'm not coding,
                    you'll find me contributing to open source projects, writing
                    technical blog posts, or exploring the latest developments
                    in AI and machine learning.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Technical Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-white/10 text-white border-0 text-sm py-2 px-4"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-white/10 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-4xl font-bold">BM</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Barry Molina</h3>
                    <p className="text-gray-400">Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
