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

    if (!email || typeof email !== 'string') {
        throw new Error('Correo Invalido');
    }

    const contact = await prisma.contact.create({
        data: {
            email,
            name,
            message
        }
    });

    return new NextResponse("Success", { status: 200 });
}