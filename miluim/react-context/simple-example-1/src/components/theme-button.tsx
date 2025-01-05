import { useThemeContext } from "../providers/theme-provider";

export function ThemeButton() {
  const { theme, toggleTheme } = useThemeContext();
  return <button onClick={toggleTheme}>{theme}</button>;
}
