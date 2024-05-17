import payMethod from "../models/payMethodModel.js";

export default async function payMethodSeeders() {
    await payMethod.create({
        name: "Visa",
    });
}

export default async function payMethodSeeders() {
    await payMethod.create({
        name: "MasterCard",
    });
}

export default async function payMethodSeeders() {
    await payMethod.create({
        name: "PayPal",
    });
}

export default async function payMethodSeeders() {
    await payMethod.create({
        name: "Bitcoin",
    });
}

export default async function payMethodSeeders() {
    await payMethod.create({
        name: "PSE",
    });
}

payMethodSeeders()