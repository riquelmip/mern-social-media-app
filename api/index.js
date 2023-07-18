import express from "express";

//Aplicacion principal
const app = express();

//Importando los archivos de las rutas
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import likeRoutes from "./routes/likes.js";
import commentRoutes from "./routes/comments.js";
import cookieParser from "cookie-parser";
import cors from "cors";

//Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//Usando las rutas definidas en cada archivo
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/comments", commentRoutes);

//Estableciendo el puerto donde se ejecuta el servicio
app.listen(8800, () => {
  console.log("API Working");
});
