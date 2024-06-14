import { check } from "express-validator";

const userValidations = [
  check("userName")
    .notEmpty()
    .withMessage("User Name's required")
    .isLength({ min: 5, max: 10 })
    .withMessage("Name's length has to be min 5 and max 10 characters"),

  check("name")
    .notEmpty()
    .withMessage("Name's required")
    .isLength({ min: 5, max: 10 })
    .withMessage("Name's length is min 5 and max 10")
    .isAlpha()
    .withMessage("You cannot type numbers"),

  check("name")
    .notEmpty()
    .withMessage("Name's required")
    .isLength({ min: 5 })
    .withMessage("Name's length is min 5")
    .isAlpha()
    .withMessage("You cannot type numbers"),

  check("email")
    .notEmpty()
    .withMessage("Email's required")
    .isEmail()
    .withMessage("Type a valid E-mail"),

  check("password")
    .notEmpty()
    .withMessage("Password's required")
    .isLength({ min: 5, max: 10 })
    .withMessage("Password's length has to be min 5 and max 10 characters"),

/*   check("profileImage").custom((value, { req }) => {
    const filetypes = /jpeg|jpg|png|/;
    const mimetype = filetypes.test(req.file.mimetype);
    const extname = filetypes.test(
      req.file.originalname.split(".").pop().toLowerCase()
    );

    if (!mimetype || !extname) {
      throw new Error("The file is not a valid Image");
    }
  }), */
];

export default userValidations;
