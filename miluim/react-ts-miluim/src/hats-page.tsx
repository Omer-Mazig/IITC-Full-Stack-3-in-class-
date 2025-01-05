import { useEffect, useState } from "react";
import { HatPreview } from "./hat-preview";
import axios from "axios";

type HatCategory = "stupid hat" | "cowboy hat" | "sombrero";

export type Hat = {
  id: string;
  category: HatCategory;
  desc: string;
};

export default function HatsPage() {
  const [hats, setHats] = useState<Hat[]>([]);
  const [expendedId, setExpendedId] = useState<null | string>(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/hats")
      .then((res) => setHats(res.data))
      .catch((err) => console.log(err));
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
