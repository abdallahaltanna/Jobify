import { BadRequestError, NotFoundError } from "../errors/index.js";
import Job from "../models/jobModel.js";
import checkPermissions from "../utils/checkPermissions.js";

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

const deleteJob = async (req, res) => {
  const { id: jobId } = req.params;
  const job = await Job.findOne({ _id: jobId });
  if (!job) {
    throw new NotFoundError(`No job with id ${jobId}`);
  }

  checkPermissions(req.user, job.createdBy);

  await job.remove();
  res.status(200).json({ msg: "Success! Job removed" });
};

const updateJob = async (req, res) => {
  const { id: jobId } = req.params;
  const { position, company, jobLocation } = req.body;
  if (!position || !company || !jobLocation) {
    throw new BadRequestError("Please provide all values");
  }

  const job = await Job.findOne({ _id: jobId });
  if (!job) {
    throw new NotFoundError(`No job with id ${id}`);
  }

  checkPermissions(req.user, job.createdBy);

  const updatedJob = await Job.findOneAndUpdate({ _id: jobId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ updatedJob });
};

const showStats = (req, res) => {
  res.send("showStats");
};

export { getAllJobs, createJob, deleteJob, updateJob, showStats };
