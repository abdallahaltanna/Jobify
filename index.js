import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/mongoose.js";
import notFound from "./middlewares/not-found.js";
import errorHandler from "./middlewares/error-handler.js";
import authRoutes from "./routes/authRoutes.js";
import jobRoutes from "./routes/jobsRoutes.js";
import "express-async-errors";

const app = express();

dotenv.config();
// connect to db
await connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/jobs", jobRoutes);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
