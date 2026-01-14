export const getTasks = (req, res) => {
  res.send("Hello world");
};

export const createTask = (req, res) => {
  const { taskName } = req.body;

  res.json(taskName);
  console.log(taskName);
};
