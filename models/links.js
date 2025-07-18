import mongoose from "mongoose";

const linkSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    shorturl: {
      type: String,
      required: true,
    },
  },
);


const Link = mongoose.models.Link || mongoose.model("Link", linkSchema);

export default Link;
