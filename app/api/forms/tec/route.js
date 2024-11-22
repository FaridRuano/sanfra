import connectMongoDB from "@libs/mongodb";
import Tec from "@models/tecModel";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        await connectMongoDB();

        const data = await Tec.find(); // Use 'const' to declare 'data'

        return NextResponse.json({ data });
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }
}

export async function POST(request) {
    const { ced, name, last, email, phone, province, city } = await request.json()

    await connectMongoDB()

    const existingUser = await Tec.findOne({ email })

    if (existingUser) {
        return NextResponse.json(
            { 
                message: 'Email already exists',
                error: true
            },
            { status: 200 },
        )
    }

    const newUser = await Tec.create({ ced, name, last, email, phone, province, city })

    return NextResponse.json({ data: "Data created"}, { status: 200 })
}
