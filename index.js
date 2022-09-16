import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/Posts.js";
import userRoutes from './routes/Users.js'

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/users", userRoutes);

app.get('/',(_req,res)=>{
  res.send('App is running');
})

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL || "mongodb+srv://shantanusaha11:sanu1234@mongodb.sd2hx.mongodb.net/frienzo?retryWrites=true&w=majority")
  .then(() =>
    app.listen(PORT, () => console.log(`server is running on port: ${PORT}`))
  )
  .catch((error) => console.log(error));
