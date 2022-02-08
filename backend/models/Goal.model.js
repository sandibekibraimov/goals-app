const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const GoalSchema = Schema(
  {
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
