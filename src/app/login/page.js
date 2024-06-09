import LoginWithGoogleButton from "@/components/buttons/google-login-button";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div>
      <div className="px-10 py-8 max-w-xl mx-auto border rounded-lg mt-6 bg-white dark:bg-gray-950">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-14">
          <Image
            src={"/login-img.svg"}
            alt="Login Image"
            width={200}
            height={200}
          />

          <div>
            <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
            <p className="text-center mb-6 text-gray-500">
              Sign In to your account using one of the methods below
            </p>

            <LoginWithGoogleButton />
          </div>
        </div>
      </div>
    </div>
  );
}
