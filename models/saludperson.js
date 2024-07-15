import mongoose, { Schema, mongo } from "mongoose";

const saludpersonSchema = new Schema(
    {
        ced: String,
        name: String,
        last: String,
        email: String,
        phone: String,
        province: String,
        city: String,
        amount: Number,
        doc: String,
    },
    {
        timestamps: true,
    }
)

const Salud = mongoose.models.Salud || mongoose.model("Salud", saludpersonSchema)

export default Salud