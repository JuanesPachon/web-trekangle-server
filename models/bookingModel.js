import mongoose from "../config/mongoose.config.js";
import payMethod from "./payMethodModel.js";


const bookingSchema = mongoose.Schema({
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
    ],
    payMethod: [
        {
            type: mongoose.Types.ObjectId,
            ref: "PayMethod",
        }
    ],

    bookingDate: { type: Date},
});

const booking = mongoose.model("Booking", bookingSchema)

export default booking 