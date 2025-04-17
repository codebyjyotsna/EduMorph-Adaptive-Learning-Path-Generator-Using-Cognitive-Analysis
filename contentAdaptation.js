const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: 'YOUR_OPENAI_API_KEY',
});
const openai = new OpenAIApi(configuration);

// Convert text into video script or mind map using OpenAI
async function adaptContent(content, format) {
  if (format === 'video') {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Convert the following text into a video script:\n\n${content}`,
      max_tokens: 500,
    });
    return response.data.choices[0].text.trim();
  } else if (format === 'mind_map') {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Summarize the following text into a mind map format:\n\n${content}`,
      max_tokens: 500,
    });
    return response.data.choices[0].text.trim();
  }
  return content; // Default to original content
}

module.exports = { adaptContent };
