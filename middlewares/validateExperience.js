import { check } from "express-validator";

const ValidateExperience = [
    check("name")
    .notEmpty()
    .withMessage("requieres a name"),

    check("place")
    .notEmpty()
    .withMessage("it doesn't require numbers"),

    check("price")
    .notEmpty()
    .isNumeric()
    .withMessage("it requires a number"),

    check("description")
    .notEmpty()
    .isLength({min:5})
    .withMessage("Description's length has to be min 5 characters"),

/*     check ("Images").custom((value, {req}) =>{
        const fyletipes = /jpeg|jpg|png|webp| /;
        const mimetype = fyletipes.test(req.files.mimetype);

    if (!mimetype){
        throw new Error ("the file is not a valid Image");
    }
    }) */
];

export default ValidateExperience;


