import { ModeToggle } from "@components/mode-toggle";
import protectRoute from "app/utils/protectedRoute";
import Link from "next/link";
export default async function Home() {
  await protectRoute();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ModeToggle />
      <Link href="/login" className="bg-red">
        Login
      </Link>
    </main>
  );
}
