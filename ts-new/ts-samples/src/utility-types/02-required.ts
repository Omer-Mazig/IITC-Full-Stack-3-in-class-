() => {
  /**
   * Required<Type>
   *
   * Constructs a type with all properties of Type set to required (removes optionality).
   * The opposite of Partial.
   */

  // Original interface with optional properties
  interface BlogPost {
    title: string;
    content: string;
    author?: string;
    tags?: string[];
    publishDate?: Date;
  }

  // A draft post can have optional fields
  const draftPost: BlogPost = {
    title: "TypeScript Utility Types",
    content:
      "TypeScript provides several utility types to facilitate common type transformations...",
  };

  // But a published post must have all fields (Required)
  function publishPost(post: Required<BlogPost>): void {
    console.log(`Publishing post: ${post.title} by ${post.author}`);
    console.log(`Tags: ${post.tags.join(", ")}`);
    console.log(`Date: ${post.publishDate.toLocaleDateString()}`);
  }

  // This would cause a type error because we're missing required properties
  publishPost(draftPost); // Error: Property 'author' is missing in type 'BlogPost'...

  // We need to provide all properties to satisfy Required<BlogPost>
  const completePost = {
    title: "TypeScript Utility Types",
    content:
      "TypeScript provides several utility types to facilitate common type transformations...",
    author: "John Doe",
    tags: ["typescript", "programming", "web development"],
    publishDate: new Date(),
  };

  // Now this works
  publishPost(completePost);

  // This is equivalent to creating a new type with all required properties:
  type RequiredBlogPost = {
    title: string;
    content: string;
    author: string;
    tags: string[];
    publishDate: Date;
  };
};
