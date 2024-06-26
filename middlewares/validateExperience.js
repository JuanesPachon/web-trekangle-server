import { check } from "express-validator";

export const ValidateExperience = [
  check("name").notEmpty().withMessage("requieres a name"),

  check("place").notEmpty().withMessage("it doesn't require numbers"),

  check("price").notEmpty().isNumeric().withMessage("it requires a number"),

  check("images").custom((value, { req }) => {
    const filetypes = /jpeg|jpg|png|webp/;
    let isValid = true;
  
    if (!req.files) {
      throw new Error("No files uploaded");
    }
  
    req.files.forEach(file => {
      const mimetype = filetypes.test(file.mimetype);
      if (!mimetype) {
        isValid = false;
      }
    });
  
    if (!isValid) {
      throw new Error("One or more files are not valid images");
    }
  
    return true;
  }),
];

export const ValidateEditExperience = [
  check("name").optional().notEmpty().withMessage("requieres a name"),

  check("place")
    .optional()
    .notEmpty()
    .withMessage("it doesn't require numbers"),

  check("price")
    .optional()
    .notEmpty()
    .isNumeric()
    .withMessage("it requires a number"),

  check("description")
    .optional()
    .notEmpty()
    .isLength({ min: 5 })
    .withMessage("Description's length has to be min 5 characters"),

  check("images").optional().custom((value, { req }) => {
    const filetypes = /jpeg|jpg|png|webp/;
    let isValid = true;

    if (!req.files) {
      throw new Error("No files uploaded");
    }

    req.files.forEach((file) => {
      const mimetype = filetypes.test(file.mimetype);
      if (!mimetype) {
        isValid = false;
      }
    });

    if (!isValid) {
      throw new Error("One or more files are not valid images");
    }

    return true;
  }),
];
