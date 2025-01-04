
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-3xl font-normal tracking-wide mx-2 w-10">
          <span className="text-4xl text-purple-200">S</span>ADEE
        </h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a 
          href="https://www.linkedin.com/in/sandani-dhammage/"
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/SandaniDhammage" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-gray-700"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.instagram.com/sadee01_/profilecard/?igsh=MXJoNG95dGNua3k2aQ==" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-pink-500"
        >
          <FaInstagram />
        </a>
        <a 
          href="https://www.figma.com/files/team/1320276785026890986/recents-and-sharing?fuid=1320276780474359856" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-purple-500"
        >
          <FiFigma />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
