import Hero from '@/components/sections/Hero';
import MissionHighlight from '@/components/sections/MissionHighlight';
import FeaturedPrograms from '@/components/sections/FeaturedPrograms';
import UpcomingEvents from '@/components/sections/UpcomingEvents';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <MissionHighlight />
      <FeaturedPrograms />
      <UpcomingEvents />
      <Testimonials />
    </>
  );
}
