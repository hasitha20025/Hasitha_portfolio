import pic from "/public/pic.jpg";

export default function About() {
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

        <div className="basis-full md:basis-1/2 text-center md:text-left">
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
        </div>
      </div>
    </>
  );
}
