import CatForm from "@/components/cat-form";
import { useCreateCat } from "@/hooks/use-cats";

const CreateCatPage = () => {
  const createCatMutation = useCreateCat();

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Create a New Cat</h1>
      {createCatMutation.error && (
        <p className="text-red-500 mb-3">{createCatMutation.error.message}</p>
      )}
      <CatForm
        onSubmit={(cat) => createCatMutation.mutate(cat)}
        loading={createCatMutation.isPending}
      />
    </div>
  );
};

export default CreateCatPage;
