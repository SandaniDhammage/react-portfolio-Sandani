
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";
import { FiFigma } from 'react-icons/fi';

const Navbar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-6 ">
    <div className="flex flex-shrink-0 items-center">
    <h1 className=" text-3xl font-normal tracking-wide mx-2 w-10">
        <span className="text-4xl text-purple-200">S</span>ADEE
    </h1>

    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <FaLinkedin/>
      <FaGithub/>
      <FaInstagram/>
      <FiFigma/>
    </div>
  </nav>
};

export default Navbar