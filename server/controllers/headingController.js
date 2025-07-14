const Heading = require('../models/Heading');

exports.getHeading = async (req, res) => {
  const heading = await Heading.findOne().sort({ updatedAt: -1 });
  res.json(heading);
};

exports.setHeading = async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ message: "Heading text is required" });

  const newHeading = new Heading({ text });
  await newHeading.save();

  res.status(201).json(newHeading);
};
