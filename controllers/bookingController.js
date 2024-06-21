import Booking from "../models/bookingModel.js";
import User from "../models/userModel.js";
import Admin from "../models/adminModel.js";
import bookingHandler from "../utils/errorHandler.js";
import moment from "moment";

async function listBooking(req, res) {
  try {
    const userId = req.auth.sub;
    const user = await User.findById(userId);
    const idUser = user ? user.id : null;

    const admin = await Admin.findById(userId);
    const idAdmin = admin ? admin.id : null;

    let bookingList = [];

    if (idUser !== null) {
      bookingList = await Booking.find({ user: idUser, deleteAt: null }).populate("user experiences.experienceId");
    } else if (idAdmin !== null) {
      bookingList = await Booking.find().populate("user experience.experienceId")
    } else {
      return bookingHandler.handleNotFoundError(res, "User or Admin");
    }

    res.json(bookingList);
  } catch (error) {
    bookingHandler.handleServerError(res);
    console.log(error);
  }
}

async function findBooking(req, res) {
  try {
    const userId = req.auth.sub;
    const user = await User.findById(userId);
    const idUser = user ? user.id : null;
    const foundBooking = await Booking.findById(req.params.id);

    if (!foundBooking) {
      handleNotFoundError(res, "Booking");
      return;
    }

    if (idUser !== null) {
      if (idUser === foundBooking.user[0].toString()) {
        res.json(foundBooking);
      } else {
        bookingHandler.handleAuthError(res, "This is not your booking, check again");
      }
    } else {
      bookingHandler.handleNotFoundError(res, "Booking");
    }
  } catch (error) {
    bookingHandler.handleServerError(res);
  }
}

async function createBooking(req, res) {
  try {
    const userId = req.auth.sub;
    if (userId !== null) {
      const expiryDate = moment().add(20, 'days').toDate();
        const newBooking = await Booking.create({
          price: req.body.price,
          user: userId,
          experiences: req.body.experiences,
          bookingDate: req.body.bookingDate,
          name: req.body.name,
          cardNumber: req.body.cardNumber,
          expiryDate: expiryDate,
        });
        res.json(newBooking);
    } else {
      bookingHandler.handleAuthError(res, "Your user is not valid");
    }
  } catch (error) {
    bookingHandler.handleServerError(res);
    console.log(error);
  }
}

async function editBooking(req, res) {
  try {
    const userId = req.auth.sub;
    const user = await User.findById(userId);
    const idUser = user ? user.id : null;
    const admin = await Admin.findById(userId);
    const idAdmin = admin ? admin.id : null;

    if (idUser !== null) {
      const foundBooking = await Booking.findById(req.params.id);

      if (!foundBooking) {
        bookingHandler.handleNotFoundError(res, "Booking");
        return;
      }

      if (foundBooking.user[0].toString() === idUser) {
        foundBooking.price = req.body.price || foundBooking.price;
        foundBooking.bookingDate = req.body.date || foundBooking.bookingDate;

        await foundBooking.save();

        res.json(foundBooking);
      } else {
        bookingHandler.handleAuthError(res, "This is not your booking, check again");
      }
    }
    if (idAdmin !== null) {
      const foundBooking = await User.findById(req, params.id);

      if (!foundBooking) {
        bookingHandler.handleNotFoundError(res, "Booking");
        return;
      }

      foundBooking.name = req.body.name || req.body.name;
      foundBooking.place = req.body.place || req.body.place;
      foundBooking.price = req.body.price || req.body.price;

      await foundBooking.save();

      res.json(foundBooking);
    }
  } catch (error) {
    bookingHandler.handleServerError(res);
  }
}

async function deleteBooking(req, res) {
  try {
    const userId = req.auth.sub;
    const user = await User.findById(userId);
    const idUser = user ? user.id : null;
    const admin = await Admin.findById(userId);
    const idAdmin = admin ? admin.id : null;

    if (idUser !== null) {
      const foundBooking = await Booking.findById(req.params.id);

      if (!foundBooking) {
        bookingHandler.handleNotFoundError(res, "Booking");
        return;
      }

      if (foundBooking.user[0].toString() === idUser) {
        await Booking.findByIdAndUpdate(req.params.id, {deleteAt: Date.now()});
        res.json("The booking was deleted");
      } else {
        bookingHandler.handleAuthError(res, "The booking is not yours, check again");
      }
    }
    if (idAdmin !== null) {
      await Booking.findByIdAndUpdate(req.params.id, {deleteAt: Date.now()});
      res.json("The booking was deleted");
    }
  } catch (error) {
    bookingHandler.handleServerError(res);
  }
}

export default {
  listBooking,
  findBooking,
  createBooking,
  editBooking,
  deleteBooking,
};
