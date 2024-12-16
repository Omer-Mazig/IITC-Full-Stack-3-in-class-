interface MainNavProps {
  links: { label: string; to: string }[];
  color: "red" | "blue" | "green";
}

export function MainNav({ links, color }: MainNavProps) {
  const colorsMap = {
    red: "bg-red-500 hover:bg-red-600",
    blue: "bg-blue-500 hover:bg-blue-600",
    green: "bg-green-500 hover:bg-green-600",
  };

  return (
    <nav className="bg-slate-800 text-white flex gap-2 shadow-sm hover:shadow-xl px-4 py-3">
      {links.map((link) => {
        return (
          <a
            key={link.to}
            href={link.to}
            className={colorsMap[color]}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}
