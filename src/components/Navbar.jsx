import logo from "../assets/shLogo.png";
import { FaLinkedin, FaGithub} from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-15 w-20" src={logo} alt="logo" />
      </div>
      <div className="ml-auto flex items-center justify-center gap-4 text-3xl">
        <a
          href="https://www.linkedin.com/in/shalu-pandey-b0a638294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Shalupandeys"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 hover:text-purple-700"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.hackerrank.com/profile/shalupandeys9876"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 hover:text-green-500"
        >
          <SiHackerrank />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
