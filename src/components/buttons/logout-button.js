"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

import { Button } from "@/components/ui/button";

const LogoutButton = () => {
  return (
    <Button
      variant="outline"
      className="flex items-center gap-2"
      onClick={() => signOut()}
    >
      Logout
      <LogOut className="text-muted-foreground w-4 h-4" />
    </Button>
  );
};

export default LogoutButton;
