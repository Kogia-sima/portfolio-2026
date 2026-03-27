"use client";

import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProfileSection } from "@/components/ProfileSection";
import { RepoSection } from "@/components/RepoSection";
import { SnsSection } from "@/components/SnsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="flex-1 pt-14">
        <HeroSection />
        <ProfileSection />
        <RepoSection />
        <BlogSection />
        <SnsSection />
      </main>
      <Footer />
    </>
  );
}
