import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b py-4">
      <div className="max-w-4xl mx-auto flex justify-between px-6">
        <div className="flex gap-6">
          <Link href={"/"} className="flex items-center justify-center gap-1">
            <Image
              src={"/linklist-logo-dark.svg"}
              alt={"Linklist"}
              width={26}
              height={26}
            />
            <div className="font-bold text-lg">Linklist</div>
          </Link>

          <nav className="flex items-center justify-center gap-4 text-slate-500 text-sm">
            <Link href={"/about"}>About</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/contact"}>Contact</Link>
          </nav>
        </div>

        <nav className="flex items-center justify-center gap-4 text-sm text-slate-500">
          <Link href={"/login"}>Sign In</Link>
          <Link href={"/login"}>Create Account</Link>
        </nav>
      </div>
    </header>
  );
}
