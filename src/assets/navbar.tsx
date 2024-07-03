export default function Navbar() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 text-textPrimary py-5 px-6 md:px-10 shadow-lg">
      <p className="cursor-pointer text-lg">
        <span className="font-bold text-lightBlue">H</span>
        <span className="font-normal text-textSecondary">asitha</span>
        <span className="font-bold ml-1 text-lightBlue">D</span>
        <span className="font-normal text-textSecondary">hananjaya</span>
      </p>

      <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-4 md:mt-0 text-center md:text-left md:ml-auto">
        <p className="cursor-pointer font-bold hover:text-hoverSecondary">
          About Me
        </p>
        <p className="cursor-pointer font-bold hover:text-hoverSecondary">
          Skills
        </p>
        <p className="cursor-pointer font-bold hover:text-hoverSecondary">
          Projects
        </p>
        <p className="cursor-pointer font-bold hover:text-hoverSecondary">
          Contact
        </p>
      </div>

      <button
        type="button"
        className="mt-4 md:mt-0 cursor-pointer px-4 py-2 bg-lightBlue text-primary font-bold rounded-lg hover:bg-hoverPrimary transition duration-300"
      >
        Hire Me!
      </button>
    </div>
  );
}
