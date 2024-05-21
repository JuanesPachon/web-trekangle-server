import { check } from "express-validator";

const ValidateExperience = [
    check("name")
    .notEmpty()
    .withMessage("requieres a name"),

    check("place")
    .notEmpty()
    .isAlpha()
    .withMessage("it doesn't require numbers"),

    check("price")
    .notEmpty()
    .isNumber()
    .withMessage("it requires a number"),

    check("description")
    .notEmpty()
    .isLength({min:5, max:280})
    .withMessage("Description's length has to be min 5 and max 280 characters"),

    check ("Images").custom((value, {req}) =>{
        const fyletipes = /jpeg|jpg|png|/;
        const mimetype = fyletipes.test(req.file.mimetype);
        const extname = fyletipes.test(
            req.file.originalmete.split(".").pop().toLoweCase()
        );

    if (!mimetype || !extname){
            throw new Error ("the file is not a valid Image");
    }
}),
];

export default ValidateExperience;


