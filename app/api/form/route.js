import connectMongoDB from "@libs/mongodb"
import Form from "@models/formperson"
import { NextRequest, NextResponse } from "next/server"

export async function POST (request) {
    const { name, dni, email, phone } = await request.json()
    await connectMongoDB()

    await Form.create({ name, dni, email, phone  })
    return NextResponse.json({message: "Data created"}, {status: 200})
}

export async function GET () {
    await connectMongoDB()
    const persons = await Form.find()
    return NextResponse.json({persons})
}
