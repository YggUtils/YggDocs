import { FeatureGrid } from "@/components/home/FeatureGrid";
import { Hero } from "@/components/home/Hero";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeatureGrid />
    </main>
  );
}