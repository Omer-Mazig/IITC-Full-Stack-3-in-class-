/**
 * Posts API Module
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

import { Post, NewPost, postSchema, newPostSchema } from "../types/schema";
import { asyncStorageMockService } from "../utils/async-storage.service";
import { z } from "zod"; // Import z directly
// import api from "./axios"; // Uncomment for real API

// Entity type constant for posts
const ENTITY_TYPE = "posts";

// MOCK IMPLEMENTATION USING LOCAL STORAGE
// ------------------------------------------------------------------------

// Get all posts
export const getPosts = async (category?: string) => {
  try {
    let posts = await asyncStorageMockService.get(ENTITY_TYPE);

    // Validate entire array of posts with Zod
    const validatedPosts = z.array(postSchema).parse(posts);

    if (category) {
      return validatedPosts.filter((post) => post.category === category);
    }

    console.log("validatedPosts", validatedPosts);

    return validatedPosts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

// Get a single post by ID
export const getPostById = async (id: string) => {
  try {
    const post = await asyncStorageMockService.getById(ENTITY_TYPE, id);

    // Validate the post with Zod
    return postSchema.parse(post);
  } catch (error) {
    console.error(`Error fetching post ${id}:`, error);
    throw error;
  }
};

// Create a new post
export const createPost = async (post: NewPost) => {
  try {
    // Validate the new post with Zod
    const validatedPost = newPostSchema.parse(post);

    const postToCreate = {
      ...validatedPost,
      createdAt: new Date().toISOString(),
    };

    const createdPost = await asyncStorageMockService.post(
      ENTITY_TYPE,
      postToCreate
    );

    return postSchema.parse(createdPost);
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

// Update a post
export const updatePost = async (id: string, post: Partial<Post>) => {
  try {
    // Partial validation for update
    // Only validate the fields that are present in the update
    Object.keys(post).forEach((key) => {
      if (key in postSchema.shape) {
        // @ts-ignore - Dynamic access
        const field = post[key];
        // @ts-ignore - Dynamic access
        postSchema.shape[key].parse(field);
      }
    });

    // Create the updated entity with the required ID
    const updatedEntity = {
      id: id, // Make sure to use 'id' not '_id'
      ...post,
    };

    const updatedPost = await asyncStorageMockService.put(
      ENTITY_TYPE,
      id,
      updatedEntity
    );

    return postSchema.parse(updatedPost);
  } catch (error) {
    console.error(`Error updating post ${id}:`, error);
    throw error;
  }
};

// Delete a post
export const deletePost = async (id: string) => {
  try {
    await asyncStorageMockService.remove(ENTITY_TYPE, id);
  } catch (error) {
    console.error(`Error deleting post ${id}:`, error);
    throw error;
  }
};

// REAL API IMPLEMENTATION USING AXIOS
// Uncomment the code below and comment out the localStorage implementation to use a real API
// ------------------------------------------------------------------------

/*
// Get all posts
export const getPosts = async (category?: string): Promise<Post[]> => {
  try {
    const url = category ? `/posts?category=${category}` : '/posts';
    const response = await api.get(url);
    return z.array(postSchema).parse(response.data);
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

// Get a single post by ID
export const getPostById = async (id: string): Promise<Post> => {
  try {
    const response = await api.get(`/posts/${id}`);
    return postSchema.parse(response.data);
  } catch (error) {
    console.error(`Error fetching post ${id}:`, error);
    throw error;
  }
};

// Create a new post
export const createPost = async (post: NewPost): Promise<Post> => {
  try {
    const validatedPost = newPostSchema.parse(post);
    const postToCreate = {
      ...validatedPost,
      createdAt: new Date().toISOString(),
    };
    
    const response = await api.post('/posts', postToCreate);
    return postSchema.parse(response.data);
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

// Update a post
export const updatePost = async (id: string | number, post: Partial<Post>): Promise<Post> => {
  try {
    Object.keys(post).forEach(key => {
      if (key in postSchema.shape) {
        // @ts-ignore - Dynamic access
        postSchema.shape[key].parse(post[key]);
      }
    });
    
    const response = await api.patch(`/posts/${id}`, post);
    return postSchema.parse(response.data);
  } catch (error) {
    console.error(`Error updating post ${id}:`, error);
    throw error;
  }
};

// Delete a post
export const deletePost = async (id: string | number): Promise<void> => {
  try {
    await api.delete(`/posts/${id}`);
  } catch (error) {
    console.error(`Error deleting post ${id}:`, error);
    throw error;
  }
};
*/
