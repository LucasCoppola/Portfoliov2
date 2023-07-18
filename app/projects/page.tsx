import React from "react";
import Balancer from "react-wrap-balancer";
import Card from "@/components/home/card";
import { ProjectsData, ExtraProjectsData } from "@/lib/projectsData";
import SmallCard from "@/components/home/smallCard";

export default function Projects() {
  return (
    <>
      <h1 className="w-full font-display text-4xl font-bold tracking-normal text-stone-300 drop-shadow-sm md:text-6xl md:leading-[5rem]">
        <Balancer>Projects</Balancer>
      </h1>
      <p className="z-10 mt-2 w-full font-default text-lg text-zinc-400">
        <Balancer>Here are some of the projects I&apos;ve worked on.</Balancer>
      </p>
      <div className="z-10 mt-8 h-px w-full bg-zinc-800" />
      <div className="my-16 flex h-auto w-full flex-col items-center lg:flex-row">
        {ProjectsData.map(({ id, title, description, classes, date }) => (
          <Card
            key={id}
            id={id}
            title={title}
            description={description}
            classes={classes}
            date={date}
          />
        ))}
      </div>
      <div className="z-10 mb-16 h-px w-full bg-zinc-800" />
      <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 lg:mx-0">
        {ExtraProjectsData.map(({ id, title, description, classes, date }) => (
          <SmallCard
            key={id}
            id={id}
            title={title}
            description={description}
            classes={classes}
            date={date}
          />
        ))}
      </div>
    </>
  );
}
