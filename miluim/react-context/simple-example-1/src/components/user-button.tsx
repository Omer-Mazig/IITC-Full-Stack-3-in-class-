import { useAuthContext } from "../providers/auth-provider";

export function UserButton() {
  const { user, setUser } = useAuthContext();

  console.log("UserButton render");

  if (user) {
    return <button onClick={() => setUser(null)}>{user.username[0]}</button>;
  }

  return <button onClick={() => setUser({ username: "omer" })}>login</button>;
}
