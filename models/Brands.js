//import mongoose to define the schema model
import mongoose from 'mongoose';

//define the schema for the Brands
const BrandsSchema = new mongoose.Schema ({

    //set the structure of my collections
    //how many fields, data types

    brands_id: {
        type: String,
        required: [true, 'Brand ID is required'],
        unique: true,
        minlength: [2, 'Brand name must be at least 2 characters long'],
    },

    name: {
        type: String,
        required: [true, 'Brand Name is required'],
        // Optional Validation: name length at least 3 characters:
        minlength: [3, 'Brand Name must be at least 3 characters long'],
    },

    email: {
        type: String,
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],
        unique: true, //optional (if email uniqueness is needed)

    },

    phone: {
        type: String,
        required: [true, 'Phone is required'],
        minlength: [10, 'Phone must be at least 10 characters long'],
    },

    creation_date: {
        type: Date,
        required: true,
    },

    business_number: {
        type: Number,
        required: true,
    },


});

   // Create the Model (with the standard collection name behavior => brands):
   const Brands = mongoose.model('Brands', BrandsSchema);

   // Export the Brands model so that it can be used in other files (in routes/controllers)
export default Brands;