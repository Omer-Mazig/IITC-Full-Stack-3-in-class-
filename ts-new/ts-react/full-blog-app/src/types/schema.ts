import { z } from "zod";

// Post schema
export const postSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Title is required"),
  content: z.string().min(10, "Content must be at least 10 characters"),
  author: z.string().min(1, "Author is required"),
  category: z.string().min(1, "Category is required"),
  tags: z.array(z.string()),
  createdAt: z.union([z.string().datetime(), z.number()]),
});

// Posts schema
export const postsSchema = z.array(postSchema);

// Comment schema
export const commentSchema = z.object({
  id: z.string(),
  postId: z.string(),
  author: z.string().min(1, "Author is required"),
  content: z.string().min(1, "Comment is required"),
  createdAt: z.union([z.string().datetime(), z.number()]).optional(),
});

// Comments schema
export const commentsSchema = z.array(commentSchema);

// New post schema (for creating a new post)
export const newPostSchema = postSchema.omit({ id: true, createdAt: true });

// New comment schema (for creating a new comment)
export const newCommentSchema = commentSchema.omit({
  id: true,
  createdAt: true,
});

// Infer TypeScript types from Zod schemas
export type Post = z.infer<typeof postSchema>;
export type Comment = z.infer<typeof commentSchema>;
export type NewPost = z.infer<typeof newPostSchema>;
export type NewComment = z.infer<typeof newCommentSchema>;
