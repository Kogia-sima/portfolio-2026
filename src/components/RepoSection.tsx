import { RepoCard } from "@/components/RepoCard";
import { SectionContainer } from "@/components/SectionContainer";
import { repos } from "@/data/portfolio";

export function RepoSection() {
  return (
    <SectionContainer
      id="repositories"
      title="GitHub Repositories"
      subtitle="これまでにGitHubで公開してきたプロジェクトの中から、代表的なものをピックアップして紹介します。"
    >
      <div className="grid grid-cols-3 gap-6">
        {repos.map((repo) => (
          <RepoCard key={repo.name} {...repo} />
        ))}
      </div>
    </SectionContainer>
  );
}
