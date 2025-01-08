import CatForm from "@/components/cat-form";
import ErrorMessage from "@/components/error-message";
import Loader from "@/components/loader";
import { getCat, updateCat } from "@/services/cat.service";
import { Cat } from "@/types/cat.types";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditCatPage = () => {
  const { id } = useParams();
  const [cat, setCat] = useState<Cat | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCat = async () => {
      try {
        const data = await getCat(id!);
        setCat(data);
      } catch {
        setError("Failed to fetch cat.");
      } finally {
        setLoading(false);
      }
    };

    fetchCat();
  }, [id]);

  const handleUpdate = async (updates: Partial<Cat>) => {
    try {
      await updateCat(id!, updates);
      navigate("/cats");
    } catch {
      setError("Failed to update cat.");
    }
  };

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Edit Cat</h1>
      <CatForm
        initialData={cat!}
        onSubmit={handleUpdate}
        loading={false}
      />
    </div>
  );
};

export default EditCatPage;
