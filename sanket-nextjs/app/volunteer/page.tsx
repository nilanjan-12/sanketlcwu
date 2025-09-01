import type { Metadata } from 'next';
import VolunteerHero from '@/components/volunteer/VolunteerHero';
import OpportunitiesSection from '@/components/volunteer/OpportunitiesSection';
import VolunteerProcess from '@/components/volunteer/VolunteerProcess';
import VolunteerTestimonials from '@/components/volunteer/VolunteerTestimonials';

export const metadata: Metadata = {
  title: 'Volunteer | SANKET - Join Our Mission to Transform Lives',
  description: 'Become a SANKET volunteer and make a meaningful impact in education, healthcare, and environmental initiatives. Find opportunities that match your skills and passion.',
  keywords: 'volunteer opportunities, community service, NGO volunteering, social impact, education volunteer, healthcare volunteer',
};

export default function VolunteerPage() {
  return (
    <main className="min-h-screen">
      <VolunteerHero />
      <OpportunitiesSection />
      <VolunteerProcess />
      <VolunteerTestimonials />
    </main>
  );
}
