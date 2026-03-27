import { Calendar, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Article } from "@/data/portfolio.type";

export function BlogCard({
  title,
  url,
  publishedAt,
  category,
  excerpt,
}: Article) {
  return (
    <Card className="flex flex-col border-border/50 transition-all hover:-translate-y-0.5 hover:border-primary/30">
      <CardHeader>
        <div className="mb-1 flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="size-3" />
            {publishedAt}
          </span>
        </div>
        <CardTitle className="text-base h-18">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            {title}
            <ExternalLink className="ml-1.5 inline size-3.5 align-text-middle text-muted-foreground" />
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="line-clamp-3">{excerpt}</CardDescription>
      </CardContent>
      <CardFooter />
    </Card>
  );
}
