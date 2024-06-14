"use server";

import mongoose from "mongoose";

import { Page } from "@/models/page";

export default async function usernameFormAction(formData) {
  const username = formData.get("username");
  await mongoose.connect(process.env.MONGODB_URI);

  const existingUser = await Page.findOne({ uri: username });

  if (existingUser) {
    return false;
  } else {
    const data = await Page.create({ uri: username });
    const newUser = JSON.parse(JSON.stringify(data));
    return newUser;
  }
}
