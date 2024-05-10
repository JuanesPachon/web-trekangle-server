import Booking from "../models/bookingModel.js";
import userSeeders from "./userSeeders.js";
import experienceSeeders from "./experienceSeeders.js";
async function bookingSeeders() {
    await Booking.create({
        
            name: "Dune",
            place: "Frank Herbert",
            price: "10",
            user: "663d85e1d4bf217fd8a3b01f",
            experience: "663d85e1d4bf217fd8a3b020"
          });

          await Booking.create({
          
            name: "Foundation",
            place: "Isaac Asimov",
            price: "12",
            user: "663d85e1d4bf217fd8a3b028",
            experience: "663d85e1d4bf217fd8a3b02e"
          });

          await Booking.create({
          
            name: "1984",
            place: "George Orwell",
            price: "8",
            user: "663d85e1d4bf217fd8a3b02c",
            experience: "663d85e1d4bf217fd8a3b032"
          });

          await Booking.create({
          
            name: "Brave New World",
            place: "Aldous Huxley",
            price:"9",
            user: "663d85e1d4bf217fd8a3b030",
            experience: "663d85e1d4bf217fd8a3b036"
          });

          await Booking.create({
          
            name: "The Hitchhiker's Guide to the Galaxy",
            place: "Douglas Adams",
            price: "7",
            user: "663d85e1d4bf217fd8a3b034",
            experience: "663d85e1d4bf217fd8a3b038"
          });
        
    }

    bookingSeeders()


