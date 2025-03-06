import ErrorMessage from "@/components/error-message";
import Loader from "@/components/loader";
import { Link } from "react-router-dom";

import { useGetCats, useDeleteCat } from "@/hooks/use-cats";

const CatListPage = () => {
  const { data: cats, error, isLoading, isFetching } = useGetCats();

  const deleteCatMutation = useDeleteCat();

  async function handleDelete(id: string) {
    deleteCatMutation.mutate(id);
  }

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} />;
  if (!cats) return null;

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
              onClick={() => handleDelete(cat.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {isFetching && <p>getting fresh data...</p>}
    </div>
  );
};

export default CatListPage;
