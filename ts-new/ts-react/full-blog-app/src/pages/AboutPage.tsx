import { Link, Outlet, useLocation } from "react-router-dom";

const AboutPage = () => {
  const location = useLocation();
  const isRootAbout = location.pathname === "/about";

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About Our Blog</h1>

        {/* Navigation tabs for nested routes */}
        <div className="flex border-b border-gray-200 mb-6">
          <Link
            to="/about"
            className={`px-4 py-2 font-medium ${
              isRootAbout
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Overview
          </Link>
          <Link
            to="/about/team"
            className={`px-4 py-2 font-medium ${
              location.pathname === "/about/team"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Our Team
          </Link>
          <Link
            to="/about/vision"
            className={`px-4 py-2 font-medium ${
              location.pathname === "/about/vision"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Our Vision
          </Link>
        </div>

        {/* Render the nested route content or default content */}
        {isRootAbout ? (
          <div>
            <p className="mb-4">
              Welcome to our blog! This is a demonstration project showcasing
              various React technologies and patterns including:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>React with TypeScript</li>
              <li>Tailwind CSS for styling</li>
              <li>React Router for navigation</li>
              <li>React Query for data fetching and caching</li>
              <li>Zod for schema validation</li>
              <li>Axios for API requests</li>
              <li>JSON Server for a mock backend</li>
            </ul>
            <p>
              Explore the nested routes by clicking on the tabs above to learn
              more about our team and vision.
            </p>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </>
  );
};

export default AboutPage;
