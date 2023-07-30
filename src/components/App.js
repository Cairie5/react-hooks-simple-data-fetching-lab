import React, { useState, useEffect } from "react";

function App() {
  // State to hold the random dog image URL
  const [dogImage, setDogImage] = useState(null);

  // State to track if the API call is in progress
  const [isLoading, setIsLoading] = useState(true);

  // useEffect hook to fetch data from the API on component mount
  useEffect(() => {
    // Fetch data from the dog.ceo API
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the received dog image URL
        setDogImage(data.message);
        setIsLoading(false); // Set loading state to false after receiving data
      });
  }, []); // Empty dependency array to ensure useEffect runs only once on mount

  // If the API call is in progress, display a "Loading..." message
  if (isLoading) return <p>Loading...</p>;

  // Once the API call is completed and the dogImage state is set, display the dog image
  return <img src={dogImage} alt="A Random Dog" />;
}

export default App;
