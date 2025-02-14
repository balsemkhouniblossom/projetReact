import { useState, useEffect } from 'react';
import list from '../data/events.json';
import Event from '../Components/Event';
import Alert from 'react-bootstrap/Alert';

export default function Events() {
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);

  // Use useEffect to show the welcome message after the component has mounted
  useEffect(() => {
    // Show the welcome message after the component is mounted
    setShowWelcomeMessage(true);

    // Hide the message after 3 seconds
    const timer = setTimeout(() => {
      setShowWelcomeMessage(false);
    }, 3000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs once after mounting

  return (
    <>
      {showWelcomeMessage && (
        <Alert variant="success">
         Hey  Welcome to Esprit Events 
        </Alert>
      )}

      <ul>
        {list.map((e, i) => (
          <Event key={e.id || i} event={e} />
        ))}
      </ul>
    </>
  );
}
