// Importar librerías
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Cargar las variables del archivo .env

const app = express();

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Conectado exitosamente a MongoDB Atlas"))
  .catch((error) => console.error("❌ Error al conectar a MongoDB:", error));

// Puerto de ejecución
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en el puerto ${PORT}`));

mongoose.connect("mongodb+srv://Sandycat:Sandy2019@cluster0.mongodb.net/tuBD?retryWrites=true&w=majority")
  .then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.error(err));



