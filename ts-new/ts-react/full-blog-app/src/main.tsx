import { StrictMode } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import { createRoot } from "react-dom/client";
import { initializeData } from "./utils/init-data";
import HomePage from "./pages/HomePage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import PostDetailPage from "./pages/PostDetailPage.tsx";
import TeamPage from "./pages/TeamPage.tsx";
import VisionPage from "./pages/VisionPage.tsx";
import NewPostPage from "./pages/NewPostPage.tsx";
import LoginPage from "./pages/LoginPAge.tsx";
import MainLayout from "./components/MainLayout.tsx";
import AuthLayout from "./components/AuthLayout.tsx";
import { CategoryProvider } from "./context/CategoryContext.tsx";

const isLoggedIn = true; // this should be replaced with actual auth check

function UnauthenticatedRoutes({ children }: { children: React.ReactNode }) {
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
}

function AuthenticatedRoutes({ children }: { children: React.ReactNode }) {
  if (!isLoggedIn) {
    return <Navigate to="/auth/login" />;
  }

  return children;
}

// Create a client with optimized configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // here you can configure default options for ALL queries
    },
  },
});

// Initialize localStorage data
initializeData();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthenticatedRoutes>
        <MainLayout />
      </AuthenticatedRoutes>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "posts/:id",
        element: <PostDetailPage />,
      },
      {
        path: "posts/new",
        element: <NewPostPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
        children: [
          {
            path: "team",
            element: <TeamPage />,
          },
          {
            path: "vision",
            element: <VisionPage />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: (
      <UnauthenticatedRoutes>
        <AuthLayout />
      </UnauthenticatedRoutes>
    ),
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <div>Register</div>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CategoryProvider>
        <RouterProvider router={router} />
      </CategoryProvider>
    </QueryClientProvider>
  </StrictMode>
);
