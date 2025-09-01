import type { Metadata } from 'next';
import JourneyHero from '@/components/journey/JourneyHero';
import Timeline from '@/components/journey/Timeline';
import Milestones from '@/components/journey/Milestones';
import Stories from '@/components/journey/Stories';

export const metadata: Metadata = {
  title: 'Our Journey | SANKET - 15 Years of Community Impact',
  description: 'Discover SANKET NGO\'s inspiring journey from humble beginnings to impacting thousands of lives through education, healthcare, and environmental initiatives.',
  keywords: 'SANKET journey, NGO history, community impact timeline, social change milestones',
};

export default function JourneyPage() {
  return (
    <main className="min-h-screen">
      <JourneyHero />
      <Timeline />
      <Milestones />
      <Stories />
    </main>
  );
}
