import Experience from "../models/experienceModel.js";
 
async function ExperienceSeeders(){
    await Experience.create({
        name: "Hiking",
        place: "Mount Everest",
        price: "1000"
    })
    await Experience.create({
        name: "Scuba Diving",
        place: "Great Barrier Reef",
        price: "500"
    })
    await Experience.create({
        name: "Safari",
        place: "Maasai Mara",
        price: "2000"
    })
    await Experience.create({
        name: "Skydiving",
        place: "Interlaken",
        price: "1500"
    })
    await Experience.create({
        name: "Canyoning",
        place: "Queenstown",
        price: "800"
    })
};