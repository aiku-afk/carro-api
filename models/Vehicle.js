import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  plate: { type: String, required: true, unique: true },
  model: { type: String, required: true },
  year: Number,
  status: { type: String, enum: ["active", "inactive"], default: "active" },
});

export default mongoose.model("Vehicle", vehicleSchema);
