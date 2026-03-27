import { ExternalLink, GitFork, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Repo } from "@/data/portfolio.type";

export function RepoCard({
  name,
  description,
  url,
  languages,
  stars,
  forks,
}: Repo) {
  return (
    <Card className="flex flex-col border-border/50 transition-all hover:-translate-y-0.5 hover:border-primary/30">
      <CardHeader>
        <CardTitle className="text-base">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            {name}
            <ExternalLink className="ml-1.5 inline size-3.5 align-text-middle text-muted-foreground" />
          </a>
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1" />
      <CardFooter className="flex items-center gap-4 text-sm text-muted-foreground pt-0">
        {languages.map((lang) => (
          <Badge key={lang} variant="outline" className="text-xs">
            {lang}
          </Badge>
        ))}
        <span className="flex items-center gap-1">
          <Star className="size-3.5" />
          {stars}
        </span>
        <span className="flex items-center gap-1">
          <GitFork className="size-3.5" />
          {forks}
        </span>
      </CardFooter>
    </Card>
  );
}
