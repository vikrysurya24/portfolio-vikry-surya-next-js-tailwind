import Link from "next/link";

import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/vikrysurya24" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/vikry-surya-pangestu-370600161/" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@VikrySuryaPangestu" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/vikrysurya_/" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
