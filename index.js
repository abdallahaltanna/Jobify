import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/mongoose.js";
import notFound from "./middlewares/not-found.js";
import errorHandler from "./middlewares/error-handler.js";

dotenv.config();

// connect to db
await connectDB();

const app = express();

app.get("/", (req, res) => {
  throw new Error("error");
  res.send("Welcome");
});

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
