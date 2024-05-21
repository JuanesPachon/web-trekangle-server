import { check } from "express-validator";

const ValidateReview = [
    check("comment")
    .notEmpty()
    .isLength({min:5, max:280})
    .withMessage("Descriptions length has to be min 5 and max 280 characters"),
 
    check("price")
    .notEmpty()
    .isNumber()
    .withMessage("it requires a number"),
];

export default ValidateReview;