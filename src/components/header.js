import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "./buttons/logout-button";
import { ModeToggle } from "./buttons/toggle-button";

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="bg-white dark:bg-gray-950 border-b py-4">
      <div className="max-w-4xl mx-auto flex justify-between px-6">
        <div className="flex gap-6">
          <Link href={"/"} className="flex items-center justify-center gap-1">
            <Image
              className="hidden dark:block"
              src={"/linklist-logo-white.svg"}
              alt="Linklist"
              width={24}
              height={24}
            />
            <Image
              className="block dark:hidden"
              src={"/linklist-logo-dark.svg"}
              alt="light-mode-image"
              width={24}
              height={24}
            />
            <div className="font-bold text-lg text-foreground">Linklist</div>
          </Link>

          <nav className="flex items-center justify-center gap-4 text-slate-500 text-sm">
            <Link href={"/about"}>About</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/contact"}>Contact</Link>
          </nav>
        </div>

        <nav className="flex items-center justify-center gap-4 text-sm text-slate-500">
          {!!session && (
            <>
              <Link href={"/account"}>Hello, {session?.user?.name}</Link>
              <LogoutButton />
            </>
          )}

          {!session && (
            <>
              <Link href={"/login"}>Sign In</Link>
              <Link href={"/login"}>Create Account</Link>
            </>
          )}

          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
