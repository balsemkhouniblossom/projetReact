import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Event ID:", id);
    console.log("Fetched Event:", event); // Check if the event data is set

    // Fetch event data from events.json
    const fetchEvent = async () => {
        try {
          const response = await fetch('/events.json');
          
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          const text = await response.text();
          console.log(text); // Log raw response text
          const events = JSON.parse(text); // Manually parse if the text is valid JSON
          
          const selectedEvent = events.find((e) => e.id === parseInt(id)); // Ensure correct ID comparison
          setEvent(selectedEvent);
        } catch (error) {
          console.error('Error fetching event data:', error);
          alert('There was an issue fetching the event data.');
        }
      };
      

    fetchEvent();
  }, [id]);

  if (error) return <p>{error}</p>;

  if (!event) return <p>Loading event details...</p>;

  return (
    <Card style={{ width: '30rem', margin: '20px auto' }}>
      <Card.Img variant="top" src={`/images/${event.img}`} alt={event.name} />
      <Card.Body>
        <Card.Title>{event.name}</Card.Title>
        <Card.Text>Price: {event.price}</Card.Text>
        <Card.Text>Number of tickets: {event.nbTickets}</Card.Text>
          <Card.Text>Number of participants: {event.nbParticipants}</Card.Text>
      </Card.Body>
    </Card>
  );
}
