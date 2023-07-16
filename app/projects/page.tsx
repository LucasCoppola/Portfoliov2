import React from "react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import Card from "@/components/home/card";

export default function Projects() {
  return (
    <>
      <h1 className="mb-auto w-full font-display font-bold tracking-normal text-stone-300 drop-shadow-sm md:text-6xl md:leading-[5rem]">
        <Balancer>Projects</Balancer>
      </h1>
      <Card
        title="project"
        description="project description"
        large={true}
        demo={
          <div className="flex items-center justify-center space-x-20">
            <Image
              alt="Auth.js logo"
              src="/authjs.webp"
              width={50}
              height={50}
            />
            <Image alt="Prisma logo" src="/prisma.svg" width={50} height={50} />
          </div>
        }
      />
    </>
  );
}
