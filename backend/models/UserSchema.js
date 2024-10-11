import { model, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    googleid: String,
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: function() {
        return !this.googleid;
      },
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "users", timestamps: true }
);

export default model("User", UserSchema);