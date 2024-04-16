import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
const ContactUs = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  useEffect(() => nameRef.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Wow! Message successfully sent!");
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
    nameRef.current.focus();
  };
  return (
    <div className="max-w-[1300px] h-screen mx-auto ">
      <div className="flex flex-col  lg:h-screen justify-center mt-5 items-center mb-6 lg:mb-12">
      <div data-aos="fade-up" className="w-full text-center">
        <h1 className="text-4xl font-semibold text-gray-700 mb-2">
          Contact Us
        </h1>
        <hr className="w-full my-8 bg-gray-300 h-[1px]" />
      </div>

      <div
        data-aos="fade-left"
        data-aos-duration="600"
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 "
      >
        <div className="border-[1px] rounded-2xl bg-gray-100 flex flex-col justify-center items-center text-start">
          <div className="">
            <h3 className="text-2xl font-bold text-center">
              Contact Information
            </h3>
            <hr className="w-full my-4 bg-gray-300 h-[1px]" />

            <h3 className="font-lg text-gry-500 font-medium mb-2">
              <span className="font-bold">Email:</span> info@nexusproperty.com
            </h3>

            <h3 className="font-lg text-gry-500 font-medium mb-2">
              <span className="font-bold">Phone:</span> +1 (123) 456-7890
            </h3>

            <div className="font-lg flex text-gry-500 gap-2 font-medium mb-2 items-start">
              <span className=" font-bold">Address:</span>
              <p className="max-w-[150px]">
                123 Main Street Springfield, Anytown, USA
              </p>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-duration="600"
          className=""
        >
          <div className="contact-page bg-gray-100 p-6 rounded-2xl w-full">
            <h3 className="text-2xl font-semibold text-center">Message Us</h3>
            <p className="my-4 text-justify">
              We'd love to hear from you! Whether you have a question,
              suggestion, or just want to say hello, feel free to reach out to
              us using the form below.
            </p>

            <hr className="w-full my-6 bg-gray-300 h-[1px]" />

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 lg:grid-cols-2 gap-3"
            >
              <div className="form-group">
                <label className="font-medium" htmlFor="name">
                  YOUR FULL NAME:
                </label>
                <br />
                <input
                  ref={nameRef}
                  placeholder="Your Full Name"
                  className="p-5 bg-white border-[1px] h-10 w-full rounded-[5px]"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="form-group">
                <label className="font-medium" htmlFor="email">
                  YOUR EMAIL ADDRESS:
                </label>
                <br />
                <input
                  ref={emailRef}
                  placeholder="Your Email Address"
                  className="p-5 bg-white border-[1px] h-10 w-full rounded-[5px]"
                  type="email"
                  required
                />
              </div>
              <div className="form-group lg:col-span-2">
                <label className="font-medium">YOUR MESSAGE:</label>
                <br />
                <textarea
                  ref={messageRef}
                  placeholder="Type Your Message Here"
                  className="p-5 bg-white border-[1px] w-full h-[200px] rounded-[5px]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full lg:col-span-2 rounded-[5px] btn bg-cmnBG text-white text-xl font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
