//Crear reservas
//Editar reserva
//Eliminar reservsa
//Mostrar lista de reserva
//Encontrar reserva

import Booking from "../models/bookingModel.js";
import User from "../users/userModel.js";

async function listBooking(req, res) {

    try {

        const {id} = await User.findById(req.auth.sub);

        const bookingList = await Booking.find({user: id}).populate("user").populate("experience");
        res.json(bookingList)
    } catch (error) {
        res.status(500).json("The Server had an error");
    }
}

async function findBooking(req, res) {
    try {

        const {id} = await User.findById(req.auth.sub);
        const foundBooking = await Booking.findByid(req.params.id);

        if(id === foundBooking.user[0].toString()) {
            res.json(foundBooking);
        } else {
            res.json("This es not your booking, chech again");
        }
        
    } catch (error) {
        res.status(500).json(error.message);
        console.log(error)
    }
}

async function createBooking(req, res) {
    try {
        const newBooking = await Booking.create({
            name: req.body.name,
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