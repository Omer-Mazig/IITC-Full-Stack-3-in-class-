import { Link } from "react-router";
import { Hat } from "./hats-page";

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
    <li>
      <div>{hat.category}</div>
      <button onClick={() => handleExpanded(hat.id)}>Expend</button>
      <Link to={`/hats/${hat.id}`}>Go to details</Link>
      {expendedId === hat.id ? <div>{hat.desc}</div> : null}
    </li>
  );
}
