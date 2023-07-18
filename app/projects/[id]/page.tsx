"use client";

import { ProjectsData } from "@/lib/projectsData";
import Balancer from "react-wrap-balancer";

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const project = ProjectsData.find(
    (project) => project.id === Number(params.id),
  );

  return (
    <h1 className="w-full font-display text-4xl font-bold tracking-normal text-stone-300 drop-shadow-sm md:text-5xl md:leading-[5rem]">
      <Balancer>{project?.title}</Balancer>
    </h1>
  );
}
