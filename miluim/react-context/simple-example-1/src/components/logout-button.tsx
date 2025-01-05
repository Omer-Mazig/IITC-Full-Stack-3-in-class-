import { useAuthContext } from "../providers/auth-provider";

export function LogoutButton() {
  console.log("LogoutButton render");

  const { setUser } = useAuthContext();
  return <button onClick={() => setUser(null)}>Logout</button>;
}
