import payMethod from "../models/payMethodModel.js";
import Admin from "../models/adminModel.js";
import User from "../models/userModel.js";

async function listpayMethod(req, res) {

    try {
        const bookingList = await Booking.find();
        res.json(bookingList)
    } catch (error) {
        res.status(500).json("The Server had an error");
    }
}


async function findpayMethod(req, res) {
    try {

        const {id: userId} = await User.findById(req.auth.sub);
        const {id: adminId} = await Admin.findById(req.auth.sub);
        const foundpayMethod = await payMethod.findById(req.params.id);

        if(userId === foundpayMethod.user[0].toString() || adminId === foundpayMethod.user[0].toString()) {
          res.json(foundpayMethod);
        } else {
            res.json("This is not your pay method, check again");
        }
    } catch (error) {
        res.status(500).json(error.message);
        console.log(error)
    }
}


async function createpayMethod(req, res) {
    try {
        const newpayMethod = await payMethod.create({
            name: req.body.name,
        });
        res.json(newpayMethod);
    
    } catch (error) {
        res.status(500).json("The server had an error");
    }
}

async function editpayMethod(req, res) {
    try {
        const foundpayMethod = await payMethod.findById(req.params.id);

        foundpayMethod.name = req.body.name || foundpayMethod.name;

        await foundpayMethod.save();

        res.json(foundpayMethod);
        
    } catch (error) {
        res.status(500).json("The server had an error");
    }
}

async function deletepayMethod(req, res) {
    try {
        const foundpayMethod = await payMethod.findByIdAndDelete(req.params.id);
            res.json("The pay method was deleted");
        
    } catch(error) {
        res.status(500).json("The server had an error");
    }
}

export default {
    listpayMethod,
    findpayMethod,
    createpayMethod,
    editpayMethod,
    deletepayMethod
}