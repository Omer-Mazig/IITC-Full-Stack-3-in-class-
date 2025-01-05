import { Nav } from "./nav";
import { ThemeButton } from "./theme-button";
import { UserButton } from "./user-button";

export function Header() {
  console.log("Header render");

  return (
    <header className="flex justify-between items-center bg-gray-400">
      <Nav />
      <UserButton />
      <ThemeButton />
    </header>
  );
}
