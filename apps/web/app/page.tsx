import { ModeToggle } from "@components/mode-toggle";
import Link from "next/link";
import { createClient } from "utils/supabase/server";
export default async function Home() {
  const supabase = createClient();

  const { data } = await supabase.auth.getSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data.session ? (
        <>
          <Link href="/redirect_to_workspace" className="bg-red">
            Go to your dashboard
          </Link>
        </>
      ) : (
        <Link href="/login" className="bg-red">
          Login
        </Link>
      )}
    </main>
  );
}
