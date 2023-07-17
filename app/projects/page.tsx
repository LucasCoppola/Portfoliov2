import React from "react";
import Balancer from "react-wrap-balancer";
import Card from "@/components/home/card";

export default function Projects() {
  return (
    <>
      <h1 className="mb-12 w-full font-display font-bold tracking-normal text-stone-300 drop-shadow-sm md:text-6xl md:leading-[5rem]">
        <Balancer>Projects</Balancer>
      </h1>
      <div className="flex h-auto w-full flex-col space-x-10 space-y-10 md:flex-row">
        <Card
          title="Project title"
          description="I'm building a SAAS providing global latency monitoring for your APIs and websites from edge locations around the world. Have you ever wondered how fast your API is in any part of the world? Planetfall allows you to find out and monitor it continuously."
          date="Apr 1, 2023"
          width="md:w-1/2 md:w-full"
          height="h-full"
        ></Card>
        <Card
          title="Project title"
          description="Project Description"
          date="Apr 1, 2023"
          width="md:w-1/2 w-full"
          height="h-full"
        ></Card>
      </div>
    </>
  );
}
