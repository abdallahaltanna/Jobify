const getAllJobs = (req, res) => {
  res.send("getAllJobs");
};

const createJob = (req, res) => {
  res.send("createJob");
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
