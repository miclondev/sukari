import { LogoGoogle } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { signInWithRedirect } from "aws-amplify/auth";
import { ComponentPropsWithoutRef, useState } from "react";
import { toast } from "sonner";

export const SignGoogle = ({ ...props }: ComponentPropsWithoutRef<"button">) => {
  const [loadingSocial, setLoadingSocial] = useState(false);

  const handleSocialLogin = async () => {
    try {
      setLoadingSocial(true);
      await signInWithRedirect({
        provider: "Google",
      });
    } catch (e: any) {
      toast.error(e?.message);
    } finally {
      setLoadingSocial(false);
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      className="w-full gap-4"
      disabled={loadingSocial}
      {...props}
      onClick={handleSocialLogin}
    >
      <LogoGoogle />
      Continue with Google
    </Button>
  );
};
