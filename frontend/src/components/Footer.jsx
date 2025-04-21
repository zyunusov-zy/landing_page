import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-[#2d2e40] text-white py-10 px-6 md:px-20 flex justify-around items-center flex-wrap text-base gap-4">
      {/* logo and social media */}
      <div className="flex flex-col gap-4">
        <img src="/logo.svg" alt="Logo" className="invert brightness-0"/>
        <div className="flex gap-2">
          <Instagram className="w-6 h-6 text-white hover:text-green-400 transition-colors duration-200" />
          <Facebook className="w-6 h-6 text-white hover:text-green-400 transition-colors duration-200" />
          <Twitter className="w-6 h-6 text-white hover:text-green-400 transition-colors duration-200" />
          <Youtube className="w-6 h-6 text-white hover:text-green-400 transition-colors duration-200" />
        </div>
      </div>

      {/* Navbar */}
      <nav className=" gap-20 text-gray-300 font-semibold hidden md:flex">
        <ul className="flex flex-col gap-2">
          <li>
            <a href="" className="hover:text-green-300 hover:underline transition-all">
              About Us
            </a>
          </li>
          <li>
            <a href="" className="hover:text-green-300 hover:underline transition-all">
              Contact
            </a>
          </li>
          <li>
            <a href="" className="hover:text-green-300 hover:underline transition-all">
              Blog
            </a>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li>
            <a href="" className="hover:text-green-300 hover:underline transition-all">
              Careers
            </a>
          </li>
          <li>
            <a href="" className="hover:text-green-300 hover:underline transition-all">
              Support
            </a>
          </li>
          <li>
            <a href="" className="hover:text-green-300 hover:underline transition-all">
              Privacy Policy
            </a>
          </li>
        </ul>
      </nav>

      {/* Button */}
      <div className="flex flex-col gap-5 justify-center items-end">
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white md:px-6 md:py-2 md:text-base px-4 py-2 text-sm rounded-full font-semibold shadow-md hover:from-green-500 hover:to-blue-600 transition-all">
          Request Invite
        </button>
        <p className="text-xs text-gray-400">ⒸEasybank. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
