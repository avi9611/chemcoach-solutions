import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGlobe, FiMail, FiBook } from "react-icons/fi";

interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

// Social links array
const socials = [
  {
    icon: <FaLinkedinIn />,
    path: "https://linkedin.com/in/sandeepa-kulala-vittala-5556133a",
  },
  { icon: <FiGlobe />, path: "https://orcid.org/0000-0001-5722-9349" },
  { icon: <FiMail />, path: "mailto:sandeepascube@gmail.com" },
  {
    icon: <FiBook />,
    path: "https://scholar.google.com/citations?user=DmDSB0YAAAAJ&hl=en",
  },
];

// Socials component
const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
