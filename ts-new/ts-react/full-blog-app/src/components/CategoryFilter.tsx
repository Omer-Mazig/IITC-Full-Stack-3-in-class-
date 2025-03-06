import { useCategory } from "../context/CategoryContext";

const categories = [
  { id: "all", name: "All" },
  { id: "frontend", name: "Frontend" },
  { id: "programming", name: "Programming" },
  { id: "css", name: "CSS" },
];

const CategoryFilter = () => {
  const { selectedCategory, setSelectedCategory } = useCategory();

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === "all") {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
    }
  };

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">Filter by Category</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              (category.id === "all" && selectedCategory === null) ||
              category.id === selectedCategory
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
