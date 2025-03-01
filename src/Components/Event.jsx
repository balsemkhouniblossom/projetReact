import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Ajoutez cette ligne

export default function Event(props) {
  const [nbParticipants, setNbParticipants] = useState(props.event.nbParticipants);
  const [nbTickets, setNbTickets] = useState(props.event.nbTickets);
  const [message, setMessage] = useState('');
  const [liked, setLiked] = useState(props.event.like);

  // Handle booking an event
  const buy = () => {
    if (nbTickets > 0) {
      setNbTickets(nbTickets - 1);
      setNbParticipants(nbParticipants + 1);
      setMessage('You have booked an event');
      setTimeout(() => setMessage(''), 2000); // Hide the message after 2 seconds
    } else {
      setMessage('Sold Out');
      setTimeout(() => setMessage(''), 2000); // Hide the "Sold Out" message after 2 seconds
    }
  };

  // Toggle the Like/Dislike state
  const toggleLike = () => {
    setLiked(!liked);
  };

  // Conditionally change the image if the event is sold out
  const imageSrc = nbTickets === 0 ? '/images/soldout.jfif' : `/images/${props.event.img}`;

  return (
    <Row>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imageSrc} />
        <Card.Body>
          <Card.Title>
          <NavLink to={`/events/${props.event.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
  {props.event.name}
</NavLink>

          </Card.Title>
          <Card.Text>Price: {props.event.price}</Card.Text>
          <Card.Text>Number of tickets: {nbTickets}</Card.Text>
          <Card.Text>Number of participants: {nbParticipants}</Card.Text>

          {message && <Alert variant={message === 'Sold Out' ? 'danger' : 'success'}>{message}</Alert>}

          <Button
            variant="primary"
            onClick={buy}
            disabled={nbTickets === 0} // Disable button if tickets are sold out
          >
            {nbTickets === 0 ? 'Sold Out' : 'Book an Event'}
          </Button>

          <Button
            variant={liked ? 'danger' : 'outline-primary'}
            onClick={toggleLike}
            style={{ marginLeft: '10px' }}
          >
            {liked ? 'Dislike' : 'Like'}
          </Button>

          <Link to={`/update-event/${props.event.id}`}>
                <Button variant="primary">Update Event</Button>
            </Link>
        </Card.Body>
      </Card>
    </Row>
  );
}
