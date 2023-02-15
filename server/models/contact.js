import mongoose from "mongoose";
const { Schema } = mongoose;

const contactSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    min: 10,
    max: 12,
  },
  message: {
    type: String,
    required: true,
    min: 10,
    max: 100,
  },
});

export default mongoose.model("Contact", contactSchema);
