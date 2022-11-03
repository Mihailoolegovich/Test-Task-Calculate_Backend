const { Calc } = require("../models/calculate");

const getAll = async (req, res) => {
  const calc = await Calc.find({});
  res.json({ calc });
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
  getAll,
  update,
};
