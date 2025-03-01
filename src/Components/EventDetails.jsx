import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getallEvents } from '../services/api';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getallEvents(id);
        if (response.status === 200 && response.data) {
          setEvent(response.data);
        } else {
          setError("Event does not exist");
        }
      } catch (error) {
        setError("Error fetching event details: " + error.message);
        console.error("Error fetching event details:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchEvent();
  }, [id]);

  if (loading) {
    return <p>Loading event details...</p>;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`/images/${event.img || event.image}`} />
      <Card.Body>
        <Card.Title>{event.name}</Card.Title>
        <Card.Text>Price: {event.price} TND</Card.Text>
        <Card.Text>Number of tickets: {event.nbTickets}</Card.Text>
        <Card.Text>Number of participants: {event.nbParticipants || 0}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default EventDetails;