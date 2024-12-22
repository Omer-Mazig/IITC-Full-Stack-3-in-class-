import { Cat } from "@/types/cat.types";
import { useState } from "react";

interface CatFormProps {
  initialData?: Cat;
  onSubmit: (cat: Cat) => Promise<void>;
  loading: boolean;
}

const CatForm = ({ initialData, onSubmit, loading }: CatFormProps) => {
  const [name, setName] = useState(initialData?.name || "");
  const [age, setAge] = useState(initialData?.age || 0);
  const [breed, setBreed] = useState(initialData?.breed || "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit({ name, age, breed });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div>
        <label
          htmlFor="name"
          className="block font-medium"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded p-2 w-full"
          required
        />
      </div>
      <div>
        <label
          htmlFor="age"
          className="block font-medium"
        >
          Age
        </label>
        <input
          id="age"
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          className="border rounded p-2 w-full"
          required
        />
      </div>
      <div>
        <label
          htmlFor="breed"
          className="block font-medium"
        >
          Breed
        </label>
        <input
          id="breed"
          type="text"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          className="border rounded p-2 w-full"
          required
        />
      </div>
      <button
        type="submit"
        className={`bg-blue-500 text-white px-4 py-2 rounded ${
          loading ? "opacity-50" : ""
        }`}
        disabled={loading}
      >
        {loading ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

export default CatForm;
