const { Schema, model } = require("mongoose");

const calcSchema = Schema(
  {
    value: Array,
  },
  { versionKey: false }
);

const Calc = model("calc", calcSchema);

module.exports = { Calc };
