import { useEffect, useState } from "react";
import { HatPreview } from "./hat-preview";

const INITIAL_HATS: Hat[] = [
  {
    id: "1",
    category: "stupid hat",
    desc: "aonsdlkamlksam;",
  },
  {
    id: "2",
    category: "cowboy hat",
    desc: "aonsdlkamlksam;",
  },
  {
    id: "3",
    category: "sombrero",
    desc: "aonsdlkamlksam;",
  },
];

type HatCategory = "stupid hat" | "cowboy hat" | "sombrero";

export type Hat = {
  id: string;
  category: HatCategory;
  desc: string;
};

export default function App() {
  const [hats, setHats] = useState<Hat[]>([]);
  const [expendedId, setExpendedId] = useState<null | string>(null);

  useEffect(() => {
    setHats(INITIAL_HATS);
  }, []);

  const handleExpanded = (id: string) => {
    setExpendedId(id);
  };

  return (
    <>
      <h1>Hats App</h1>

      <ul>
        {hats.map((hat) => {
          return (
            <HatPreview
              key={hat.id}
              hat={hat}
              handleExpanded={handleExpanded}
              expendedId={expendedId}
            />
          );
        })}
      </ul>
    </>
  );
}
