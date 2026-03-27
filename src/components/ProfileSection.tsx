import { SectionContainer } from "@/components/SectionContainer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/data/portfolio";

export function ProfileSection() {
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <SectionContainer
      id="profile"
      title="Profile"
      subtitle="自己紹介と技術スタック"
    >
      <div className="grid grid-cols-[240px_1fr] gap-12">
        <div className="flex flex-col items-center gap-4">
          <Avatar className="size-48 border-2 border-border">
            <AvatarImage src={profile.avatarUrl} alt={profile.name} />
            <AvatarFallback className="text-4xl font-bold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="text-center">
            <p className="font-semibold">{profile.name}</p>
            <p className="text-sm text-muted-foreground">{profile.title}</p>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold">About</h3>
            <p className="leading-relaxed text-muted-foreground">
              {profile.bio}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {profile.techStack.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
