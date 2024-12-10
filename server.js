// index.js
const express = require('express');
const { OpenAI } = require('openai');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Initialize OpenAI with your API key
const openai = new OpenAI({
  apiKey: 'your-api-key-here', // replace with your OpenAI API key
});

app.post('/generate-text', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // or other model like 'gpt-4'
      messages: [{ role: 'user', content: prompt }],
    });
    res.json(response.choices[0].message.content);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
