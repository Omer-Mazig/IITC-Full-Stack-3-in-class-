import { useCats } from "@/hooks/use-cats";
import { Link } from "react-router";

function Navbar() {
  const { data: cats, isLoading } = useCats();
  return (
    <div>
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/cats">Cats</Link>
        <Link to="/create">Create</Link>
      </nav>
      <div> {isLoading ? "loading" : cats && cats.length}</div>
    </div>
  );
}

export default Navbar;
