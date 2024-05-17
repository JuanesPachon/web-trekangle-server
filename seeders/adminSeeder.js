import Admin from "../models/adminModel.js";

export default async function adminSeeders() {
  await Admin.create({
    name: "Angler",
    surname: "Prime",
    email: "AnglerPrime@example.com",
    password: "PrimeX123",
  });
}

adminSeeders()