import dotenv from "dotenv";
import connectDB from "./db/mongoose.js";
import Job from "./models/jobModel.js";
import fs from "fs/promises";

dotenv.config();

const populateData = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await Job.deleteMany();

    const jobsData = JSON.parse(
      await fs.readFile(new URL("./MOCK_DATA.json", import.meta.url))
    );

    await Job.create(jobsData);
    console.log("Success");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

populateData();
