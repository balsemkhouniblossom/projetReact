import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Event(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`../../public/images/${props.event.img}`} />
      <Card.Body>
        <Card.Title>Event Name : {props.event.name}</Card.Title>
        <Card.Text>
         Price {props.event.price}
         Number of tickets {props.event.nbTickets}
         Number of particapant{props.event.nbParticipants}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Event;