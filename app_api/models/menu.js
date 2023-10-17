var mongoose = require('mongoose');

var cakeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ratings: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      rating: {
        type: Number,
        required: true,
      },
    },
  ],
});

mongoose.model('cake', cakeSchema);
