"use client";

import React, { useState } from "react";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import {
  Control,
  Field,
  Label,
  Message,
  Root,
  Submit,
} from "@radix-ui/react-form";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="container z-10 mx-auto px-4">
      <h1 className="font-display text-4xl font-bold tracking-normal text-stone-300 drop-shadow-sm md:text-5xl md:leading-[5rem]">
        <Balancer>Contact</Balancer>
      </h1>
      <div className="mt-8 flex flex-col items-center justify-between md:flex-row">
        <Icons />
        <Root
          className="mx-auto w-full md:w-[40%]"
          target="_blank"
          action="https://formsubmit.co/6dd7975fb11f839145a3587c0ee35723"
          method="POST"
        >
          <Field className="mb-4 grid" name="name">
            <div className="flex items-baseline justify-between">
              <Label className="font-display text-sm font-medium leading-7 text-stone-300">
                Name
              </Label>
              <Message className="text-xs text-red-400" match="valueMissing">
                Please enter your name
              </Message>
            </div>
            <Control asChild>
              <input
                className="inline-flex h-9 w-full appearance-none items-center justify-center rounded-md bg-zinc-900 px-2 text-sm leading-none text-white shadow-md selection:bg-gray-900 selection:text-white"
                type="text"
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </Control>
          </Field>
          <Field className="mb-4 grid" name="email">
            <div className="flex items-baseline justify-between">
              <Label className="font-display text-sm font-medium leading-7 text-stone-300">
                Email
              </Label>
              <Message className="text-xs text-red-400" match="valueMissing">
                Please enter your email
              </Message>
              <Message className="text-xs text-red-400" match="typeMismatch">
                Please provide a valid email
              </Message>
            </div>
            <Control asChild>
              <input
                className="inline-flex h-9 w-full appearance-none items-center justify-center rounded-md bg-zinc-900 px-2 text-sm leading-none text-white shadow-md selection:bg-gray-900 selection:text-white"
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </Control>
          </Field>
          <Field className="mb-4 grid" name="question">
            <div className="flex items-baseline justify-between">
              <Label className="font-display text-sm font-medium leading-7 text-stone-300">
                Message
              </Label>
              <Message className="text-xs text-red-400" match="valueMissing">
                Enter a message
              </Message>
            </div>
            <Control asChild>
              <textarea
                className="w-full resize-none appearance-none items-center justify-center rounded-md bg-zinc-900 p-2 text-sm leading-none text-stone-200"
                name="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                required
              />
            </Control>
          </Field>
          <Submit asChild>
            <button className="mt-2 h-9 w-full items-center justify-center rounded-md bg-stone-200 px-3 font-medium leading-none text-zinc-900 hover:bg-stone-300">
              Send message
            </button>
          </Submit>
        </Root>
      </div>
    </div>
  );
}

function Icons() {
  return (
    <div className="flex flex-col items-start space-y-4 p-4 text-left md:space-y-8">
      <Link
        href="https://github.com/LucasCoppola"
        target="_blank"
        className="flex flex-row items-center space-x-2"
      >
        <Github className="text-stone-300 sm:h-10 sm:w-10" />
        <span className="font-display text-xl font-semibold text-stone-300 sm:text-3xl">
          LucasCoppola
        </span>
      </Link>
      <Link
        href="https://www.linkedin.com/in/lucas-coppola-1805ab226"
        target="_blank"
        className="flex flex-row items-end space-x-2"
      >
        <Linkedin className="text-stone-300 sm:h-10 sm:w-10" />
        <span className="font-display text-xl font-semibold text-stone-300 sm:text-3xl">
          Lucas Coppola
        </span>
      </Link>
      <Link
        href="https://gmail.com"
        target="_blank"
        className="flex flex-row items-center space-x-2"
      >
        <Mail className="text-stone-300 sm:h-10 sm:w-10" />
        <span className="font-display text-xl font-semibold text-stone-300 sm:text-3xl">
          lucascoppola21@gmail.com
        </span>
      </Link>
    </div>
  );
}
