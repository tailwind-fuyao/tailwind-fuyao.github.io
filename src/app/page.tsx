import {
  HeroSection,
  AboutSection,
  HighlightsSection,
  MentorsSection,
  TimelineSection,
  GallerySection,
  HistoryPreviewSection,
  TeamSection,
  SponsorsSection,
  PartnersSection,
  ContactSection,
} from "@/components/sections";
import { HomepageChrome } from "@/components/ui";

export default function Home() {
  return (
    <>
      <HomepageChrome />
      <div className="site-main">
        <HeroSection />
        <AboutSection />
        <HighlightsSection />
        <MentorsSection />
        <TimelineSection />
        <GallerySection />
        <HistoryPreviewSection />
        <TeamSection />
        <SponsorsSection />
        <PartnersSection />
        <ContactSection />
      </div>
    </>
  );
}
