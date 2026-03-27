import { BlogCard } from "@/components/BlogCard";
import { SectionContainer } from "@/components/SectionContainer";
import { articles } from "@/data/portfolio";

export function BlogSection() {
  return (
    <SectionContainer
      id="blog"
      title="Blog Articles"
      subtitle="これまでに執筆した技術記事の中から、代表的なものをピックアップして紹介します。"
    >
      <div className="grid grid-cols-3 gap-6">
        {articles.map((article) => (
          <BlogCard key={article.title} {...article} />
        ))}
      </div>
    </SectionContainer>
  );
}
