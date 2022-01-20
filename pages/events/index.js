import Layout from "@/Components/Layout";
import EventItem from "@/Components/EventItem";
import { API_URL } from "@/config/index";
export default function EventsPage({ events }) {
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 ? (
        <h3>No Events To Show</h3>
      ) : (
        events.map((event) => <EventItem key={event.id} evt={event} />)
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: {
      events,
      revalidate: 1,
    },
  };
}
