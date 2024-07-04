import { FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const whatsappNumber = "+94784375524"; // Your phone number in international format
  return (
    <div className="p-8 bg-dark text-textPrimary">
      <div className="text-center mb-10">
        {/* <h2 className="text-xl font-bold">Let's Talk Now</h2> */}
        <p className="text-3xl font-bold text-center my-3 text-textPrimary mt-20">
          <span className="text-lightBlue">L</span>et's Talk
          <span className="text-lightBlue ml-2">Now</span>
        </p>
      </div>
      <div className="md:flex md:justify-between">
        <div className="md:w-1/2 md:mr-8">
          <h3 className="text-3xl font-bold mb-4">
            Do You Have A Project In Your Mind?
          </h3>
          <p className="mb-8">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
          <h4 className="text-2xl font-bold mb-4">Services</h4>
          <ul className="mb-8">
            <li className="mb-2">✔ Web Development</li>
            <li className="mb-2">✔ App Development</li>
          </ul>
          <h4 className="text-2xl font-bold mb-4">Follow On</h4>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/hasitha-dhananjaya-337baa226/"
              className="text-lightBlue hover:text-hoverPrimary"
              target="_blank"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100082554939780&mibextid=ZbWKwL"
              className="text-lightBlue hover:text-hoverPrimary"
              target="_blank"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              className="text-lightBlue hover:text-hoverPrimary"
              target="_blank"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 bg-primary p-6 rounded-lg shadow-lg">
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-lg bg-dark text-lightBlue border border-lightBlue"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg bg-dark text-lightBlue border border-lightBlue"
              />
            </div>

            <div className="mb-4">
              <textarea
                placeholder="Write Message"
                className="w-full p-3 rounded-lg bg-dark text-lightBlue border border-lightBlue"
                rows={4}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full p-3 rounded-lg bg-lightBlue text-white font-bold hover:bg-hoverPrimary"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
