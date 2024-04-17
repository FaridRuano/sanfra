import mongoose, { Schema, mongo } from "mongoose";

const padelpersonSchema = new Schema(
    {
        ced: String,
        name: String,
        last: String,
        email: String,
        phone: String,
        province: String,
        city: String,
    },
    {
        timestamps: true,
    }
)

const Padel = mongoose.models.Padel || mongoose.model("Padel", padelpersonSchema)

export default Padel