import AuthButtons from "app/components/auth";
import Link from "next/link";

const CreateAccount = async () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthButtons />
      <p>
        Already have an account? <Link href={"/login"}>Login</Link>
      </p>
    </div>
  );
};

export default CreateAccount;
