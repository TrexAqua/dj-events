import Layout from "@/Components/Layout";
import EventItem from "@/Components/EventItem";
import { API_URL } from "@/config/index";
import Link from "next/link";
export default function Home({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 ? (
        <h3>No Events To Show</h3>
      ) : (
        events.map((event) => <EventItem key={event.id} evt={event} />)
      )}

      {events.length > 0 && (
        <Link href="/events">
          <a className="btn.secondary">View All Events</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: {
      events: events.slice(0, 3),
      revalidate: 1,
    },
  };
}
