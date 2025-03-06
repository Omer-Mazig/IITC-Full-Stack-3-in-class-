import { useState } from "react";
import {
  useComments,
  useCreateComment,
  useDeleteComment,
} from "../hooks/useComments";
import { NewComment } from "../types/schema";

type CommentSectionProps = {
  postId: string;
};

const CommentSection = ({ postId }: CommentSectionProps) => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const { data: comments, isLoading, isError } = useComments(postId);
  const createCommentMutation = useCreateComment(postId);
  const deleteCommentMutation = useDeleteComment(postId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!author.trim() || !content.trim()) return;

    const newComment: NewComment = {
      postId,
      author,
      content,
    };

    createCommentMutation.mutate(newComment, {
      onSuccess: () => {
        setAuthor("");
        setContent("");
      },
    });
  };

  const handleDelete = (commentId: string) => {
    deleteCommentMutation.mutate(commentId, {
      onError: (error) => {
        //thisis a toast
        console.log(error);
      },
    });
  };

  if (isLoading) return <div className="mt-6">Loading comments...</div>;
  if (isError)
    return <div className="mt-6 text-red-500">Error loading comments</div>;

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">
        Comments ({comments?.length || 0})
      </h3>

      {/* Comment Form */}
      <form
        onSubmit={handleSubmit}
        className="mb-6 bg-gray-50 p-4 rounded-lg"
      >
        <h4 className="text-lg font-semibold mb-3">Add a Comment</h4>
        <div className="mb-3">
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Comment
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          disabled={createCommentMutation.isPending}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {createCommentMutation.isPending ? "Submitting..." : "Submit Comment"}
        </button>
      </form>

      {/* Comments List */}
      {comments && comments.length > 0 ? (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h5 className="font-semibold">{comment.author}</h5>
                  <p className="text-sm text-gray-500">
                    {new Date(comment.createdAt || "").toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={() => comment.id && handleDelete(comment.id)}
                  className="text-red-500 hover:text-red-700 text-sm"
                  aria-label="Delete comment"
                >
                  Delete
                </button>
              </div>
              <p className="mt-2">{comment.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">
          No comments yet. Be the first to comment!
        </p>
      )}
    </div>
  );
};

export default CommentSection;
