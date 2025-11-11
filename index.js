import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());

// 🔗 Rutas
app.use("/api/v1/users", userRoutes);

// 🔌 Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch((error) => console.log("❌ Error al conectar a MongoDB:", error));

// 🚀 Servidor
app.listen(3000, () => console.log("🚀 Servidor corriendo en el puerto 3000"));
