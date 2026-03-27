import { Card, CardContent } from "@/components/ui/card";
import type { KpiItem } from "@/data/portfolio.type";

export function KpiCard({ icon: Icon, label, value }: KpiItem) {
  return (
    <Card className="border-border/50 bg-card/50 transition-all hover:border-primary/20 hover:shadow-[0_0_20px_oklch(0.65_0.15_250/0.08)]">
      <CardContent className="flex flex-col items-center gap-2 pt-4 pb-2 text-center">
        <Icon className="size-6 text-primary" />
        <p className="text-3xl font-bold tracking-tight">{value}</p>
        <p className="text-sm text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  );
}
