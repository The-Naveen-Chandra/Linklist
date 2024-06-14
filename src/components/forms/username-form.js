"use client";

import Image from "next/image";
import { useState } from "react";
import { redirect } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import RightIcon from "@/components/icons/right-icon";
import usernameFormAction from "@/actions/username-form-action";

export default function UsernameForm({ desiredUsername }) {
  const [taken, setTaken] = useState(false);

  async function handleAction(formData) {
    const result = await usernameFormAction(formData);

    setTaken(result === false);

    if (result) {
      redirect(`/account/${formData.get("username")}`);
    }
  }

  return (
    <div className="px-10 py-8 max-w-2xl mx-auto border rounded-lg mt-6 bg-white dark:bg-gray-950">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-14">
        <Image
          src={"/username-img.svg"}
          alt="Username Image"
          width={200}
          height={200}
        />

        <form action={handleAction}>
          <h1 className="text-2xl font-bold text-center mb-6">
            Grab your username
          </h1>
          <p className="text-center mb-6 text-gray-500">
            Choose a username to claim it as your own
          </p>
          <div className="max-w-xs mx-auto">
            <input
              name="username"
              type="text"
              placeholder="Username"
              defaultValue={desiredUsername}
              className={cn(
                "block p-2 mx-auto border w-full rounded-md mb-2 text-center",
                taken && "border-red-500"
              )}
            />

            {taken && (
              <div className="text-red-500 mb-2 text-sm text-center rounded-sm">
                A user with that username already exists.
              </div>
            )}

            <Button
              type="submit"
              className="py-2 px-4 mx-auto w-full rounded-md flex gap-2 items-center justify-center"
            >
              <span>Claim username</span>
              <RightIcon />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
