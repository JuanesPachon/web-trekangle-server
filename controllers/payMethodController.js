import payMethod from "../models/payMethodModel.js";
import Admin from "../models/adminModel.js";
import User from "../models/userModel.js";

async function listpayMethod(req, res) {

    try {
        const payMethodList = await payMethod.find();
        res.json(payMethodList)
    } catch (error) {
        res.status(500).json("The Server had an error");
    }
}


async function findpayMethod(req, res) {
    try {
        const foundpayMethod = await payMethod.findById(req.params.id);
        res.json(foundpayMethod);

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