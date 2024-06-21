import AuthButtons from "app/components/auth";
import autoLogin from "app/utils/autoLogIn";

export default async function Login() {
  await autoLogin();

  return <AuthButtons />;
}
