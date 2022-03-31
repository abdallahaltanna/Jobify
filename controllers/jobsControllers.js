import { BadRequestError } from "../errors/index.js";
import Job from "../models/jobModel.js";

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.status(200).json({ jobs });
};

const createJob = async (req, res) => {
  const { position, company } = req.body;
  if (!position || !company) {
    throw new BadRequestError("Please provide all values");
  }

  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(201).json({ job });
};

const deleteJob = (req, res) => {
  res.send("deleteJob");
};

const updateJob = (req, res) => {
  res.send("updateJob");
};

const showStats = (req, res) => {
  res.send("showStats");
};

export { getAllJobs, createJob, deleteJob, updateJob, showStats };
