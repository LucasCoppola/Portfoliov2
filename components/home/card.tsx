"use client";

import { ReactNode } from "react";
import useWindowSize from "@/lib/hooks/use-window-size";
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "../shared/icons/arrow";

type CardProps = {
  title: string;
  description: string;
  width: string;
  height: string;
  date: string;
  demo?: ReactNode;
};

export default function Card({
  title,
  description,
  width,
  height,
  date,
  demo,
}: CardProps) {
  const { isDesktop } = useWindowSize();

  return (
    <div
      className={`${width} ${height} relative overflow-hidden rounded-xl border border-zinc-600 bg-gradient-to-br from-zinc-900 via-zinc-400/10 to-zinc-900 p-6 shadow-md`}
    >
      <div className="mx-auto">
        <p className="mb-3 font-display text-sm text-stone-400">{date}</p>
        <h2 className="font-display font-bold tracking-normal text-stone-200 md:text-4xl">
          <Balancer>{title}</Balancer>
        </h2>
        <div className="font- mt-4 font-default leading-7 text-zinc-400">
          <Balancer>{description}</Balancer>
        </div>
        {isDesktop && (
          <button className="mt-4 flex items-center font-default text-stone-200">
            Read more <ArrowRight className="ml-1 mt-0.5" />
          </button>
        )}
      </div>
    </div>
  );
}
