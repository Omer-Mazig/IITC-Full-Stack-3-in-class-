import { Article } from "./conponents/article";
import { MainNav } from "./conponents/main-nav";

const links = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Contact",
    to: "/contact",
  },
  {
    label: "About",
    to: "/about",
  },
];

export default function App() {
  return (
    <>
      <MainNav
        links={links}
        color="red"
      />

      <main className="flex flex-col mt-6 mx-4">
        <h1 className="my-4">My App</h1>
        <div className="flex flex-wrap gap-4">
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </main>
    </>
  );
}
