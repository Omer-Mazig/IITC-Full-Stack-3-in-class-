import { Link } from "react-router-dom";
import { Post } from "../types/schema";

type PostCardProps = {
  post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
  const { id, title, content, author, category, tags, createdAt } = post;

  // Format the date
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {category}
          </span>
          <span className="text-gray-500 text-sm">{formattedDate}</span>
        </div>

        <Link to={`/posts/${id}`}>
          <h2 className="text-xl font-bold mb-2 text-gray-800 hover:text-blue-600">
            {title}
          </h2>
        </Link>

        <p className="text-gray-600 mb-4 line-clamp-3">{content}</p>

        <div className="flex justify-between items-center">
          <span className="text-gray-700">By {author}</span>
          <Link
            to={`/posts/${id}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Read More
          </Link>
        </div>

        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
