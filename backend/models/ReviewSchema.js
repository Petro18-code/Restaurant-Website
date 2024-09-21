import { model, Schema } from "mongoose";

const ReviewSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { collection: "reviews", timestamps: true }
);

export default model("Review", ReviewSchema);