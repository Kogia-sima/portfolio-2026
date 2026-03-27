import { cn } from "@/utils/utils";

type SectionContainerProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionContainer({
  id,
  title,
  subtitle,
  children,
  className,
}: SectionContainerProps) {
  return (
    <section id={id} className={cn("py-20", className)}>
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
