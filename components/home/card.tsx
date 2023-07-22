"use client";

import useWindowSize from "@/lib/hooks/use-window-size";
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "../shared/icons/arrow";
import Link from "next/link";

export type CardProps = {
  id: number;
  title: string;
  description: string;
  date: string;
  technologies: string;
  media?: string;
  githubLink: string;
  externalLink: string;
};

export default function Card({ id, title, description, date }: CardProps) {
  const { isDesktop, isMid, isMobile } = useWindowSize();

  return (
    <Link
      href={`/projects/${id}`}
      className={`${
        isMid || isMobile ? "w-full" : "lg:w-1/2"
      } relative overflow-hidden rounded-xl border border-zinc-600 bg-gradient-to-br from-zinc-900 via-zinc-400/10 to-zinc-900 shadow-md lg:h-96`}
    >
      <article className="p-6">
        <div className="mx-auto">
          <p className="mb-3 font-display text-sm text-stone-400">{date}</p>
          <h2 className="font-display text-3xl font-bold tracking-normal text-stone-200 md:text-4xl">
            <Balancer>{title}</Balancer>
          </h2>
          <div className="mt-4 font-default leading-7 text-zinc-400">
            <Balancer>
              {isMobile
                ? description.substring(0, 200) + "..."
                : description.substring(0, 350) + "..."}
            </Balancer>
          </div>
          {isDesktop && (
            <button className="mt-8 flex items-center font-default text-stone-200">
              Read more <ArrowRight className="ml-1 mt-0.5" />
            </button>
          )}
        </div>
      </article>
    </Link>
  );
}
