import payMethod from "../models/payMethodModel.js";

export default async function payMethodSeeders() {
    await payMethod.create({
        name: "Visa",
    });

    await payMethod.create({
        name: "MasterCard",
    });

    await payMethod.create({
        name: "PayPal",
    });

    await payMethod.create({
        name: "Bitcoin",
    });

    await payMethod.create({
        name: "PSE",
    });
}

payMethodSeeders()