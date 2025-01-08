import CatForm from "@/components/cat-form";
import { createCat } from "@/services/cat.service";
import { CatWithoutId } from "@/types/cat.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const CreateCatPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const createCatMutation = useMutation({
    mutationFn: createCat,
  });

  const handleSubmit = async (cat: CatWithoutId) => {
    await createCatMutation.mutateAsync(cat);
    queryClient.removeQueries({ queryKey: ["cats"] });
    navigate("/cats");
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Create a New Cat</h1>
      {createCatMutation.error && (
        <p className="text-red-500 mb-3">{createCatMutation.error.message}</p>
      )}
      <CatForm
        onSubmit={handleSubmit}
        loading={createCatMutation.isPending}
      />
    </div>
  );
};

export default CreateCatPage;
