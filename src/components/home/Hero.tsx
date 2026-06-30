import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

import { buttonVariants } from "fumadocs-ui/components/ui/button";

import { DocsPreview } from "./DocsPreview";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-57px)] border-b lg:grid lg:grid-cols-2">
      {/* Mobile Background */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/preview.png"
          alt=""
          fill
          priority
          className="object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-fd-background" />

        {/* Left fade */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-fd-background/70 to-transparent" />
      </div>

      {/* Left */}
      <div className="relative z-10 flex min-h-[calc(100svh-57px)] items-center px-8 lg:px-14">
        <div className="w-full max-w-xl">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-fd-primary">YggUtils</span>
            <br />
            Run authlib-injector
            <br />
            on any servers.
          </h1>

          <p className="mt-8 text-lg leading-8 text-fd-muted-foreground">
            Built for hosts that don't expose JVM arguments.
          </p>

          <Link
            href="/docs"
            className={`${buttonVariants({
              variant: "primary",
            })} group mt-8 inline-flex h-12 w-fit items-center gap-2 rounded-xl px-6 text-base font-medium shadow-md transition-shadow duration-300 hover:shadow-xl`}
          >
            Get Started
            <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Desktop Preview */}
      <div className="hidden lg:block">
        <DocsPreview />
      </div>
    </section>
  );
}