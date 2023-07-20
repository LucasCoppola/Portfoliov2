"use client";

import { ExtraProjectsData, ProjectsData } from "@/lib/projectsData";
import Balancer from "react-wrap-balancer";
import { Github } from "@/components/shared/icons";
import { ExternalLink } from "@/components/shared/icons";
import Link from "next/link";

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const projectSource =
    Number(params.id) > 2 ? ExtraProjectsData : ProjectsData;

  const project = projectSource.find(
    (project) => project.id === Number(params.id),
  );

  return (
    <div className="z-10 flex flex-col lg:mt-12 lg:flex-row">
      <div className="min-h-screen text-center lg:w-1/2 lg:text-left">
        <h1 className="w-full font-display text-5xl font-bold tracking-normal text-stone-300 drop-shadow-sm md:leading-[5rem] lg:text-6xl">
          <Balancer>{project?.title}</Balancer>
        </h1>
        <p className="mx-auto mt-4 font-default text-sm leading-7 text-zinc-400 md:w-1/2 lg:mt-8 lg:w-full lg:pr-14 lg:text-base">
          {project?.description}
        </p>
        <div className="mt-8">
          <p className="font-default leading-7 text-zinc-400 md:text-lg">
            Built with: {project?.technologies}
          </p>
        </div>
        <div className="mt-12 flex items-center justify-center space-x-10 text-zinc-400 lg:justify-start">
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
      </div>
      <video
        controls
        muted
        className="z-10 h-[60vh] rounded-md border border-zinc-800 lg:w-1/2"
      >
        <source
          src="https://res.cloudinary.com/dotpfjpno/video/upload/v1689775379/analytics_fpoq1f.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
