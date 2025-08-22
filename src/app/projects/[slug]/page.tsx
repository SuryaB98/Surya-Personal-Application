import { projects, Project } from "../../../../data/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export async function generateStaticParams() {
  return projects.map((project: Project) => ({ slug: project.id }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p: Project) => p.id === params.slug);
  if (!project) {
    return <div className="max-w-2xl mx-auto py-24 px-4 text-center">Project not found.</div>;
  }

  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">{project.title}</h1>
      <div className="mb-8 flex flex-col sm:flex-row gap-8 items-center">
        <div className="relative w-full sm:w-64 h-40 sm:h-48 rounded-lg overflow-hidden shadow">
          <Image src={project.imageUrl} alt={project.title} fill style={{ objectFit: "cover" }} />
        </div>
        <div className="flex-1">
          <p className="text-lg text-gray-700 mb-2">{project.oneLiner}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {project.techStack.map((tech: string) => (
              <span key={tech} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4 mt-4">
            <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
              <button className="px-5 py-2 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition-colors">Live Demo</button>
            </Link>
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <button className="px-5 py-2 bg-gray-800 text-white rounded-full font-semibold shadow hover:bg-gray-900 transition-colors">View Code</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Problem</h2>
        <p className="text-gray-700">{project.problem}</p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Product Solution</h2>
        <p className="text-gray-700 whitespace-pre-line">{project.productSolution}</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Outcomes</h2>
        <p className="text-gray-700">{project.outcomes}</p>
      </div>
    </section>
  );
}
