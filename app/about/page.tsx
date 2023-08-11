import React from "react";
import Balancer from "react-wrap-balancer";

export default function About() {
  return (
    <>
      <h1 className="mb-auto w-full font-display text-4xl font-bold tracking-normal text-stone-300 drop-shadow-sm md:text-5xl md:leading-[5rem]">
        <Balancer>About</Balancer>
      </h1>
      <h2 className="z-10 font-display text-xl text-stone-400">
        Hey there! I&apos;m Lucas, a software developer from Argentina, fueled
        by a passion for crafting applications and websites that leave a lasting
        impression. What I love most is working on the front end, where I get to
        create awesome user experiences that enchant visitors.
        <br />
        <br />
        My journey has led me to explore both front-end and back-end
        development, and I must admit, working on the front end has been
        particularly enjoyable. But I&apos;m not one to shy away from new
        challenges! In fact, I thrive on them, always seeking ways to learn and
        grow in my career. Thank you for taking the time to explore my
        portfolio. If you think there&apos;s a potential opportunity that
        matches my skills and aspirations, I&apos;d love to chat and see how we
        can work our magic together. Looking forward to connecting soon!
      </h2>
    </>
  );
}
