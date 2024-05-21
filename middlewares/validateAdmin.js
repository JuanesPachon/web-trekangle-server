import { check } from "express-validator"

const adminValidations = [
    check("adminName").notEmpty().withMessage("Name's required")
    .isLength({min: 5, max: 10}).withMessage("Name's length is in min 5 and max 10"),

    check("Name").notEmpty().withMessage("Name's required")
    .isLength({min: 5, max: 10}).withMessage("Name's length is in min 5 and max 10")
    .isAlpha().withMessage("You cannot type numbers"),

    check("Name").notEmpty().withMessage("Name's required")
    .isLength({min: 5, max: 10}).withMessage("Name's length is in min 5 and max 10")
    .isAlpha().withMessage("You cannot type numbers"),

    check("email").notEmpty().withMessage("Email's required")
    .isEmail().withMessage("Type a valid E-mail"),

    check("password").notEmpty().withMessage("Password's required")
    .isLength({min: 5, max: 10}).withMessage("NPassword's length has to be min 5 and max 10"),

    check("profileImage").custom((value, {req}) => {
        const filetypes = /jpeg|jpg|png|/;
        const mimetype = filetypes.test(req.file.mimetype);
        const extname = filetypes.test(
            req.file.originalname.split('.').pop().toLowerCase()
        );

        if (!mimetype || !extname)  {
            throw new Error("The file is not a valid image");
        }
    }),

    check("bookingDate").isISO8601().withMessage('Type a valid date format')
    .custom((value) => {
        const today = new Date();
        const inputDate = newDate(value);
        if (inputDate < today) {
            throw new Error('The date cannot be created in the past');
        }
    })
];

export default adminValidations;