import express from 'express';
import Brands from '../models/Brands.js';

const router = express.Router();

// Define your POST route for creating brands
router.post('/', async (req, res) => {
  try {
    const { brands_id, name, email, phone, creation_date, business_number } = req.body;
    const newBrands = new Brands({
      brands_id, name, email, phone, creation_date, business_number
    });

    const savedBrand = await newBrands.save();
    res.status(201).json({ message: 'Brand created successfully', brand: savedBrand });

  } catch (error) {
    console.error('Error creating brand:', error); // Log the error to the console
    res.status(500).json({ error: 'Something went wrong while creating the brand' }); // Correct status code
  }
});

// Export the router as default
export default router;