const { Calc } = require("../models/calculate");

const getById = async (req, res) => {
  const { _id } = req.params;
  const calc = await Calc.findById(_id);
  if (!calc) {
    const error = new Error("Not found");
    error.status = 404;
    throw error;
  }
  res.json({ calc });
};

const newUser = async (req, res) => {
  const calc = await Calc.create({});

  res.status(201).json({ calc });
};

const update = async (req, res) => {
  const { _id } = req.params;
  const data = req.body;

  const calc = await Calc.findByIdAndUpdate(_id, data, {
    new: true,
  });

  if (!calc) {
    const error = new Error("Not found");
    error.status = 404;
    throw error;
  }

  res.json({ calc });
};

module.exports = {
  getById,
  newUser,
  update,
};
