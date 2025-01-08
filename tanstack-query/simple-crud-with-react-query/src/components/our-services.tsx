// This stupid example showcase the issue of 'race condition'

import { wait } from "@/lib/utils";
import { useEffect, useState } from "react";

type TypeOfData = "food" | "games";

async function getData(type: TypeOfData | undefined) {
  if (!type) return;
  if (type === "food") {
    return "good and yami bonzo!";
  }

  if (type === "games") {
    await wait();
    await wait();
    return "very fun game!";
  }
}

function OurServices() {
  const [typeOfData, setTypeOfData] = useState<TypeOfData | undefined>();
  const [data, setData] = useState<string | undefined>();

  useEffect(() => {
    let ignore = false;

    getData(typeOfData).then((data) => {
      if (ignore === true) {
        return;
      }
      setData(data);
    });

    return () => {
      ignore = true;
    };
  }, [typeOfData]);

  return (
    <div>
      <h2>We Have:</h2>
      <div className="flex gap-2 flex-col justify-center">
        <button
          className="bg-sky-500 p-2 rounded"
          onClick={() => setTypeOfData("food")}
        >
          Get Food
        </button>
        <button
          className="bg-sky-500 p-2 rounded"
          onClick={() => setTypeOfData("games")}
        >
          Get Games
        </button>
      </div>
      <p className="text-center font-mono font-bold text-2xl">{data}</p>
    </div>
  );
}

export default OurServices;
