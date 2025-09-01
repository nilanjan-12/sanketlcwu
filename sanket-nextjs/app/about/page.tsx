import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import Mission from "@/components/about/Mission";
import Values from "@/components/about/Values";
import Team from "@/components/about/Team";
import Partners from "@/components/about/Partners";

export const metadata: Metadata = {
  title: "About Us - SANKET NGO",
  description: "Learn about SANKET NGO's mission, vision, and values. Discover how we lead to a change within us through our community initiatives.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Mission />
      <Values />
      <Team />
      <Partners />
    </>
  );
}
