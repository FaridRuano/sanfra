import mongoose, { Schema, mongo } from "mongoose";

const tecpersonSchema = new Schema(
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

const Tec = mongoose.models.Tec || mongoose.model("Tec", tecpersonSchema)

export default Tec