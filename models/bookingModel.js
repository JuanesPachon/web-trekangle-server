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
    bookingDate: {type: Date},
    expiryDate: { type: Date},
    deleteAt: {
        type: Date,
        default: null,
    },
});

const booking = mongoose.model("Booking", bookingSchema)

booking.collection.createIndex({ expiryDate: 1 }, { expireAfterSeconds: 0 });

export default booking 