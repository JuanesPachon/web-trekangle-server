import mongoose from "../config/mongoose.config.js";

const bookingSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
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