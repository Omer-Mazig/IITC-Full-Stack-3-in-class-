import { Link } from "react-router-dom";
import PostForm from "../components/PostForm";

const NewPostPage = () => {
  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
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
        </div>

        <div className="mb-6">
          <h1 className="text-3xl font-bold">Create New Post</h1>
          <p className="text-gray-600 mt-2">
            Share your thoughts with the world
          </p>
        </div>

        <PostForm />
      </div>
    </>
  );
};

export default NewPostPage;
