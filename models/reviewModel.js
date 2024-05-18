import mongoose from "../config/mongoose.config.js";

const reviewSchema = mongoose.Schema({
    user: [
        {
            type: mongoose.Types.ObjectId,
            ref: "User",
        }
    ],
    experience:  [
        {
            type: mongoose.Types.ObjectId,
            ref: "Experience",
        }
    ],
    comment: {type: String},
    score: {type: Number}
});

const Review = mongoose.model("Review", reviewSchema); 

export default Review;