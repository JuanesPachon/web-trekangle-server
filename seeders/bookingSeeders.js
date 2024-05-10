import Booking from "../models/bookingModel";
import userSeeders from "./userSeeders.js";
import ExperienceSeeders from "./ExperienceSeeders.js";
async function bookingSeeders() {
    await Booking.create({
        
            name: "Dune",
            place: "Frank Herbert",
            price: "10"
          });

          await Booking.create({
          
            name: "Foundation",
            place: "Isaac Asimov",
            price: "12"
          });

          await Booking.create({
          
            name: "1984",
            place: "George Orwell",
            price: "8"
          });

          await Booking.create({
          
            name: "Brave New World",
            place: "Aldous Huxley",
            price:"9"
          });

          await Booking.create({
          
            name: "The Hitchhiker's Guide to the Galaxy",
            place: "Douglas Adams",
            price: "7"
          });
        
    }

    bookingSeeders()


