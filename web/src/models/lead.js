const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const { Schema } = mongoose;


const leadModel = new Schema({
  email: {
    type: String,
    required: true,
  }  

});

module.exports = mongoose.model('Lead', leadModel);