const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    user: {
      //need to know what user created the goal. Which model does the ObjectUd refer to?
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);
