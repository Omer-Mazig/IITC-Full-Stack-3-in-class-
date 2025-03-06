import { useParams, Link, useNavigate } from "react-router-dom";
import { usePost, useDeletePost } from "../hooks/usePosts";
import CommentSection from "../components/CommentSection";

const PostDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: post, isLoading, isError } = usePost(id || "");
  const deletePostMutation = useDeletePost();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deletePostMutation.mutate(id || "", {
        onSuccess: () => {
          navigate("/");
        },
      });
    }
  };

  if (isLoading) {
    return (
      <>
        <div className="flex justify-center items-center h-64">
          <div className="text-xl text-gray-600">Loading post...</div>
        </div>
      </>
    );
  }

  if (isError || !post) {
    return (
      <>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>
            Error loading post. The post may not exist or there was a problem
            fetching it.
          </p>
          <Link
            to="/"
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            Return to Home
          </Link>
        </div>
      </>
    );
  }

  const { title, content, author, category, tags, createdAt } = post;

  // Format the date
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="max-w-3xl mx-auto">
        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Posts
        </Link>

        {/* Post header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded mr-3">
              {category}
            </span>
            <span className="text-gray-500">{formattedDate}</span>
          </div>

          <h1 className="text-4xl font-bold mb-4">{title}</h1>

          <div className="flex justify-between items-center">
            <p className="text-gray-700">By {author}</p>

            <button
              onClick={handleDelete}
              className="text-red-600 hover:text-red-800 font-medium"
            >
              Delete Post
            </button>
          </div>
        </div>

        {/* Post content */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="whitespace-pre-line">{content}</p>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Comments section */}
        <CommentSection postId={id || ""} />
      </div>
    </>
  );
};

export default PostDetailPage;
