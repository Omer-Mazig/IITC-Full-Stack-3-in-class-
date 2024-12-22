import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Cat } from "@/types/cat.types";
import { getCat } from "@/services/cat.service";
import Loader from "@/components/loader";
import ErrorMessage from "@/components/error-message";

const CatDetailsPage = () => {
  const { id } = useParams();
  const [cat, setCat] = useState<Cat | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCat = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const data = await getCat(id);
        setCat(data);
      } catch {
        setError("Failed to fetch cat.");
      } finally {
        setLoading(false);
      }
    };

    fetchCat();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">{cat!.name}</h1>
      <p>Age: {cat!.age}</p>
      <p>Breed: {cat!.breed}</p>
      <Link
        to="/cats"
        className="text-blue-500 underline mt-3 block"
      >
        Back to Cats
      </Link>
    </div>
  );
};

export default CatDetailsPage;
