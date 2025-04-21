const Header = () => {
  return (
    <header className="min-h-16 w-full py-4 flex justify-around items-center flex-wrap gap-4 border-b border-gray-200 text-base">
      {/* Logo */}
      <div className="flex content-center items-center">
        <a href="" className="flex content-center items-center">
          <img src="/logo.svg" alt="Logo" />
        </a>
      </div>
      {/* NavBar */}
      <nav className="hidden md:block">
        <ul className="flex gap-10 text-gray-500 ">
          <li>
            <a
              href=""
              className="hover:text-black hover:underline hover:text-lg"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-black hover:underline hover:text-lg"
            >
              About
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-black hover:underline hover:text-lg"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-black hover:underline hover:text-lg"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-black hover:underline hover:text-lg"
            >
              Careers
            </a>
          </li>
        </ul>
      </nav>
      {/* Button to Request */}
      <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white md:px-6 md:py-2 md:text-base px-4 py-2 text-sm rounded-full font-semibold shadow-md hover:from-green-500 hover:to-blue-600 transition-all">
        Request Invite
      </button>
    </header>
  );
};

export default Header;
