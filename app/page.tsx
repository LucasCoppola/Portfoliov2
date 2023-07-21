import Balancer from "react-wrap-balancer";

export default function Home() {
  return (
    <div className="z-10 w-full max-w-2xl px-5 xl:px-0">
      <h1
        className="animate-fade-up bg-gradient-to-br from-white to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        <Balancer>
          Lucas Coppola <br /> Full-Stack Developer
        </Balancer>{" "}
      </h1>
      <p
        className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        <Balancer>
          Hi, I&apos;m a Lucas. I build high-quality web applications using
          Typescript, React, and Node.
        </Balancer>
      </p>
    </div>
  );
}
