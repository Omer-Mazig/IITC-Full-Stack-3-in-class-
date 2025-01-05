import { Header } from "./components/header";
import { LogoutButton } from "./components/logout-button";
import UserProfilePage from "./pages/user-profile-page";
import { useThemeContext } from "./providers/theme-provider";

export default function App() {
  const { theme } = useThemeContext();

  console.log("App render");

  const appStyle = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
  };
  return (
    <div
      style={appStyle}
      className="font-roboto-regular"
    >
      <Header />
      <UserProfilePage />
      <LogoutButton />
    </div>
  );
}
