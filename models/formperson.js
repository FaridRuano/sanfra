import mongoose, { Schema, mongo } from "mongoose";

const formSchema = new Schema(
    {
        name: String,
        dni: String,
        email: String,
        phone: String,
    },
    {
        timestamps: true,
    }
)

const Form = mongoose.models.Form || mongoose.model("Form", formSchema)

export default Form