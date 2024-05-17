import Review from "../models/reviewModel.js";
import User from "../models/userModel.js";
import Admin from "../models/adminModel.js";

async function listReview(req, res) {
  try {
    const reviewList = await Review.find()
      .populate("user")
      .populate("experience");
    res.json(reviewList);
  } catch (error) {
    res.status(500).json("The server had an error");
  }
}

async function createReview(req, res) {
  try {
    const newReview = await Review.create({
      user: req.body.user,
      experience: req.body.experience,
      comment: req.body.comment,
      score: req.body.score,
    });
    res.json(newReview);
  } catch (error) {
    res.status(500).json("the server had an error");
  }
}

async function findReview(req, res) {
  try {
    const foundReview = await Review.findById(req.params.id);
    res.json(foundReview);
  } catch (error) {
    res.status(500).json(error.message);
    console.log(error);
  }
}

async function editReview(req, res) {
  try {
    const userId = req.auth.sub;
    const user = await User.findById(userId);
    const idUser = user ? user.id : null;
    const admin = await Admin.findById(userId);
    const idAdmin = admin ? admin.id : null;
    const foundReview = await Review.findById(req.params.id);

    if (idUser !== null) {
      if (userId === foundReview.user[0].toString()) {
        foundReview.user = req.body.user ?? foundReview.user;
        foundReview.experience = req.body.experience ?? foundReview.experience;
        foundReview.comment = req.body.comment ?? foundReview.comment;
        foundReview.score = req.body.score ?? foundReview.score;

        await foundReview.save();

        res.json(foundReview);
      } else {
        res.json("this is not your review, check again");
      }
    }
    if (idAdmin !== null) {
      foundReview.user = req.body.user ?? foundReview.user;
      foundReview.experience = req.body.experience ?? foundReview.experience;
      foundReview.comment = req.body.comment ?? foundReview.comment;
      foundReview.score = req.body.score ?? foundReview.score;

      await foundReview.save();

      res.json(foundReview);
    }
  } catch (error) {
    res.status(500).json("The server had an error");
  }
}

async function deleteReview(req, res) {
  try {
    const userId = req.auth.sub;
    const user = await User.findById(userId);
    const idUser = user ? user.id : null;
    const admin = await Admin.findById(userId);
    const idAdmin = admin ? admin.id : null;
    const foundReview = await Review.findById(req.params.id);
    if (idUser !== null) {
      if (userId === foundReview.user[0].toString()) {
        const deleteReview = await Review.findByIdAndDelete(req.params.id);
        res.json("The review was deleted");
      } else {
        res.json("you cannot delete this review, check again");
      }
    }
    if (idAdmin !== null) {
      const deleteReview = await Review.findByIdAndDelete(req.params.id);
      res.json("The review was deleted");
    }
  } catch (error) {
    res.status(500).json("The server had an error");
  }
}

export default {
  listReview,
  createReview,
  findReview,
  editReview,
  deleteReview,
};
