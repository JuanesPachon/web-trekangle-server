import mongoose from "../config/mongoose.config.js";
import payMethod from "./payMethodModel.js";


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
    ],
    payMethod: [
        {
            type: mongoose.Types.ObjectId,
            ref: "PayMethod",
        }
    ]
});

const booking = mongoose.model("Booking", bookingSchema)

export default booking 