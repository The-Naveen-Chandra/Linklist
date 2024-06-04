"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

const LoginWithGoogleButton = () => {
  return (
    <button
      className="bg-white shadow text-center w-full py-4 rounded-lg flex items-center justify-center gap-2 border"
      onClick={() => signIn("google")}
    >
      <Image src="/google-logo.svg" alt="Google Logo" width={22} height={22} />
      Sign In with Google
    </button>
  );
};

export default LoginWithGoogleButton;
