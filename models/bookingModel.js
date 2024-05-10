import mongoose from "../config/mongoose.config.js";

const bookingSchema = mongoose.Schema({
    name: String,
    place: String,
    price: Number,
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
    ]
});

const booking = mongoose.model("Booking", bookingSchema)

export default booking 