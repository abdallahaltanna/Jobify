import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/mongoose.js";
import notFound from "./middlewares/not-found.js";
import errorHandler from "./middlewares/error-handler.js";
import authRoutes from "./routes/authRoutes.js";
import jobRoutes from "./routes/jobsRoutes.js";
import auth from "./middlewares/auth.js";
import "express-async-errors";

const app = express();

dotenv.config();
// connect to db
await connectDB();

app.use(express.json());

app.get("/api/v1", (req, res) => {
  res.json({ msg: "Hello" });
});

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/jobs", auth, jobRoutes);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
