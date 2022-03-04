'use strict';
import jwt from "jsonwebtoken"

if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config()
}

const signOptions = {
    expiresIn: "12h",
    algorithm: "RS256"
};

export function generate(payload) {
    return jwt.sign(payload, process.env.PRIVATE_KEY, signOptions);
}

export const verifyToken = (token) => {
    return jwt.verify(token, process.env.PUBLIC_KEY, signOptions);
}