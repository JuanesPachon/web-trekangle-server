import Review from "../models/reviewModel.js"

export default async function ReviewSeeders(){
    await Review.create({
        user: "663ec8babc208b03c8faedaa",
        experience: "663ec8babc208b03c8faedb8",
        Comment: "mee",
        score: "3",
    })
    await Review.create({
        user: "663ec8babc208b03c8faedbf",
        experience: "663ec8ce27a32a124b37d9d6",
        Comment: "good",
        score: "5",
    })
    await Review.create({
        user: "663ec8e4adbf33bf6f63fb49",
        experience: "663ec8babc208b03c8faedbd",
        Comment: "bad",
        score: "2",
    })
    await Review.create({
        user: "663ec8babc208b03c8faedc7",
        experience: "663ec8ce27a32a124b37d9d6",
        Comment: "idk",
        score: "4",
    })
    await Review.create({
        user: "663ec8babc208b03c8faedc9",
        experience: "663ec8ce27a32a124b37d9d8",
        Comment: "too bad",
        score: "1",
    })
};

ReviewSeeders();