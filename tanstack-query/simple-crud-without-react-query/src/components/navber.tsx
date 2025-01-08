import { getCats } from "@/services/cat.service";
import { Cat } from "@/types/cat.types";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function Navbar() {
  const [cats, setCats] = useState<Cat[]>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCats = async () => {
      setLoading(true);
      try {
        const data = await getCats();
        setCats(data);
        setError(null);
      } catch (err) {
        setError("Failed to load cats.");
        setCats([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCats();
  }, []);

  return (
    <nav className="flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/cats">Cats</Link>
      <Link to="/create">Create</Link>
      <div>Cats amount {cats.length}</div>
    </nav>
  );
}

export default Navbar;
