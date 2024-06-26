import AuthButtons from "app/components/auth";
import autoLogin from "app/utils/autoLogIn";
import Link from "next/link";

export default async function Login() {
  await autoLogin();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthButtons />
      <p>
        Don&apos;t have an account? <Link href={"/signup"}>Sign up</Link>
      </p>
    </div>
  );
}
