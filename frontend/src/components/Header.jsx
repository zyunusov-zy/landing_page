import { AlignJustify, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" sticky top-0 min-h-16 w-full py-4 flex justify-between lg:justify-around items-center flex-wrap gap-4 border-b border-gray-200 text-base z-50 bg-white">
      {/* Logo */}
      <div className="flex content-center items-center lg:ml-0 ml-7">
        <a href="" className="flex content-center items-center">
          <img src="/logo.svg" alt="Logo" />
        </a>
      </div>
      {/* NavBar */}
      <nav className="hidden lg:block font-semibold">
        <ul className="flex gap-10 text-gray-500 ">
          <li>
            <a
              href=""
              className="hover:text-black hover:underline hover:text-lg transition-all"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-black hover:underline hover:text-lg transition-all"
            >
              About
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-black hover:underline hover:text-lg transition-all"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-black hover:underline hover:text-lg transition-all"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-black hover:underline hover:text-lg transition-all"
            >
              Careers
            </a>
          </li>
        </ul>
      </nav>

      {isMenuOpen ? (
        <X
          className="mr-4 lg:hidden cursor-pointer sm:w-8 sm:h-8"
          onClick={toggleMenu}
        />
      ) : (
        <AlignJustify
          className="mr-4 lg:hidden cursor-pointer sm:w-8 sm:h-8"
          onClick={toggleMenu}
        />
      )}

      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-6 w-64 z-40 lg:hidden">
          <ul className="flex flex-col gap-4 text-gray-700 font-semibold">
            {["Home", "About", "Contact", "Blog", "Careers"].map((item) => (
              <li key={item}>
                <a
                  href=""
                  className="hover:text-black hover:underline transition-all"
                  onClick={() => setIsMenuOpen(false)} // close on click
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button className="mt-4 w-full bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 text-sm rounded-full font-semibold shadow-md hover:from-green-500 hover:to-blue-600 transition-all">
            Request Invite
          </button>
        </div>
      )}

      {/* Button to Request */}
      <button className="hidden lg:block bg-gradient-to-r from-green-400 to-blue-500 text-white md:px-6 md:py-2 md:text-base px-4 py-2 text-sm rounded-full font-semibold shadow-md hover:from-green-500 hover:to-blue-600 transition-all">
        Request Invite
      </button>
    </header>
  );
};

export default Header;
