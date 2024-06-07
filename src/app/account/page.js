import { getServerSession } from "next-auth";

import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const AccountPage = async ({ searchParams }) => {
  const session = await getServerSession(authOptions);
  const desiredUsername = searchParams?.username;

  if (!session) {
    redirect("/");
  }

  return (
    <div>
      account {session.user.name} <br />
      desired Username: {desiredUsername}
      <form>
        <h1>Grab your usernaSme</h1>
        <input type="text" placeholder="Username" />
        <button>Claim username</button>
      </form>
    </div>
  );
};

export default AccountPage;
