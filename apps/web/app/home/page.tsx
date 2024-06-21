import protectRoute from "app/utils/protectedRoute";
// import { redirect } from "next/navigation";
// import { createClient } from "utils/supabase/server";

const Home = async () => {
  await protectRoute();

  // const handleLogout = async () => {
  //   "use server";
  //   const supabase = createClient();
  //   const { error } = await supabase.auth.signOut();
  //   if (error) {
  //     console.error("Error logging out:", error.message);
  //   }
  //   redirect("/");
  // };

  return (
    <h1>
      Home
      {/* <form action={handleLogout}>
        <button>logout</button>
      </form> */}
    </h1>
  );
};

export default Home;
