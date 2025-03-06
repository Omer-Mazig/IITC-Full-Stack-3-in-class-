import { usePosts } from "../hooks/usePosts";
import { useCategory } from "../context/CategoryContext";
import PostCard from "../components/PostCard";
import CategoryFilter from "../components/CategoryFilter";

const HomePage = () => {
  const { selectedCategory } = useCategory();
  const {
    data: posts,
    isLoading,
    isError,
    isFetching,
  } = usePosts(selectedCategory || undefined);

  return (
    <>
      {isFetching && <Overlay />}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Blog Posts</h1>
        <p className="text-gray-600">
          Explore our latest articles and tutorials
        </p>
      </div>

      <CategoryFilter />

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="text-xl text-gray-600">Loading posts...</div>
        </div>
      ) : isError ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>Error loading posts. Please try again later.</p>
        </div>
      ) : posts && posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-gray-700">
            No posts found
          </h3>
          {selectedCategory && (
            <p className="mt-2 text-gray-600">
              No posts found in the "{selectedCategory}" category.
            </p>
          )}
        </div>
      )}
    </>
  );
};

function Overlay() {
  return (
    <div className="fixed inset-0 bg-gray-800/60">
      <div className="flex items-center justify-center">
        <p className="z-50">...</p>
      </div>
    </div>
  );
}

export default HomePage;
