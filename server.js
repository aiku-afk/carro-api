import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import vehicleRoutes from "./routes/vehicleRoutes.js";
import positionRoutes from "./routes/positionRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

// Rotas
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/positions", positionRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB conectado");
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  })
  .catch((err) => console.log(err));
