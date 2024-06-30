import experienceHandler from "../utils/errorHandler.js";
import Experience from "../models/experienceModel.js";

async function listExperience(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = req.query.limit ? parseInt(req.query.limit) : null;
    const skip = (page - 1) * limit;

    const totalExperiences = await Experience.countDocuments();
    const totalPages = Math.ceil(totalExperiences / limit);

    const userExperience = await Experience.find ({deleteAt: null}).skip(skip).limit(limit);

    res.json({
      currentPage: page,
      totalPages: totalPages,
      totalExperiences: totalExperiences,
      experiences: userExperience,
    });
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
      images: req.files.supabaseUrl,
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
    foundexperience.images = req.files.supabaseUrl ?? foundexperience.images;

    await foundexperience.save();
    res.json(foundexperience);
  } catch (error) {
    experienceHandler.handleServerError(res);
    console.log(error);
  }
}

async function deleteExperience(req, res) {
  try {
    const foundexperience = await Experience.findByIdAndUpdate(req.params.id, {deleteAt: Date.now()});
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
