import UpcomingEvents from '@/components/events/UpcomingEvents';
import EventsHero from '@/components/events/EventsHero';

export default function EventsPage() {
  return (
    <main>
      <EventsHero />
      <UpcomingEvents />
    </main>
  );
}