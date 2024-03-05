import connectMongoDB from "@libs/mongodb"
import Tec from "@models/tecperson"
import { NextRequest, NextResponse } from "next/server"

export async function POST (request) {
    const { ced, name, last, email, phone, province, city } = await request.json()
    await connectMongoDB()

    await Tec.create({ ced, name, last, email, phone, province, city  })
    return NextResponse.json({message: "Data created"}, {status: 200})
}

export async function GET () {
    await connectMongoDB()
    const tecpersons = await Tec.find()
    return NextResponse.json({tecpersons})
}
