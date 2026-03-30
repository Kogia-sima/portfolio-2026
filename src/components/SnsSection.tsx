import { SectionContainer } from "@/components/SectionContainer";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { snsLinks } from "@/data/portfolio";

export function SnsSection() {
  return (
    <SectionContainer
      id="miscellaneous"
      title="Miscellaneous"
      subtitle="その他のプロジェクトや活動については、以下のリンクからご覧いただけます。"
    >
      <div className="flex gap-4">
        {snsLinks.map((link) => (
          <Tooltip key={link.platform}>
            <TooltipTrigger
              render={
                <Button
                  nativeButton={false}
                  variant="outline"
                  size="lg"
                  render={
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  <link.icon className="size-5" />
                  {link.platform}
                </Button>
              }
            />
            <TooltipContent>{link.platform}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </SectionContainer>
  );
}
