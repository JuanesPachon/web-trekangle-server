//Crear reservas
//Editar reserva
//Eliminar reservsa
//Mostrar lista de reserva
//Encontrar reserva

import Booking from "../models/bookingModel.js";

async function listBooking(req, res) {

    try {
        const bookingList = await Booking.find().populate("user").populate("experience");
        res.json(bookingList)
    } catch (error) {
        res.status(500).json("The Server had an error");
    }
}

async function findBooking(req, res) {
    try {
        const bookingId = req.params.id;
        const foundUser = await Booking.findByid(bookingId)
        res.json(userList);
    } catch (error) {
        res.status(500).json("The servser had an error");
    }
}

async function createBooking(req, res) {
    try {
        const newBooking = await Booking.create({
            name: req.body.name,
            place: req.body.place,
            price: req.body.price,
        });
        res.json(newBooking);
    } catch (error) {
        res.status(500).json("The server had an error");
    }
}

async function editBooking(req, res) {
    try {
        const foundBooking = await User.findByid(req.params.id);

        foundBooking.name = req.body.name || req.body.name;
        foundBooking.place = req.body.place || req.body.place;
        foundBooking.price = req.body.price || req.body.price;

        await foundBooking.save();

        res.json(foundBooking);
    } catch (error) {
        res.status(500).json("The server had an error");
    }
} 

async function deleteBooking(req, res) {
    try {
        const foundBooking = await Booking.findByIdAndDelete(req.params.id);
        res.json("The server was deleted");
    } catch(error) {
        res.status(500).json("The server had an error");
    }
}

export default {
    listBooking,
    findBooking,
    createBooking,
    editBooking,
    deleteBooking,
}