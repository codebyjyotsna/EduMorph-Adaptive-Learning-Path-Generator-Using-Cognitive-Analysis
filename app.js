const express = require('express');
const bodyParser = require('body-parser');
const { analyzeBehavior, suggestFormat } = require('./ai-engine/learningStyle');

const app = express();
app.use(bodyParser.json());

// Mock route for learning style detection
app.post('/api/detect-style', async (req, res) => {
  const { interactions } = req.body; // Collect behavioral data
  const learningStyle = analyzeBehavior(interactions);
  const recommendedFormat = suggestFormat(learningStyle);

  res.json({
    style: learningStyle,
    recommendedFormat: recommendedFormat,
  });
});

app.listen(3000, () => {
  console.log('Backend server is running on http://localhost:3000');
});
