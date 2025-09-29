const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['https://hello-world-rosy-beta.vercel.app', 'http://localhost:5173'],
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// Hello World data with different effects
const helloWorldEffects = [
  { text: "Hello World", effect: "bounce", color: "text-blue-500" },
  { text: "Hello World", effect: "shake", color: "text-red-500" },
  { text: "Hello World", effect: "pulse", color: "text-green-500" },
  { text: "Hello World", effect: "spin", color: "text-purple-500" },
  { text: "Hello World", effect: "fade", color: "text-yellow-500" },
  { text: "Hello World", effect: "scale", color: "text-pink-500" },
  { text: "Hello World", effect: "flip", color: "text-indigo-500" },
  { text: "Hello World", effect: "glow", color: "text-cyan-500" }
];

// Route to get Hello World with random effect
app.get('/api/hello', (req, res) => {
  try {
    const randomIndex = Math.floor(Math.random() * helloWorldEffects.length);
    const randomEffect = helloWorldEffects[randomIndex];
    
    res.json({
      success: true,
      data: randomEffect,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});