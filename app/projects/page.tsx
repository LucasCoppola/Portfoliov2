import React from "react";
import Balancer from "react-wrap-balancer";
import Card from "@/components/home/card";
import { title } from "process";

export default function Projects() {
  return (
    <>
      <h1 className="mb-auto w-full font-display font-bold tracking-normal text-stone-300 drop-shadow-sm md:text-6xl md:leading-[5rem]">
        <Balancer>Projects</Balancer>
      </h1>
      <Card
        title="Project title"
        description="Project Description"
        large={true}
        demo={undefined}
      ></Card>
    </>
  );
}
