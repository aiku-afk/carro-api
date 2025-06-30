import mongoose from "mongoose";

const positionSchema = new mongoose.Schema({
  vehicle: { type: mongoose.Schema.Types.ObjectId, ref: "Vehicle", required: true },
  latitude: Number,
  longitude: Number,
  speed: Number,
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("Position", positionSchema);
