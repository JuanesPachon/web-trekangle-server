import mongoose from "../config/mongoose.config.js";

const bookingSchema = mongoose.Schema({
    name: {type: String},
    place: {type: String},
    price: {type: Number},
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