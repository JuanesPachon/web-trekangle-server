import payMethodHandler from "../utils/errorHandler.js";
import PayMethod from "../models/payMethodModel.js";

async function listpayMethod(req, res) {
  try {
    const payMethodList = await PayMethod.find();
    res.json(payMethodList);
  } catch (error) {
    payMethodHandler.handleServerError(res);
  }
}

async function findpayMethod(req, res) {
  try {
    const foundpayMethod = await PayMethod.findById(req.params.id);
    if (!foundpayMethod) {
      payMethodHandler.handleNotFoundError(res, "Pay Method");
      return;
    }
    res.json(foundpayMethod);
  } catch (error) {
    payMethodHandler.handleServerError(res);
  }
}

async function createpayMethod(req, res) {
  try {
    const newpayMethod = await PayMethod.create({
      name: req.body.name,
    });
    res.json(newpayMethod);
  } catch (error) {
    payMethodHandler.handleServerError(res);
  }
}

async function editpayMethod(req, res) {
  try {
    const foundpayMethod = await PayMethod.findById(req.params.id);
    if (!foundpayMethod) {
      payMethodHandler.handleNotFoundError(res, "Pay Method");
      return;
    }

    foundpayMethod.name = req.body.name || foundpayMethod.name;

    await foundpayMethod.save();

    res.json(foundpayMethod);
  } catch (error) {
    payMethodHandler.handleServerError(res);
  }
}

async function deletepayMethod(req, res) {
  try {
    const foundpayMethod = await PayMethod.findByIdAndDelete(req.params.id);
    if (!foundpayMethod) {
      payMethodHandler.handleNotFoundError(res, "Pay Method");
      return;
    }
    res.json("The pay method was deleted");
  } catch (error) {
    payMethodHandler.handleServerError(res);
  }
}

export default {
  listpayMethod,
  findpayMethod,
  createpayMethod,
  editpayMethod,
  deletepayMethod,
};
