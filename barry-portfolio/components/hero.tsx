import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="nav-shield relative min-h-screen flex flex-col bg-white text-black">
      <Navigation />

      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl leading-tight">Barry Molina</h1>
                <p className="text-md text-gray-600 max-w-2xl">
                  Ballet artist turned software engineer with an affinity for
                  clean code and robust system design.
                </p>
              </div>

              <div className="font-mono flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-gray-800 cursor-pointer"
                >
                  VIEW PROJECTS
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white cursor-pointer"
                >
                  READ BLOG
                </Button>
              </div>

              <div className="flex items-center gap-6">
                <a
                  href="https://github.com"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:barry@example.com"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="relative w-96 h-96">
                {/* Geometric Triangle Element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 border-2 border-black/20 rotate-12 transform">
                    <div className="w-full h-full border-2 border-black/40 rotate-12 transform">
                      <div className="w-full h-full border-2 border-black/60 rotate-12 transform flex items-center justify-center">
                        <div className="w-32 h-32 bg-black/10 backdrop-blur-sm rotate-12 transform"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-gray-600" />
      </div>
    </section>
  );
}
