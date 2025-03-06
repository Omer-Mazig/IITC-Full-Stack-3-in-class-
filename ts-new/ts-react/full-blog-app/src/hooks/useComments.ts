import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getCommentsByPostId,
  createComment,
  deleteComment,
} from "../api/commentsApi";
import { NewComment, Comment } from "../types/schema";

// Hook to fetch comments for a post
export const useComments = (postId: string) => {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: () => getCommentsByPostId(postId),
    enabled: !!postId,
  });
};

// Hook to create a new comment
export const useCreateComment = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newComment: NewComment) => createComment(newComment),

    onSuccess: (_data, _variables, _context) => {
      console.log("added comment");

      // Invalidate and refetch comments for the specific post
      queryClient.invalidateQueries({
        queryKey: ["comments", postId],
      });
    },
    onError: (error, _variables, _context) => {
      console.log(error);
    },
  });
};

// Hook to delete a comment
export const useDeleteComment = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (commentId: string) => deleteComment(commentId),

    onMutate: (commentId: string) => {
      queryClient.setQueryData(["comments", postId], (prev: Comment[]) => {
        const newComments = prev.filter((comment) => comment.id !== commentId);
        return newComments;
      });
    },

    // onSuccess: () => {
    //   queryClient.removeQueries({
    //     queryKey: ["comments", postId],
    //   });
    // },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["comments", postId],
      });
    },
  });
};
