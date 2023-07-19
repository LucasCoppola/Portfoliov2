"use client";

import { ProjectsData } from "@/lib/projectsData";
import Balancer from "react-wrap-balancer";
import { Github } from "@/components/shared/icons";
import { ExternalLink } from "@/components/shared/icons";
import Link from "next/link";

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const project = ProjectsData.find(
    (project) => project.id === Number(params.id),
  );

  return (
    <div className="z-10 mt-24 text-center">
      <h1 className="w-full text-center font-display text-4xl font-bold tracking-normal text-stone-300 drop-shadow-sm md:text-6xl md:leading-[5rem]">
        <Balancer>{project?.title}</Balancer>
      </h1>
      <p className="mx-auto mt-4 w-1/2 font-default leading-7 text-zinc-400">
        {project?.description}
      </p>
      <div className="mt-16 flex items-center justify-center space-x-10 text-zinc-400">
        {project?.githubLink && (
          <Link href={project.githubLink} target="_blank">
            <Github className="h-8 w-8 duration-200 hover:-translate-y-0.5 hover:text-zinc-300" />
          </Link>
        )}
        {project?.externalLink && (
          <Link href={project.externalLink} target="_blank">
            <ExternalLink className="h-8 w-8 duration-200 hover:-translate-y-0.5 hover:text-zinc-300" />
          </Link>
        )}
      </div>
      {/* <video controls muted className="h-[calc(100vh-12rem)] rounded-md">
        <source
          src="https://res.cloudinary.com/dotpfjpno/video/upload/v1689775379/analytics_fpoq1f.mp4"
          type="video/mp4"
        />
      </video> */}
    </div>
  );
}
