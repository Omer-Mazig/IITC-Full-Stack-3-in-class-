import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from "../api/postsApi";
import { Post, NewPost } from "../types/schema";

// Hook to fetch all posts
export const usePosts = (category?: string) => {
  return useQuery({
    queryKey: ["posts", category],
    queryFn: () => getPosts(category),
    // staleTime: 1000 * 5, // default is 0
    gcTime: 1000 * 60 * 3, // default is 5 minutes
    refetchOnWindowFocus: true, // default is true
  });
};

// Hook to fetch a single post
export const usePost = (id: string) => {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => getPostById(id),
    enabled: !!id,
  });
};

// Hook to create a new post
export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newPost: NewPost) => createPost(newPost),
    onSuccess: () => {
      // Invalidate and refetch posts after a new post is created
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};

// Hook to update a post
export const useUpdatePost = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (post: Partial<Post>) => updatePost(id, post),
    onSuccess: () => {
      // Invalidate and refetch the specific post and all posts
      queryClient.invalidateQueries({ queryKey: ["post", id] });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};

// Hook to delete a post
export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deletePost(id),
    onSuccess: (_, id) => {
      // Invalidate and refetch posts after a post is deleted
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.removeQueries({ queryKey: ["post", id] });
    },
  });
};
