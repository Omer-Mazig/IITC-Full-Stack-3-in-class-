# React Blog Application

A full-featured blog application built with React and TypeScript. This project demonstrates the use of modern React technologies and patterns.

## Technologies Used

- **React**: A JavaScript library for building user interfaces
- **TypeScript**: A strongly typed programming language that builds on JavaScript
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development
- **React Router**: For navigation and routing
- **React Query**: For fetching, caching, and updating client state
- **Zod**: For type inference only
- **LocalStorage**: With a Promise-based API wrapper to simulate a backend
- **Axios**: (Commented out implementation) For making HTTP requests to a real backend

## Features

- View a list of blog posts
- Filter posts by category
- View individual post details
- Add comments to posts
- Create new blog posts
- Delete posts and comments
- Nested routes for the About section

## Project Structure

```
src/
├── api/              # API service functions with dual implementation
├── components/       # Reusable UI components
├── context/          # React context providers
├── utils/            # Utility functions including localStorage service
├── hooks/            # Custom React hooks
├── pages/            # Page components
└── types/            # TypeScript types and Zod schemas
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`

## Implementation Options

This project includes two different implementations for the API layer:

### 1. localStorage Implementation (Active by Default)

The project uses the browser's localStorage with a Promise-based API wrapper to simulate a backend. This approach:

- Demonstrates asynchronous data fetching patterns without external dependencies
- Persists data between browser refreshes
- Simulates network delays to mimic real-world conditions
- Uses the same API structure that a real backend would use

### 2. Axios Implementation (Commented Out)

The project also includes a commented-out implementation using Axios for making HTTP requests to a real backend. This approach:

- Shows how to structure API calls to a real REST API
- Demonstrates proper error handling with Axios interceptors
- Can be easily activated by switching the commented sections in the API files

To switch between implementations:

1. In the API files (`src/api/postsApi.ts` and `src/api/commentsApi.ts`), comment out the active implementation
2. Uncomment the alternative implementation
3. If using Axios, make sure your backend server is running

## Learning Objectives

This project demonstrates:

- Setting up a React project with TypeScript and Vite
- Using Tailwind CSS for styling
- Implementing routing with React Router
- Managing client state with React Query
- Creating forms with type safety using Zod for type inference
- Using localStorage with a Promise-based API to simulate backend calls
- Making HTTP requests with Axios (alternate implementation)
- Using React Context for state management
- Creating custom hooks for reusable logic
- Implementing nested routes

## License

MIT
