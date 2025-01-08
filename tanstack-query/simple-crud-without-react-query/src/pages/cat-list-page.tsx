import ErrorMessage from "@/components/error-message";
import Loader from "@/components/loader";
import { deleteCat, getCats } from "@/services/cat.service";
import { Cat } from "@/types/cat.types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CatListPage = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCats = async () => {
      setLoading(true);
      try {
        const data = await getCats();
        setCats(data);
        setError(null);
      } catch (err) {
        setError("Failed to load cats.");
        setCats([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCats();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteCat(id);
      setCats((prev) => prev.filter((cat) => cat.id !== id));
    } catch {
      alert("Failed to delete cat.");
    }
  };

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Cat List</h1>
      <ul>
        {cats.map((cat) => (
          <li
            key={cat.id}
            className="mb-3 flex justify-between"
          >
            <Link
              to={`/cats/${cat.id}`}
              className="text-blue-500 underline"
            >
              {cat.name}
            </Link>
            <button
              onClick={() => handleDelete(cat.id!)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatListPage;
