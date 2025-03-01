import React, { useEffect, useState } from 'react';
import { getallEvents } from '../services/api'; // Adjust the path as necessary
import Alert from 'react-bootstrap/Alert'; // Ensure you have this import for Alert
import Event from '../Components/Event'; // Adjust the import as necessary

const Events = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false); // Define showWelcomeMessage

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching
      try {
        const response = await getallEvents();
        setList(response.data); // Assuming the response data is the events array
      } catch (error) {
        setError("Error fetching data."); // Set error message
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchData();

    // Show the welcome message when the component mounts
    setShowWelcomeMessage(true);
    const timer = setTimeout(() => {
      setShowWelcomeMessage(false); // Hide the message after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (loading) {
    return <p>Loading events...</p>; // Loading state
  }

  if (error) {
    return <p>{error}</p>; // Error state
  }

  return (
    <>
      {showWelcomeMessage && (
        <Alert variant="success">
          Hey! Welcome to Esprit Events
        </Alert>
      )}

      <ul>
        {list.map((e, i) => (
          <Event key={e.id || i} event={e} />
        ))}
      </ul>
    </>
  );
};

export default Events;