/**
 * Comments API Module
 *
 * This file contains two different API implementations:
 *
 * 1. localStorage implementation (active by default)
 *    - Uses browser's localStorage to store data
 *    - Wraps storage operations in Promises to mimic async API calls
 *    - No need for an external server
 *
 * 2. Axios implementation (commented out)
 *    - Uses Axios to make HTTP requests to a real backend
 *    - Demonstrates how to structure API calls to a REST API
 *
 * To switch between implementations:
 * 1. Comment out the active implementation
 * 2. Uncomment the alternative implementation
 * 3. Make sure to update imports accordingly
 */

import {
  Comment,
  NewComment,
  commentSchema,
  newCommentSchema,
} from "../types/schema";
import { asyncStorageMockService } from "../utils/async-storage.service";
import { z } from "zod"; // Import z directly
// import api from "./axios"; // Uncomment for real API

// Entity type constant for comments
const ENTITY_TYPE = "comments";

// MOCK IMPLEMENTATION USING LOCAL STORAGE
// ------------------------------------------------------------------------

// Get comments for a post
export const getCommentsByPostId = async (
  postId: string | number
): Promise<Comment[]> => {
  try {
    const comments = await asyncStorageMockService.get(ENTITY_TYPE);

    // Validate the entire array
    const validatedComments = z.array(commentSchema).parse(comments);

    // Then filter the validated comments
    return validatedComments.filter(
      (comment) => comment.postId === postId.toString()
    );
  } catch (error) {
    console.error(`Error fetching comments for post ${postId}:`, error);
    throw error;
  }
};

// Create a new comment
export const createComment = async (comment: NewComment): Promise<Comment> => {
  try {
    // Validate the new comment with Zod
    const validatedComment = newCommentSchema.parse(comment);

    const commentToCreate = {
      ...validatedComment,
      postId: validatedComment.postId.toString(), // Ensure postId is a string
      createdAt: new Date().toISOString(), // Provide ISO string for createdAt
    };

    const createdComment = await asyncStorageMockService.post(
      ENTITY_TYPE,
      commentToCreate
    );

    return commentSchema.parse(createdComment);
  } catch (error) {
    console.error("Error creating comment:", error);
    throw error;
  }
};

// Delete a comment
export const deleteComment = async (id: string | number): Promise<void> => {
  try {
    // throw new Error("Not implemented");
    await asyncStorageMockService.remove(ENTITY_TYPE, id.toString());
  } catch (error) {
    console.error(`Error deleting comment ${id}:`, error);
    throw error;
  }
};

// REAL API IMPLEMENTATION USING AXIOS
// Uncomment the code below and comment out the localStorage implementation to use a real API
// ------------------------------------------------------------------------

/*
// Get comments for a post
export const getCommentsByPostId = async (
  postId: string | number
): Promise<Comment[]> => {
  try {
    const response = await api.get(`/comments?postId=${postId}`);
    return z.array(commentSchema).parse(response.data);
  } catch (error) {
    console.error(`Error fetching comments for post ${postId}:`, error);
    throw error;
  }
};

// Create a new comment
export const createComment = async (comment: NewComment): Promise<Comment> => {
  try {
    // Validate the new comment with Zod
    const validatedComment = newCommentSchema.parse(comment);
    
    const commentToCreate = {
      ...validatedComment,
      postId: validatedComment.postId.toString(),
      createdAt: new Date().toISOString(),
    };
    
    const response = await api.post('/comments', commentToCreate);
    return commentSchema.parse(response.data);
  } catch (error) {
    console.error('Error creating comment:', error);
    throw error;
  }
};

// Delete a comment
export const deleteComment = async (id: string | number): Promise<void> => {
  try {
    await api.delete(`/comments/${id}`);
  } catch (error) {
    console.error(`Error deleting comment ${id}:`, error);
    throw error;
  }
};
*/
