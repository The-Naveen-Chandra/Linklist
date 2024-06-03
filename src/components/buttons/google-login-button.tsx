"use client";

import Image from "next/image";

type Props = {};

const LoginWithGoogleButton = (props: Props) => {
  return (
    <button
      className="bg-white shadow text-center w-full py-4 rounded-lg flex items-center justify-center gap-2 border"
      onClick={() => {}}
    >
      <Image src="/google-logo.svg" alt="Google Logo" width={22} height={22} />
      Sign In with Google
    </button>
  );
};

export default LoginWithGoogleButton;
