import express from "express";
import {
  getAllJobs,
  createJob,
  deleteJob,
  updateJob,
  showStats,
} from "../controllers/jobsControllers.js";

const router = express.Router();

router.route("/").get(getAllJobs).post(createJob);
router.route("/:id").delete(deleteJob).patch(updateJob);
router.get("/stats", showStats);

export default router;
