import {
  BookOpen,
  FolderGit2,
  GitBranch,
  Globe,
  Mail,
  Star,
  Timer,
} from "lucide-react";
import type {
  Article,
  Contact,
  KpiItem,
  Profile,
  Repo,
  SnsLink,
} from "./portfolio.type";

export const profile: Profile = {
  name: "Ryohei Machida",
  title: "AI Engineer",
  tagline:
    "Building reliable AI systems that empower users and drive innovation.",
  bio: "AI・データ基盤・クラウド・フルスタックを横断する技術力と、プリセールス経験に基づくビジネス視点を兼ね備えたAIエンジニア。製造業DX支援では技術リーダーとして計13件の開発テーマを主導し、AIモデルの143倍高速化や分散処理費用97%削減等の成果を創出。社内では生成AIトレンド配信基盤の単独開発・運用（累計10,000件以上配信）、Claude Code研修の企画・実施（満足度5/5）、生成AI利用ガイドライン策定など、AI活用の組織浸透を一貫して推進。技術力とビジネス力の両面から、事業価値に直結する貢献を行います。",
  avatarUrl: "/avatar.png",
  techStack: [
    "AWS",
    "Google Cloud",
    "Azure",
    "Python",
    "TypeScript",
    "PyTorch",
    "TensorFlow",
    "LangChain",
  ],
};

export const kpiItems: KpiItem[] = [
  { icon: FolderGit2, label: "Repositories", value: 52 },
  { icon: Star, label: "Total Stars", value: 1020 },
  { icon: BookOpen, label: "Articles", value: 38 },
  { icon: Timer, label: "Years of Programming", value: 19 },
];

export const repos: Repo[] = [
  {
    name: "sailfish",
    description:
      "Rust製のシンプルで、軽量で、高速なテンプレートエンジン。テンプレートエンジンのベンチマークにおいて、約6年間1位を維持しています。",
    url: "https://github.com/rust-sailfish/sailfish",
    languages: ["Rust"],
    stars: 967,
    forks: 62,
  },
  {
    name: "itoap",
    description:
      "整数を文字列に変換するための高速なライブラリ。従来よりも高速なアルゴリズムを開発し、様々なライブラリで実際に使用されています。",
    url: "https://github.com/Kogia-sima/itoap",
    languages: ["Rust"],
    stars: 23,
    forks: 2,
  },
  {
    name: "fish-quest",
    description:
      "魚の写真から名前を当てるゲーム。魚の名前を楽しみながら学べるように設計されています。",
    url: "https://github.com/Kogia-sima/fish-quest",
    languages: ["TypeScript"],
    stars: 1,
    forks: 0,
  },
  {
    name: "lyrics-video-creator",
    description:
      "歌詞動画を自動生成するWebアプリ。ユーザが歌詞と音楽をアップロードだけで、適切なタイミングで歌詞が表示される動画が生成されます。",
    url: "https://github.com/Kogia-sima/lyrics-video-creator",
    languages: ["TypeScript", "Python"],
    stars: 1,
    forks: 0,
  },
  {
    name: "rust-covfix",
    description:
      "Rust製のコードカバレッジ修正ツール。Rustプロジェクトにおけるカバレッジの不整合を自動的に修正し、テストの信頼性を向上させます。",
    url: "https://github.com/Kogia-sima/rust-covfix",
    languages: ["Rust"],
    stars: 16,
    forks: 4,
  },
  {
    name: "python-project-template2",
    description:
      "Pythonプロジェクトのテンプレート。Claude Code, Devcontainer, CI/CD, Pre-commitなど、モダンなPython開発に必要な構成があらかじめセットアップされています。",
    url: "https://github.com/Kogia-sima/python-project-template2",
    languages: ["Python"],
    stars: 1,
    forks: 0,
  },
];

export const articles: Article[] = [
  {
    title: "世界最速のテンプレートエンジンを作る",
    url: "https://qiita.com/Kogia_sima/items/87157af0fbf50ceda0ae",
    publishedAt: "2020-06-15",
    category: "Qiita",
    excerpt:
      "世界最速のテンプレートエンジンであるsailfishを開発することになったきっかけと、世界最速に至ったまでの経緯について紹介します。",
  },
  {
    title: "Pythonで情報収集を自動化してみた！概要から仕組みまで解説",
    url: "https://note.com/bunsekiya_tech/n/nc94e336b865c",
    publishedAt: "2024-09-30",
    category: "Note",
    excerpt:
      "Google Cloudと生成AIを活用して、情報収集を自動化する仕組みを個人で開発。これにより、情報収集に要する時間を87%削減。",
  },
  {
    title:
      "【個人開発】音楽生成AIで作った曲から、爆速で歌詞付き動画を作成できるツールを公開しました！",
    url: "https://qiita.com/Kogia_sima/items/73f7f1baf42b5e849d2f",
    publishedAt: "2025-06-22",
    category: "Qiita",
    excerpt:
      "PythonとTypeScriptで、音楽生成AIで作った曲から歌詞付き動画を爆速で作成できるツールを開発。音楽と歌詞を自動的に同期させ、魅力的な歌詞動画を生成します。",
  },
  {
    title:
      "異常検知の「異常データがない」問題を生成AIで解決する (ソリューション編)",
    url: "https://note.com/bunsekiya_tech/n/n1ea88b12ca5a",
    publishedAt: "2024-09-25",
    category: "Note",
    excerpt:
      "異常検知においてよくありがちな、「異常データがない」という問題を、生成AIを活用して異常データを活用して解決するアプローチを紹介します。",
  },
  {
    title: "異常検知の「異常データがない」問題を生成AIで解決する (検証編)",
    url: "https://note.com/bunsekiya_tech/n/n19f60336ff44",
    publishedAt: "2024-09-26",
    category: "Note",
    excerpt:
      "異常検知においてよくありがちな、「異常データがない」という問題を、生成AIを活用して異常データを活用して解決するアプローチを紹介します。",
  },
  {
    title: "Cloudflareの「デジタル停電」から学ぶ、企業が見直すべきリスク管理",
    url: "https://note.com/bunsekiya_tech/n/n618335665c47",
    publishedAt: "2025-11-29",
    category: "Note",
    excerpt:
      "2025年に発生したCloudflareの大規模障害の原因と影響を分析し、企業が見直すべきリスク管理のポイントを解説します。",
  },
];

export const snsLinks: SnsLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/Kogia-sima",
    icon: GitBranch,
  },
  { platform: "Qiita", url: "https://qiita.com/Kogia_sima", icon: Globe },
];

export const contacts: Contact[] = [
  {
    url: "https://github.com/Kogia-sima",
    icon: GitBranch,
  },
  { url: "https://qiita.com/Kogia_sima", icon: Globe },
  { url: "mailto:orcinus4627@gmail.com", icon: Mail },
];

export const navLinks = [
  { label: "Profile", href: "#profile" },
  { label: "Repositories", href: "#repositories" },
  { label: "Blog", href: "#blog" },
  { label: "Miscellaneous", href: "#miscellaneous" },
];
