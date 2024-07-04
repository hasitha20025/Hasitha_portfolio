import pic from "/public/pic.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FaBehanceSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function About() {
  const whatsappNumber = "+94784375524"; // Your phone number in international format
  return (
    <>
      <p className="text-3xl font-bold text-center my-6 text-textPrimary">
        <span className="text-lightBlue">A</span>bout{" "}
        <span className="text-lightBlue">M</span>e
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center md:gap-10 mx-4 md:mx-0">
        <div className="basis-full md:basis-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
          <img
            src={pic}
            alt="Hasitha Dhananjay"
            width="300"
            height="auto"
            className="rounded-lg"
          />
        </div>

        <div className="basis-full md:basis-1/2 text-center md:text-left my-20">
          <p className="text-2xl font-semibold mb-2 text-textPrimary">
            I am Hasitha Dhananjay
          </p>
          <p className="text-xl font-medium text-lightBlue mb-4">
            Full Stack Developer
          </p>
          <p className="text-base text-textSecondary">
            As a Full Stack Developer, I specialize in creating dynamic and
            responsive web applications. With expertise in both front-end and
            back-end technologies, I build seamless and efficient solutions. My
            passion lies in delivering high-quality, user-centric experiences
            that bridge the gap between design and functionality.
          </p>
          <div className="flex text-textSecondary gap-3 mt-5 ">
            <a
              href="https://www.facebook.com/profile.php?id=100082554939780&mibextid=ZbWKwL"
              target="_blank"
              className="hover:text-lightBlue"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/hasitha-dhananjaya-337baa226/"
              target="_blank"
              className="hover:text-lightBlue"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lightBlue"
            >
              <FaWhatsappSquare className="text-2xl" />
            </a>

            <a
              href="mailto:hasitha.soft.lk@gmail.com"
              className="hover:text-lightBlue"
              title="Email Me"
              target="_blank"
            >
              <MdEmail className="text-2xl" />
            </a>

            <a
              href="https://github.com/hasitha20025"
              className="hover:text-lightBlue"
              target="_blank"
            >
              <SiGithub className="text-2xl" />
            </a>
            <a
              href="https://www.behance.net/hasithadhananj2"
              className="hover:text-lightBlue"
              target="_blank"
            >
              <FaBehanceSquare className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
