import Button from "./ui/button";

export function Article() {
  return (
    <div className="bg-slate-100 p-4 rounded-xl">
      <h4 className="text-center font-bold text-3xl">baba</h4>
      <p className="italic text-primary-600">im baba the best mama</p>

      <Button className="text-2xl">Click</Button>
      <Button disabled={true}>Baba</Button>
    </div>
  );
}
