import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import db from "@/libs/db";

export async function POST(request) {
  try {
    const data = await request.json();

    const emailFound = await db.user.findUnique({
      where: {
        email: data.email,
      },
    });

    const usernameFound = await db.user.findUnique({
      where: {
        username: data.username,
      },
    });

    if (emailFound || usernameFound) {
      let message;
      if (emailFound && usernameFound) {
        message = "Email and Username already exist";
      } else if (emailFound) {
        message = "Email already exists";
      } else {
        message = "Username already exists";
      }

      return NextResponse.json(
        {
          message: message,
        },
        {
          status: 400,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = await db.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashedPassword,
      },
    });

    const { password: _, ...user } = newUser;

    return NextResponse.json(user);
  } catch (e) {
    return NextResponse.json(
      {
        message: e.message,
      },
      {
        status: 500,
      }
    );
  }
}
