import mongoose from "mongoose";
import validator from "validator";

const userSchema =  new mongoose.Schema({
    content: {
        type: String,
        required: true,
        minLength: [3, "content must contain atleast 3 words!"],
    }
});

export const User = mongoose.model("User", userSchema )