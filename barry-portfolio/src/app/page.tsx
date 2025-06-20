import { Hero } from "@/components/hero";
import { FeaturedProjects } from "@/components/featured-projects";
import { BlogSection } from "@/components/blog-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ScrollAnimation } from "@/components/scroll-animation";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <ScrollAnimation animation="fadeUp" delay={0.2}>
          <FeaturedProjects />
        </ScrollAnimation>
        <ScrollAnimation animation="fadeUp" delay={0.1}>
          <BlogSection />
        </ScrollAnimation>
        <ScrollAnimation animation="fadeUp" delay={0.2}>
          <AboutSection />
        </ScrollAnimation>
        <ScrollAnimation animation="fadeUp" delay={0.1}>
          <ContactSection />
        </ScrollAnimation>
      </main>
      <Footer />
    </>
  );
}
