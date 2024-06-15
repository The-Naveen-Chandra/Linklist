"use server";

import mongoose from "mongoose";
import { getServerSession } from "next-auth";

import { Page } from "@/models/page";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function usernameFormAction(formData) {
  const username = formData.get("username");
  await mongoose.connect(process.env.MONGODB_URI);

  const existingUser = await Page.findOne({ uri: username });

  if (existingUser) {
    return false;
  } else {
    const session = await getServerSession(authOptions);

    const data = await Page.create({
      uri: username,
      owner: session?.user?.email,
    });

    const newUser = JSON.parse(JSON.stringify(data));
    return newUser;
  }
}
