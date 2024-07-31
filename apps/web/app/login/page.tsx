import Logo from "@components/logo";
import AuthButtons from "@app/components/auth";
import autoLogin from "@app/utils/autoLogIn";
import Link from "next/link";
import { GridBackground } from "@components/grid-background";
import { Card } from "@feely/ui/components/card";
import { Separator } from "@feely/ui/components/separator";
import { Button } from "@feely/ui/components/button";

export default async function Login() {
  await autoLogin();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center p-6">
      <Link href="/" passHref legacyBehavior>
        <Logo />
      </Link>
      <Card className="relative z-30 flex max-w-[400px] flex-col space-y-6 p-6 sm:p-10">
        <div className="flex flex-col items-center space-y-3 text-center">
          <h1 className="text-heading-section">Welcome back</h1>
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
            <p className="text-md text-description">Don&apos;t have an account?</p>
            <Button variant="link" asChild>
              <Link href={"/signup"}>Sign up</Link>
            </Button>
          </div>
        </div>
      </Card>

      <GridBackground />
    </div>
  );
}