import { contacts, navLinks } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-8 py-12">
        <div className="grid grid-cols-3 items-center">
          <div className="flex items-center gap-2 tracking-tight text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Ryohei Machida. All rights
            reserved.
          </div>

          <nav className="flex items-center justify-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2">
            {contacts.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <link.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
