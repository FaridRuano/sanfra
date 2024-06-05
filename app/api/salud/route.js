import connectMongoDB from "@libs/mongodb"
import Salud from "@models/saludperson"
import { NextRequest, NextResponse } from "next/server"

export async function POST (request) {
    const { ced, name, last, email, phone, province, city, amount } = await request.json()
    await connectMongoDB()

    await Salud.create({ ced, name, last, email, phone, province, city, amount  })
    return NextResponse.json({message: "Data created"}, {status: 200})
}

export async function GET () {
    await connectMongoDB()
    const persons = await Salud.find()
    return NextResponse.json({persons})
}
