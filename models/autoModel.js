import mongoose, { Schema, mongo } from "mongoose";

const autoSchema = new Schema(
    {
        ced: String,
        name: String,
        last: String,
        email: String,
        phone: String,
        province: String,
        city: String
    },
    {
        timestamps: true,
    }
)

const Auto = mongoose.models.Auto || mongoose.model("Auto", autoSchema)

export default Auto