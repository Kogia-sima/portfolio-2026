import { KpiCard } from "@/components/KpiCard";
import { kpiItems } from "@/data/portfolio";

export function KpiDashboard() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-8">
        <div className="grid grid-cols-4 gap-6">
          {kpiItems.map((item) => (
            <KpiCard key={item.label} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
