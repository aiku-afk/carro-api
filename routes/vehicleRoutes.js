import express from "express";
import {
  getVehicles,
  getVehicle,
  createVehicle,
  updateVehicle,
  deleteVehicle,
} from "../controllers/vehicleController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getVehicles);
router.get("/:id", auth, getVehicle);
router.post("/", auth, createVehicle);
router.put("/:id", auth, updateVehicle);
router.delete("/:id", auth, deleteVehicle);

export default router;
