import bcrypt  from 'bcryptjs';
import prisma from "@/config/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  if (!email || !password) {
    return new Response("Missing email or password", { status: 400 });
  }

  const userExist = await prisma.user.findUnique({ where: { email } });

  if (userExist) {
    return new Response("User already exists", {
      status: 404,
    });
  }

  try {
    // const user = await prisma.user.create({
    //   data: {
    //     name,
    //     email,
    //     password: bcrypt.hashSync(password as string, 10),
    //   },
    // });
    return NextResponse.json('Registration not possible', { status: 201 });
  } catch (error: any) {
    return new Response(error.message, { status: 400 });
  }
}
