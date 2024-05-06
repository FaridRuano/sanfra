import connectMongoDB from "@libs/mongodb"
import Auto from "@models/autoperson"
import { NextRequest, NextResponse } from "next/server"

export async function POST (request) {
    const { ced, name, last, email, phone, province, city } = await request.json()
    await connectMongoDB()

    await Auto.create({ ced, name, last, email, phone, province, city  })
    return NextResponse.json({message: "Data created"}, {status: 200})
}

export async function GET () {
    await connectMongoDB()
    const persons = await Auto.find()
    return NextResponse.json({persons})
}
