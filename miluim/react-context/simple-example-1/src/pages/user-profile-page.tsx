import { useAuthContext } from "../providers/auth-provider";

export default function UserProfilePage() {
  const { user } = useAuthContext();

  console.log("UserProfilePage render");

  if (!user) {
    return "no user";
  }

  return <div>{user.username}</div>;
}
