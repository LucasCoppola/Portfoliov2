"use client";

import useWindowSize from "@/lib/hooks/use-window-size";
import Balancer from "react-wrap-balancer";
import { CardProps } from "./card";

export default function SmallCard({
  id,
  title,
  description,
  classes,
  date,
}: CardProps) {
  const { isMobile } = useWindowSize();

  return (
    <article
      className={`${isMobile ? "w-full" : classes} p-4 md:p-8 relative overflow-hidden rounded-xl border border-zinc-600 bg-gradient-to-br from-zinc-900 via-zinc-400/10 to-zinc-900 shadow-md`}
    >
      <div className="mx-auto">
        <p className="mb-3 font-display text-sm text-stone-400">{date}</p>
        <h2 className="font-display font-bold tracking-normal text-stone-200 text-3xl md:text-4xl">
          <Balancer>{title}</Balancer>
        </h2>
        <div className="font- mt-4 font-default leading-7 text-zinc-400">
          <Balancer>{description}</Balancer>
        </div>
        
      </div>
    </article>
  );
}
