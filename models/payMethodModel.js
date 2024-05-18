import mongoose from "../config/mongoose.config.js";

const payMethodSchema = mongoose.Schema({
    name: {type: String, required: true},

});

const payMethod = mongoose.model("PayMethod", payMethodSchema);

export default payMethod;