import { check } from "express-validator";
import Admin from "../models/adminModel.js";

const adminValidations = [
  check("adminName")
    .notEmpty()
    .withMessage("AdminName's required")
    .isLength({ min: 5, max: 20 })
    .withMessage("Name's length has to be min 5 and max 20 characters")
    .custom(async (value) => {
      const existingUser = await Admin.findOne({ adminName: value });
      if (existingUser) {
        throw new Error("AdminName is already in use");
      }
    }),

  check("name")
    .notEmpty()
    .withMessage("Name's required")
    .isLength({ min: 5 })
    .withMessage("Name's length is min 5characters"),

  check("name")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("Name must be only letters"),

  check("email")
    .notEmpty()
    .withMessage("Email's required")
    .isEmail()
    .withMessage("Type a valid E-mail"),

  check("password")
    .notEmpty()
    .withMessage("Password's required")
    .isLength({ min: 5 })
    .withMessage("Password's length has to be min 5 characters")
    .matches(/\d/)
    .withMessage("Password must contain at least one number")
    .matches(/[a-z]/)
    .withMessage("Password must contain at least one lowercase letter")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter")
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage("Password must contain at least one special character"),

  /*     check("profileImage").custom((value, {req}) => {
        const filetypes = /jpeg|jpg|png|/;
        const mimetype = filetypes.test(req.file.mimetype);
        const extname = filetypes.test(
            req.file.originalname.split('.').pop().toLowerCase()
        );

        if (!mimetype || !extname)  {
            throw new Error("The file is not a valid image");
        }
    }), */

  /*     check("bookingDate").isISO8601().withMessage('Type a valid date format')
    .custom((value) => {
        const today = new Date();
        const inputDate = newDate(value);
        if (inputDate < today) {
            throw new Error('The date cannot be created in the past');
        }
    }) */
];

export default adminValidations;
