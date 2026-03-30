# Portfolio 2026

AIエンジニアとしての個人成果物をまとめたポートフォリオサイトです。
プロフィール、GitHubリポジトリ、技術ブログ記事、連絡先を一覧で掲載しています。

## サイトURL

**https://portfolio-2026-gamma-six.vercel.app/**

---

## サイト構成

サイトはシングルページ構成で、ヘッダーの固定ナビゲーションから各セクションへスムーズにスクロールできます。

| セクション | 内容 |
| --- | --- |
| Hero | 名前・肩書き・キャッチコピー、主要KPI (リポジトリ数・スター数・記事数・プログラミング歴) |
| Profile | 自己紹介文、保有する技術スタックの一覧 |
| Repositories | GitHubで公開している代表的なリポジトリの紹介 (名前・概要・使用言語・スター数) |
| Blog | Qiita・Noteに投稿した技術記事の紹介 (タイトル・カテゴリ・投稿日・概要) |
| Miscellaneous | その他のプロジェクト・活用の紹介 |

## 技術スタック

| カテゴリ | 技術 | バージョン |
| --- | --- | --- |
| フレームワーク | Next.js (App Router, Static Export) | 16 |
| 言語 | TypeScript | 5 |
| UIライブラリ | React | 19 |
| UIコンポーネント | shadcn/ui (Base UI ベース) | 4 |
| アイコン | Lucide React | - |
| スタイリング | Tailwind CSS | 4 |
| リンター / フォーマッター | Biome | 2 |
| ビルド最適化 | React Compiler | - |

## プロジェクト構成

```
src/
├── app/                  # Next.js App Router
│   ├── layout.tsx        # ルートレイアウト (フォント・メタデータ・ダークモード設定)
│   ├── page.tsx          # トップページ (全セクションの組み立て)
│   └── globals.css       # グローバルCSS (カラートークン・テーマ定義)
├── components/           # UIコンポーネント
│   ├── Header.tsx        # 固定ヘッダー・ナビゲーション
│   ├── Footer.tsx        # フッター (著作権表示・ナビリンク・SNSリンク)
│   ├── SectionContainer.tsx  # セクション共通ラッパー
│   ├── HeroSection.tsx   # ヒーローセクション + KPIカード
│   ├── KpiCard.tsx       # KPI指標カード
│   ├── ProfileSection.tsx    # プロフィールセクション
│   ├── RepoSection.tsx   # リポジトリ一覧
│   ├── RepoCard.tsx      # リポジトリカード
│   ├── BlogSection.tsx   # ブログ記事一覧
│   ├── BlogCard.tsx      # ブログ記事カード
│   ├── SnsSection.tsx    # SNS・連絡先セクション
│   └── ui/               # shadcn/ui コンポーネント (button, card, badge, avatar, tooltip, separator)
└── data/                 # データ定義
    ├── portfolio.ts      # ポートフォリオデータ (プロフィール・リポジトリ・記事・SNS)
    └── portfolio.type.ts # 型定義
```

## 開発コマンド

```bash
pnpm dev       # 開発サーバー起動 (http://localhost:3000)
pnpm build     # 本番ビルド
pnpm lint      # コードチェック (Biome)
pnpm format    # コードフォーマット (Biome)
```
