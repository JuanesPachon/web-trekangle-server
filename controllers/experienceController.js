import experienceHandler from "../utils/errorHandler.js";
import Experience from "../models/experienceModel.js";

async function listExperience(req, res) {
  try {
    const userexperience = await Experience.find();
    res.json(userexperience);
  } catch (error) {
    experienceHandler.handleServerError(res);
  }
}

async function findExperience(req, res) {
  try {
    const experienceid = req.params.id;
    const foundexperience = await Experience.findById(experienceid);
    if (!foundexperience) {
      experienceHandler.handleNotFoundError(res, "Experience");
      return;
    }
    res.json(foundexperience);
  } catch (error) {
    experienceHandler.handleServerError(res);
  }
}

async function createExperience(req, res) {
  try {
    const newExperience = await Experience.create({
      name: req.body.name,
      place: req.body.place,
      price: req.body.price,
      description: req.body.description,
      images: req.file.filename,
    });
    res.json(newExperience);
  } catch (error) {
    experienceHandler.handleServerError(res);
  }
}

async function editExperience(req, res) {
  try {
    const foundexperience = await Experience.findById(req.params.id);

    if (!foundexperience) {
      experienceHandler.handleNotFoundError(res, "Experience");
      return;
    }

    foundexperience.name = req.body.name ?? foundexperience.name;
    foundexperience.place = req.body.place ?? foundexperience.place;
    foundexperience.price = req.body.price ?? foundexperience.price;
    foundexperience.images = req.files.filename ?? foundexperience.images;

    await foundexperience.save();
    res.json(foundexperience);
  } catch (error) {
    experienceHandler.handleNotFoundError(res, "Experience");
    ServerError(res);
  }
}

async function deleteExperience(req, res) {
  try {
    const foundexperience = await Experience.findByIdAndDelete(req.params.id);
    if (!foundexperience) {
      experienceHandler.handleNotFoundError(res, "Experience");
      return;
    }
    res.json("The experience was deleted");
  } catch (error) {
    experienceHandler.handleServerError(res);
  }
}

export default {
  listExperience,
  findExperience,
  createExperience,
  editExperience,
  deleteExperience,
};
