import express from 'express';
import cors from 'cors'; // Import cors module
import productsRouter from './routes/Product.route';

const app = express();
const port = process.env.PORT || 3000;

// Apply CORS middleware
app.use(cors());

// Middleware for parsing JSON bodies
app.use(express.json());

// Mount your router(s)
app.use('/items/', productsRouter); // Adjust route and router to your actual setup

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
