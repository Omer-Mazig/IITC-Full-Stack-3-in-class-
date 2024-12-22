import { useParams, Link } from "react-router-dom";
import Loader from "@/components/loader";
import ErrorMessage from "@/components/error-message";
import { useQuery } from "@tanstack/react-query";
import { getCat } from "@/services/cat.service";

const CatDetailsPage = () => {
  const { id } = useParams();

  const {
    data: cat,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cat", { id }],
    queryFn: () => getCat(id!),
    enabled: !!id,
  });

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} />;
  if (!cat) return null;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">{cat.name}</h1>
      <p>Age: {cat.age}</p>
      <p>Breed: {cat.breed}</p>
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
