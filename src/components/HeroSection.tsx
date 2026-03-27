import { ArrowDown } from "lucide-react";
import { KpiCard } from "@/components/KpiCard";
import { Button } from "@/components/ui/button";
import { kpiItems, profile } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.65_0.15_250/0.08),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-8 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          {profile.title}
        </p>
        <h1 className="text-5xl font-bold tracking-tight lg:text-6xl">
          {profile.name}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          {profile.tagline}
        </p>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-4 gap-6">
          {kpiItems.map((item) => (
            <KpiCard key={item.label} {...item} />
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <Button
            nativeButton={false}
            variant="default"
            size="lg"
            render={<a href="#profile" />}
          >
            View My Work
            <ArrowDown className="size-4" />
          </Button>
          <Button
            nativeButton={false}
            variant="outline"
            size="lg"
            render={<a href="#contact" />}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
