import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/cats">Cats</Link>
      <Link to="/create">Create</Link>
    </nav>
  );
}

export default Navbar;
