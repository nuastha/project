import { Link } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import { MdMenu } from "react-icons/md";

export default function Header() {
  return (
    <div className="container mx-auto flex justify-between items-center px-4 md:px-6 lg:px-8 py-4 mt-2">
      <Link to="/">
        <img src="/vite.svg" alt="" className="block size-8 sm:size-12" />
      </Link>
      <nav className="">
        <Navbar />
        <MdMenu className="sm:hidden block size-6" />
      </nav>
    </div>
  );
}
