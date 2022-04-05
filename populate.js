import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/mongoose.js";
import Job from "./models/jobModel.js";
import { readFile } from "fs/promises";

const start = async () => {
  try {
    await connectDB(process.env.DATABASE_URL);
    await Job.deleteMany();

    const jsonJobs = JSON.parse(
      await readFile(new URL("./MOCK_DATA.json", import.meta.url))
    );

    await Job.create(jsonJobs);
    console.log("success");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
