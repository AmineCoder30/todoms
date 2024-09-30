import express from "express";
import mongoose from "mongoose";
import listRoute from "./routes/listRoute.js";
import userRoute from "./routes/userRoute.js";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(express.json());

// Middleware for handling CORS POLICY

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);
const Port = process.env.PORT;
const Host = process.env.MONGODB_URI;
app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome to my todo list app");
});

app.use("/todos", listRoute);
app.use("/user", userRoute);
mongoose
  .connect(Host)
  .then(() => {
    console.log("App connected to database");
    app.listen(Port, () => {
      console.log(`http://localhost:${Port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
