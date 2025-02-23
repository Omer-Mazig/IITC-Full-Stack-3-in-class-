import { useEffect, useState } from "react";

type Data = {
  answer: string;
  forced: boolean;
  image: string;
};

export function UseEffectDemo2() {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    fetch("https://yesno.wtf/api")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h2>Use Effect 2</h2>
      <div>{data.answer}</div>
      <div>
        <img
          style={{ display: "block", maxWidth: "100%" }}
          src={data.image}
        />
      </div>
    </div>
  );
}
