import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="nav-shield min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <article className="prose prose-lg prose-slate max-w-none">
            {children}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
