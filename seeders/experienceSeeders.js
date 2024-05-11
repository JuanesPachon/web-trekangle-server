import Experience from "../models/experienceModel.js";
 
export default async function ExperienceSeeders(){
    await Experience.create({
        name: "Hiking",
        place: "Mount Everest",
        price: "1000",
        description: "ad lorem impsum",
    })
    await Experience.create({
        name: "Scuba Diving",
        place: "Great Barrier Reef",
        price: "500",
        description: "ad lorem impsum",
    })
    await Experience.create({
        name: "Safari",
        place: "Maasai Mara",
        price: "2000",
        description: "ad lorem impsum",
    })
    await Experience.create({
        name: "Skydiving",
        place: "Interlaken",
        price: "1500",
        description: "ad lorem impsum",
    })
    await Experience.create({
        name: "Canyoning",
        place: "Queenstown",
        price: "800",
        description: "ad lorem impsum",
    })
};

ExperienceSeeders();