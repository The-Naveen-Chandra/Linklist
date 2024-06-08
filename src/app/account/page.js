import { getServerSession } from "next-auth";

import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import RightIcon from "@/components/icons/right-icon";
import { Button } from "@/components/ui/button";

const AccountPage = async ({ searchParams }) => {
  const session = await getServerSession(authOptions);
  const desiredUsername = searchParams?.username;

  if (!session) {
    redirect("/");
  }

  return (
    <div className="p-10 max-w-xs mx-auto border rounded-md mt-6 bg-white dark:bg-gray-950">
      <form>
        <h1 className="text-2xl font-bold text-center mb-6">
          Grab your username
        </h1>
        <p className="text-center mb-6 text-gray-500">
          Choose a username to claim it as your own
        </p>
        <div className="max-w-xs mx-auto">
          <input
            type="text"
            placeholder="Username"
            defaultValue={desiredUsername}
            className="block p-2 mx-auto border w-full mb-3 rounded-md text-center"
          />
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
  );
};

export default AccountPage;
