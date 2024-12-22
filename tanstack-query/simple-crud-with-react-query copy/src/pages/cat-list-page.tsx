import ErrorMessage from "@/components/error-message";
import Loader from "@/components/loader";
import { Link } from "react-router-dom";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCat } from "@/services/cat.service";
import { useCats } from "@/hooks/use-cats";
import { Cat } from "@/types/cat.types";

const CatListPage = () => {
  const queryClient = useQueryClient();

  const { data: cats, error, isLoading, isFetching } = useCats();

  const deleteCatMutation = useMutation({
    mutationFn: deleteCat,

    onMutate: async (id: string) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ["cats"] });

      // Snapshot the previous value
      const previousCats = queryClient.getQueryData(["cats"]);

      // Optimistically update to the new value
      queryClient.setQueryData(["cats"], (cats: Cat[]) => {
        return cats.filter((cat) => cat.id !== id);
      });

      // Return a context object with the snapshotted value
      return { previousCats };
    },

    onError: () => console.log("oops"), // show toast
    onSuccess: () => console.log("yay"), // show toast
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["cats"] }),
  });

  async function handleDelete(id: string) {
    await deleteCatMutation.mutateAsync(id);
  }

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} />;
  if (!cats) return null;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Cat List</h1>
      {isFetching && <p>getting fresh data...</p>}
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
    </div>
  );
};

export default CatListPage;
