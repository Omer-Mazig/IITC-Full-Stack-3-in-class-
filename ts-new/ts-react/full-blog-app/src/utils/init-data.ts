/**
 * This module initializes the localStorage with sample blog data
 * if it doesn't exist already.
 */

// Initial blog posts data
const initialPosts = [
  {
    id: "1",
    title: "Introduction to React",
    content:
      "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the DOM when data changes.",
    author: "Jane Doe",
    category: "frontend",
    tags: ["react", "javascript", "web development"],
    createdAt: "2023-06-15T10:30:00Z",
  },
  {
    id: "2",
    title: "Getting Started with TypeScript",
    content:
      "TypeScript is a strongly typed programming language that builds on JavaScript. It provides better tooling at any scale and helps catch errors early in the development process.",
    author: "John Smith",
    category: "programming",
    tags: ["typescript", "javascript", "web development"],
    createdAt: "2023-06-20T14:45:00Z",
  },
  {
    id: "3",
    title: "Styling with Tailwind CSS",
    content:
      "Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without ever leaving your HTML. It provides low-level utility classes that let you build completely custom designs.",
    author: "Alex Johnson",
    category: "css",
    tags: ["tailwind", "css", "web design"],
    createdAt: "2023-07-05T09:15:00Z",
  },
  {
    id: "4",
    title: "React Router Fundamentals",
    content:
      "React Router is a standard library for routing in React applications. It enables navigation among views in a React application, allows the browser URL to be changed, and keeps the UI in sync with the URL.",
    author: "Sarah Williams",
    category: "frontend",
    tags: ["react", "routing", "web development"],
    createdAt: "2023-07-12T16:20:00Z",
  },
  {
    id: "5",
    title: "State Management with React Query",
    content:
      "React Query is a library for fetching, caching, and updating asynchronous data in React. It makes fetching, caching, synchronizing, and updating server state in your React applications a breeze.",
    author: "Michael Brown",
    category: "frontend",
    tags: ["react", "state management", "data fetching"],
    createdAt: "2023-07-25T11:10:00Z",
  },
];

// Initial comments data
const initialComments = [
  {
    id: "1",
    postId: "1",
    author: "User123",
    content: "Great introduction to React!",
    createdAt: "2023-06-16T08:45:00Z",
  },
  {
    id: "2",
    postId: "1",
    author: "ReactFan",
    content: "This helped me understand React better. Thanks!",
    createdAt: "2023-06-17T14:30:00Z",
  },
  {
    id: "3",
    postId: "2",
    author: "TypeScriptLover",
    content: "TypeScript has been a game-changer for my projects.",
    createdAt: "2023-06-21T09:20:00Z",
  },
  {
    id: "4",
    postId: "3",
    author: "CSSNinja",
    content: "Tailwind has completely changed how I approach CSS.",
    createdAt: "2023-07-06T10:15:00Z",
  },
  {
    id: "5",
    postId: "4",
    author: "RouterExpert",
    content: "React Router is essential for any serious React application.",
    createdAt: "2023-07-13T12:40:00Z",
  },
];

/**
 * Initialize the localStorage with sample data if it doesn't exist
 */
export function initializeData() {
  // Check if posts exist
  if (!localStorage.getItem("posts")) {
    localStorage.setItem("posts", JSON.stringify(initialPosts));
  }

  // Check if comments exist
  if (!localStorage.getItem("comments")) {
    localStorage.setItem("comments", JSON.stringify(initialComments));
  }
}

// Export initial data for reference
export { initialPosts, initialComments };
