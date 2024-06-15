import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import RightIcon from "../icons/right-icon";

const UsernameSubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="py-2 px-4 mx-auto w-full rounded-md flex gap-2 items-center justify-center"
    >
      {pending ? (
        <Loader className="animate-spin w-4 h-4" />
      ) : (
        <>
          Claim Username
          <RightIcon />
        </>
      )}
    </Button>
  );
};

export default UsernameSubmitButton;
