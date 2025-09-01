import type { Metadata } from 'next';
import ImpactHero from '@/components/impact/ImpactHero';
import ImpactMetrics from '@/components/impact/ImpactMetrics';
import CaseStudies from '@/components/impact/CaseStudies';
import ImpactReports from '@/components/impact/ImpactReports';

export const metadata: Metadata = {
  title: 'Our Impact | SANKET - Measuring Real Change in Communities',
  description: 'Discover SANKET NGO\'s measurable impact across education, healthcare, and environment. Read detailed case studies and download our impact reports.',
  keywords: 'SANKET impact, NGO results, community transformation, social impact measurement, development outcomes',
};

export default function ImpactPage() {
  return (
    <main className="min-h-screen">
      <ImpactHero />
      <ImpactMetrics />
      <CaseStudies />
      <ImpactReports />
    </main>
  );
}
