import Booking from "../models/bookingModel.js";
import User from "../models/userModel.js";
import Admin from "../models/adminModel.js";

async function listBooking(req, res) {
  try {
    const userId = req.auth.sub;
    const { id: idUser } = await User.findById(userId);
    const { id: idAdmin } = await Admin.findById(userId);

    if (idUser !== null) {
      const bookingList = await Booking.find({ user: idUser })
        .populate("user")
        .populate("experience");
      res.json(bookingList);
    }
    if (idAdmin !== null) {
      const bookingList = await Booking.find()
        .populate("user")
        .populate("experience");
      res.json(bookingList);
    }
  } catch (error) {
    res.status(500).json("The Server had an error");
  }
}

async function findBooking(req, res) {
  try {
    const { id } = await User.findById(req.auth.sub);
    const foundBooking = await Booking.findById(req.params.id);

    if (id === foundBooking.user[0].toString()) {
      res.json(foundBooking);
    } else {
      res.json("This is not your booking, check again");
    }
  } catch (error) {
    res.status(500).json(error.message);
    console.log(error);
  }
}

async function createBooking(req, res) {
  try {
    const userId = req.auth.sub;
    const { id: idUser } = await User.findById(userId);

    if (idUser !== null) {
      const newBooking = await Booking.create({
        name: req.body.name,
        place: req.body.place,
        price: req.body.price,
        user: userId,
        experience: req.body.experience,
      });
      res.json(newBooking);
    }
  } catch (error) {
    res.status(500).json("The server had an error");
  }
}

async function editBooking(req, res) {
  try {
    const userId = req.auth.sub;
    const { id: idUser } = await User.findById(userId);
    const { id: idAdmin } = await Admin.findById(userId);

    if (idUser !== null) {
      const foundBooking = await User.findById(req, params.id);

      if (foundBooking.user[0].toString() === idUser) {
        foundBooking.name = req.body.name || req.body.name;
        foundBooking.place = req.body.place || req.body.place;
        foundBooking.price = req.body.price || req.body.price;

        await foundBooking.save();

        res.json(foundBooking);
      }
    }
    if (idAdmin !== null) {
      const foundBooking = await User.findById(req, params.id);

      foundBooking.name = req.body.name || req.body.name;
      foundBooking.place = req.body.place || req.body.place;
      foundBooking.price = req.body.price || req.body.price;

      await foundBooking.save();

      res.json(foundBooking);
    }
  } catch (error) {
    res.status(500).json("The server had an error");
  }
}

async function deleteBooking(req, res) {
  try {
    const userId = req.auth.sub;
    const { id: idUser } = await User.findById(userId);
    const { id: idAdmin } = await Admin.findById(userId);

    if (idUser !== null) {
      const FoundBooking = await Booking.findById(req.params.id);
      if (FoundBookingBooking.user[0].toString() === idUser) {
        const deleteBooking = await Booking.findByIdAndDelete(req.params.id);
        res.json("The booking was deleted");
      }
    }
    if (idAdmin !== null) {
      const deleteBooking = await Booking.findByIdAndDelete(req.params.id);
      res.json("The booking was deleted");
    }
  } catch (error) {
    res.status(500).json("The server had an error");
  }
}

export default {
  listBooking,
  findBooking,
  createBooking,
  editBooking,
  deleteBooking,
};
