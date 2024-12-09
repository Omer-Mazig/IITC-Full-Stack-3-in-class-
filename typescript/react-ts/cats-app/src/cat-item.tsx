import { Cat } from "./App";

interface CatItemProps {
  cat: Cat;
  handleDelete: (id: string) => Promise<void>;
  baba: string;
  mama?: string;
}

export function CatItem({ cat, handleDelete }: CatItemProps) {
  return (
    <li key={cat.id}>
      <span>{cat.name}</span>
      <button onClick={() => handleDelete(cat.id)}>Delete</button>
    </li>
  );
}
