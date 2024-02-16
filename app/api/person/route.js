import connectMongoDB from "@libs/mongodb"
import Person from "@models/person"
import { NextRequest, NextResponse } from "next/server"

export async function POST (request) {
    const { ced, name, last, email, phone, province, city } = await request.json()
    await connectMongoDB()

    await Person.create({ ced, name, last, email, phone, province, city  })
    return NextResponse.json({message: "Person created"}, {status: 200})
}

export async function GET () {
    await connectMongoDB()
    const persons = await Person.find()
    return NextResponse.json({persons})
}
