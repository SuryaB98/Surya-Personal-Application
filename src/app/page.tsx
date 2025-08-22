
"use client";
"use client";
import Image from "next/image";
import Philosophy from "@/components/Philosophy";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";


export default function Home() {
  const handleScroll = () => {
    const el = document.getElementById("featured-projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 bg-white">
      {/* Top Section: Name */}
      <div className="text-center mb-4">
        <span className="font-bold text-2xl">Surya Balasubramaniyan</span>
      </div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center gap-6 text-center py-24 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
          From Code to Company: Crafting Digital Products that Scale.
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          I lead the development of robust software solutions, turning complex problems into elegant, market-ready products.
        </p>
        <button
          onClick={handleScroll}
          className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold text-lg shadow hover:bg-blue-700 transition-colors"
        >
          View My Work
        </button>
      </section>

  {/* Featured Projects Section */}
  <Projects />

  {/* My Philosophy Section */}
  <Philosophy />

  {/* Skills & Expertise Section */}
  <Skills />

  {/* Contact Section */}
  <Contact />
    </div>
  );
}
