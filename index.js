import React, { useState } from 'react';

const Home = () => {
  const [learningStyle, setLearningStyle] = useState(null);
  const [contentFormat, setContentFormat] = useState('text');

  const handleLearningStyleDetection = async () => {
    // Call backend API for learning style detection
    const response = await fetch('/api/detect-style');
    const data = await response.json();
    setLearningStyle(data.style);
    setContentFormat(data.recommendedFormat);
  };

  return (
    <div>
      <h1>Welcome to EduMorph</h1>
      <p>Your personalized learning journey starts here!</p>
      <button onClick={handleLearningStyleDetection}>
        Detect My Learning Style
      </button>
      {learningStyle && (
        <div>
          <h2>Your Learning Style: {learningStyle}</h2>
          <p>Recommended Content Format: {contentFormat}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
