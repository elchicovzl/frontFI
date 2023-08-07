import bcrypt from "bcryptjs-react";

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(
    request: Request 
){
    const body = await request.json();
    const {
        email,
        name,
        message
    } = body;

    console.log(email);


    return new NextResponse("Success", { status: 200 });
}