export const validateSchema = (schema) => (req, res) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    const errorMessages = error.issues.map((issue) => issue.message);
    console.log(errorMessages);

    return res.status(400).json({ errors: errorMessages });
  }
};
