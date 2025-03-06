import { createCat, deleteCat, getCat, getCats } from "@/services/cat.service";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Cat, CatWithoutId } from "@/types/cat.types";

export function useGetCats() {
  return useQuery({
    queryKey: ["cats", "list"],
    queryFn: () => getCats(),
  });
}

export function useGetCat(id: string | undefined) {
  const shouldFetch = !!id;

  return useQuery({
    queryKey: ["cats", "details", id],
    queryFn: () => getCat(id as string),
    enabled: shouldFetch,
  });
}

export function useCreateCat() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (cat: CatWithoutId) => createCat(cat),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cats", "list"] });
    },
  });
}

export function useDeleteCat() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteCat(id),
    onMutate: async (id) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ["cats", "list"] });

      // Snapshot the previous value
      const previousCats = queryClient.getQueryData(["cats", "list"]);

      // Optimistically update to the new value
      queryClient.setQueryData(["cats", "list"], (cats: Cat[]) => {
        return cats.filter((cat) => cat.id !== id);
      });

      // Return a context object with the snapshotted value
      return { previousCats };
    },

    onError: (err, vars, context) => {
      console.log(`Cannot delete cat with the id: ${vars}`, err);
      console.log("context (previousCats)", context?.previousCats);
      // queryClient.setQueryData(["cats"], () => context?.previousCats);
    }, // show toast
    onSuccess: () => console.log("cat deleted"), // show toast
    onSettled: (_data, _error, vars) => {
      queryClient.invalidateQueries({ queryKey: ["cats", "list"] });

      // Remove the query data since this cat no longer exists
      queryClient.removeQueries({ queryKey: ["cats", "details", vars] });
    },
  });
}
