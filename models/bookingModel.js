import mongoose from "../config/mongoose.config.js";


const bookingSchema = mongoose.Schema({
    price: {type: Number},
    user: [
        {
            type: mongoose.Types.ObjectId,
            ref: "User",
        }
    ],
    experiences:  [
        {
            experienceId: {
                type: mongoose.Types.ObjectId,
                ref: "Experience",
            },
            quantity: Number,
        }
    ],
    name: {type: String},
    cardNumber: {type: Number},

    bookingDate: { type: Date},
});

const booking = mongoose.model("Booking", bookingSchema)

export default booking 