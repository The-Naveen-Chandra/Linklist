"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const LoginWithGoogleButton = () => {
  return (
    <Button
      className="text-center w-full p-6 flex items-center justify-center gap-2"
      onClick={() => signIn("google")}
    >
      <Image
        className="hidden dark:block"
        src={"/google-logo-light.svg"}
        alt="Google Logo Light"
        width={22}
        height={22}
      />
      <Image
        className="block dark:hidden"
        src={"/google-logo-dark.svg"}
        alt="Google Logo Dark"
        width={22}
        height={22}
      />
      Sign In with Google
    </Button>
  );
};

export default LoginWithGoogleButton;
