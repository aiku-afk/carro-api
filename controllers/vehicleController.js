import Vehicle from "../models/Vehicle.js";

export const getVehicles = async (req, res) => {
  const vehicles = await Vehicle.find();
  res.json(vehicles);
};

export const getVehicle = async (req, res) => {
  const vehicle = await Vehicle.findById(req.params.id);
  if (!vehicle) return res.status(404).json({ message: "Veículo não encontrado" });
  res.json(vehicle);
};

export const createVehicle = async (req, res) => {
  const vehicle = new Vehicle(req.body);
  await vehicle.save();
  res.status(201).json(vehicle);
};

export const updateVehicle = async (req, res) => {
  const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(vehicle);
};

export const deleteVehicle = async (req, res) => {
  await Vehicle.findByIdAndDelete(req.params.id);
  res.json({ message: "Veículo removido" });
};
