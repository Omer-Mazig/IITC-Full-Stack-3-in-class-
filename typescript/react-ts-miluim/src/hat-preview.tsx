import { Hat } from "./App";

type HatPreviewProps = {
  hat: Hat;
  handleExpanded: (id: string) => void;
  expendedId: null | string;
};

export function HatPreview({
  hat,
  handleExpanded,
  expendedId,
}: HatPreviewProps) {
  return (
    <li onClick={() => handleExpanded(hat.id)}>
      <div>{hat.category}</div>
      {expendedId === hat.id ? <div>{hat.desc}</div> : null}
    </li>
  );
}
