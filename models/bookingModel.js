import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
    name: String,
    place: String,
    price: Number,
    userId: [
        {
            type: mongoose.Types.ObjectId,
            ref: "User",
        }
    ],
    experience:  [
        {
            type: mongoose.Types.ObjectId,
            ref: "experience",
        }
    ]
});

const booking = mongoose.model("Booking", bookingSchema)

export default booking 