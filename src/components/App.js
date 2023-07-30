import React, { useState, useEffect } from 'react';

const App = () => {
  const [dogImage, setDogImage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        // Update state with the received data
        setDogImage(data.message);
        setIsLoading(false); // Set loading state to false after receiving data
      })
      .catch((error) => {
        console.error('Error fetching dog image:', error);
        setIsLoading(false); // Set loading state to false even on error
      });
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
};

export default App;
