import { Hero } from "@/components/hero";
import { FeaturedProjects } from "@/components/featured-projects";
import { BlogSection } from "@/components/blog-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <FeaturedProjects />
        <BlogSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
