import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import Balancer from "react-wrap-balancer";

export default function Contact() {
  return (
    <>
      <h1 className="mb-auto w-full font-display text-4xl font-bold tracking-normal text-stone-300 drop-shadow-sm md:text-5xl md:leading-[5rem]">
        <Balancer>Contact</Balancer>
      </h1>
      <div className="z-10 flex h-full w-full flex-col items-center justify-center space-y-4 p-4 md:space-y-8">
        <Github className="h-8 w-8 text-stone-300" />
        <Linkedin className="h-8 w-8 text-stone-300" />
        <Mail className="h-8 w-8 text-stone-300" />
      </div>
    </>
  );
}
