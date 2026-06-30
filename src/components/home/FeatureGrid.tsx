import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Rocket,
  Settings,
} from "lucide-react";

const items = [
  {
    title: "Getting Started",
    description:
      "Install YggUtils and launch your first server in minutes.",
    href: "/docs/getting-started",
    icon: Rocket,
  },
  {
    title: "Configuration",
    description:
      "Configure authentication, launch settings and runtime behaviour.",
    href: "/docs/configuration",
    icon: Settings,
  },
  {
    title: "Documentation",
    description:
      "Explore every feature, guide and reference page.",
    href: "/docs",
    icon: BookOpen,
  },
];

export function FeatureGrid() {
  return (
    <section className="border-t border-fd-border">

      <div className="mx-auto max-w-7xl px-8 py-20">

        <div className="max-w-xl">

          <p className="text-sm text-fd-primary font-medium">
            Documentation
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight">
            Continue Reading
          </h2>

          <p className="mt-4 text-fd-muted-foreground">
            Everything you need to get started with YggUtils.
          </p>

        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="
                  group
                  rounded-2xl
                  border
                  border-fd-border
                  p-6
                  transition-colors
                  hover:bg-fd-accent
                "
              >
                <Icon
                  className="mb-6 size-6"
                  strokeWidth={1.8}
                />

                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-fd-muted-foreground">
                  {item.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-fd-primary">

                  Read more

                  <ArrowRight
                    className="
                      size-4
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />

                </div>

              </Link>
            );
          })}

        </div>

      </div>

    </section>
  );
}