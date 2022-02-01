import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    description: String,
    creator: String,
    likeCount: {
      type: Number,
      default: 0,
    },
    unlikeCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
