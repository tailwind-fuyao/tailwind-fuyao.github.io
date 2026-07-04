import type { Metadata } from "next";
import { AboutSection, ContactSection } from "@/components/sections";
import {
  ABOUT_EN,
  STATS_EN,
  CONTACT_SECTION_EN,
  CONTACT_INFO,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tailwind Project — Chinese Professional Leadership Accelerator",
  description:
    "Tailwind Project is jointly initiated by five university alumni associations, with Silicon Valley executives as mentors, helping Chinese professionals break through their career ceilings.",
  openGraph: {
    title: "Tailwind Project — Chinese Professional Leadership Accelerator",
    description:
      "Jointly initiated by five university alumni associations, with Silicon Valley mentors helping Chinese professionals break through their careers.",
    type: "website",
    locale: "en_US",
  },
};

export default function EnHome() {
  return (
    <div className="pt-12">
      <AboutSection about={ABOUT_EN} stats={STATS_EN} />
      <ContactSection section={CONTACT_SECTION_EN} info={CONTACT_INFO} />
    </div>
  );
}
