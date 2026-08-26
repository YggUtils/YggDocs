import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { BookIcon } from "lucide-react";
import { CodeXmlIcon } from "lucide-react";

import { buttonVariants } from "fumadocs-ui/components/ui/button";

import { DocsPreview } from "./DocsPreview";
import { cn } from "@/lib/cn";

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
            className={cn(
              buttonVariants({ variant: "primary" }),
              "w-40 gap-2 rounded-xl",
            )}
          >
            <BookIcon className="size-4" />
            Getting Started
          </Link>
        
          <Link
            href="https://github.com/YggUtils/YggUtils"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "w-40 gap-2 rounded-xl",
            )}
          >
            <CodeXmlIcon className="size-4" />
            GitHub
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
