const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Define the User model
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  // Add other user-related fields as needed
});

const User = mongoose.model('User', userSchema);

// Passport configuration
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'your-secret-key', // Replace with your secret key
};

passport.use(new JwtStrategy(jwtOptions, (jwtPayload, done) => {
    try {
        // Find the user by ID in the database
        const user = await User.findById(jwtPayload.sub);
    
        if (!user) {
          // If user not found, return false
          return done(null, false);
        }
    
        // If user is found, return the user object
        return done(null, user);
      } catch (err) {
        // Handle any errors that occur during the database query
        return done(err, false);
      }
}));

// Middleware for protecting routes
const requireAuth = passport.authenticate('jwt', { session: false });

// Connect to MongoDB
mongoose.connect('mongodb://localhost/TheCakeryGarden', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define your MongoDB schemas and models here
const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    min: 1, // Assuming a minimum rating of 1
    max: 5, // Assuming a maximum rating of 5
    default: 1, // Default rating when not provided
  },
  
});

module.exports = mongoose.model('MenuItem', menuItemSchema);


// Define your API routes here
app.get('/menu', async (req, res) => {
    try {
      const menuItems = await MenuItem.find();
      res.status(200).json(menuItems);
    } catch (err) {
      res.status(500).json({ error: 'Failed to retrieve menu items.' });
    }
  });
app.post('/menu', async (req, res) => {
    const { name, description, price } = req.body;
  
    try {
      const newItem = new MenuItem({ name, description, price });
      await newItem.save();
      res.status(201).json(newItem);
    } catch (err) {
      res.status(500).json({ error: 'Failed to create a new menu item.' });
    }
  });
  
app.put('/menu/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
  
    try {
      const updatedItem = await MenuItem.findByIdAndUpdate(
        id,
        { name, description, price },
        { new: true }
      );
      if (!updatedItem) {
        return res.status(404).json({ error: 'Menu item not found.' });
      }
      res.status(200).json(updatedItem);
    } catch (err) {
      res.status(500).json({ error: 'Failed to update the menu item.' });
    }
  });
  
app.delete('/menu/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedItem = await MenuItem.findByIdAndRemove(id);
      if (!deletedItem) {
        return res.status(404).json({ error: 'Menu item not found.' });
      }
      res.status(200).json(deletedItem);
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete the menu item.' });
    }
  });  
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
