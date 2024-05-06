import connectMongoDB from "@libs/mongodb"
import Padel from "@models/padelperson"
import { NextRequest, NextResponse } from "next/server"

export async function POST (request) {
    const { ced, name, last, email, phone, province, city } = await request.json()
    await connectMongoDB()

    await Padel.create({ ced, name, last, email, phone, province, city  })
    return NextResponse.json({message: "Data created"}, {status: 200})
}

export async function GET () {
    await connectMongoDB()
    const persons = await Padel.find()
    return NextResponse.json({persons})
}
