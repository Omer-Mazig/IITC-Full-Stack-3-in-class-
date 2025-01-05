import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Hat } from "./hats-page";

function HatDetails() {
  const [hat, setHat] = useState<null | Hat>(null);
  const params = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3000/hats/" + params.hatId)
      .then((res) => setHat(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(hat);

  if (!hat) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>HatDetails</h1>
      <p>{hat.category}</p>
      <p>{hat.id}</p>
    </div>
  );
}

export default HatDetails;
