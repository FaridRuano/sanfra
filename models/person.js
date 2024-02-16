import mongoose, { Schema, mongo } from "mongoose";

const personSchema = new Schema(
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

const Person = mongoose.models.Person || mongoose.model("Person", personSchema)

export default Person