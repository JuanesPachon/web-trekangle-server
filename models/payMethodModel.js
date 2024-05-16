import mongoose from "../config/mongoose.config.js";

const Schema = mongoose.Schema({
    name: {type: String, required: True},

});

const payMethod = mongoose.model("PayMethod", userSchema);

export default payMethod;