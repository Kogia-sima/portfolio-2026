"use client";

import { Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, snsLinks } from "@/data/portfolio";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-8">
        <a
          href="#top"
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <Code className="size-5 text-primary" />
          <span>Ryohei Machida</span>
        </a>

        <nav className="flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <div className="ml-2 h-4 w-px bg-border" />
          {snsLinks
            .filter((link) => link.platform === "GitHub")
            .map((link) => (
              <Button
                key={link.platform}
                nativeButton={false}
                variant="ghost"
                size="icon-sm"
                className="ml-1"
                render={
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <link.icon className="size-4" />
              </Button>
            ))}
        </nav>
      </div>
    </header>
  );
}
