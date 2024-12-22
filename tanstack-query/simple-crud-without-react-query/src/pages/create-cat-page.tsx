import CatForm from "@/components/cat-form";
import { createCat } from "@/services/cat.service";
import { Cat } from "@/types/cat.types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateCatPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (cat: Cat) => {
    setLoading(true);
    setError(null);
    try {
      await createCat(cat);
      navigate("/cats");
    } catch {
      setError("Failed to create cat.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Create a New Cat</h1>
      {error && <p className="text-red-500 mb-3">{error}</p>}
      <CatForm
        onSubmit={handleSubmit}
        loading={loading}
      />
    </div>
  );
};

export default CreateCatPage;
