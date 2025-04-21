const express = require('express');
const cors = require('cors');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample route
app.get('/api/health', (req, res) => {
res.json({ status: 'ok', timestamp: new Date() });
});

// Start server
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});