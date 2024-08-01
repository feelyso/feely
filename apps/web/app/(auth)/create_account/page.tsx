import Link from "next/link";
import AuthButtons from "@components/auth/auth-buttons";
import { Card } from "@feely/ui/components/card";
import { Separator } from "@feely/ui/components/separator";
import { Button } from "@feely/ui/components/button";

const CreateAccount = async () => {
  return (
    <Card className="relative z-30 flex max-w-[400px] flex-col space-y-6 p-6 sm:p-10">
      <div className="flex flex-col items-center space-y-3 text-center">
        <h1 className="text-heading-section">Create your account</h1>
        <p className="text-md text-description">
          Lorem ipsum dolor sit amet consectetur. Neque massa amet vitae fringilla dolor iaculis.
        </p>
      </div>
      <Separator />
      <div className="w-full">
        <AuthButtons />
      </div>
      <div className="grid items-center gap-4">
        <Separator />
        <div className="flex items-center justify-center space-x-0">
          <p className="text-md text-description">Already have an account?</p>
          <Button variant="link" asChild>
            <Link href={"/login"}>Login</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CreateAccount;
