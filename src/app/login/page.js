import LoginWithGoogleButton from "@/components/buttons/google-login-button";

export default function LoginPage() {
  return (
    <div>
      <div className="p-10 max-w-xs mx-auto border rounded-md mt-6 bg-white dark:bg-gray-950">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
        <p className="text-center mb-6 text-gray-500">
          Sign In to your account using one of the methods below
        </p>

        <LoginWithGoogleButton />
      </div>
    </div>
  );
}
