import OurServices from "@/components/our-services";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold">Welcome to the Cat App</h1>
      <nav className="mt-5">
        <Link
          to="/cats"
          className="text-blue-500 underline mr-4"
        >
          View Cats
        </Link>
        <Link
          to="/create"
          className="text-blue-500 underline"
        >
          Create a Cat
        </Link>
      </nav>
      <OurServices />
      {/* <Counter /> */}
    </div>
  );
};
export default HomePage;
