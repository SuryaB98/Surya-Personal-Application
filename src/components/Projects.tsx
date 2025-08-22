import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projects, Project } from "../../data/projects";

export default function Projects() {
  const featured = projects.slice(0, 4);

  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featured.map((project: Project) => (
          <Link key={project.id} href={`/projects/${project.id}`} className="group">
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow overflow-hidden flex flex-col h-full cursor-pointer">
              <div className="relative w-full h-40">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-gray-600 mb-3 text-sm">{project.oneLiner}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech: string) => (
                    <span key={tech} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
