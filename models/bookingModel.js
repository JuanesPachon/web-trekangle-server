import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
    nombre: String,
    lugar: String,
    precio: Number,
});

const booking = mongoose.model("Booking", bookingSchema)

export default booking 