import { useState } from "react";
import { useSendMessage } from "../api/service/messageService";
import toast from "react-hot-toast";

const ContactPage = () => {
  const [messages, setMessages] = useState({
    fName: "",
    lName: "",
    email: "",
    subject: "",
    message: "",
  });
  const { mutate } = useSendMessage();

  const handleChange = (name) => (e) => {
    setMessages({
      ...messages,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(messages, {
      onSuccess: () => {
        toast.success("Message sent successfully!");
        setMessages({
          fName: "",
          lName: "",
          email: "",
          subject: "",
          message: "",
        });
      },
      onError: (error) => {
        toast.error(
          error.response?.data?.message ||
            "An error occurred while sending the message."
        );
      },
    });
  };

  const { fName, lName, email, subject, message } = messages;
  return (
    <div className="w-full min-h-screen bg-[#FCEDC6] flex flex-col items-center">
      <header className="w-full bg-[#FCEDC6] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h2 className="uppercase text-lg font-bold tracking-wide text-[#1D2130]">
              Contact Us
            </h2>
            <div className="w-16 border-t-2 border-[#1D2130] mt-1"></div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="max-w-lg">
              <h1 className="text-3xl md:text-5xl font-bold text-[#1D2130] leading-[120%] ">
                We&apos;d love to hear from you
              </h1>
              <p className="mt-4 text-lg text-[#1D2130] opacity-70 leading-[160%] text-justify">
                Have any questions or inquiries? Please feel free to contact us
                through the form or the following details.
              </p>
            </div>

            <div className="mt-8 lg:mt-0">
              <h3 className="text-2xl font-bold text-[#1D2130]">
                Let&apos;s talk!
              </h3>
              <p className="mt-2 text-lg text-[#1D2130]">
                Email:{" "}
                <span className="font-medium">sahayogisaathi@gmail.com</span>
              </p>
              <div className="border-t mt-4 border-gray-300 w-full"></div>

              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-[#1D2130] text-xl">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-[#1D2130] text-xl">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-[#1D2130] text-xl">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="w-full bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="fName"
                  className="block text-sm font-bold text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="fName"
                  value={fName}
                  onChange={handleChange("fName")}
                  placeholder="First Name"
                  className="w-full border-b border-black focus:outline-none focus:border-gray-500 text-gray-900 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lName}
                  onChange={handleChange("lName")}
                  placeholder="Last Name"
                  className="w-full border-b border-black focus:outline-none focus:border-gray-500 text-gray-900 py-2"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700">
                  Email Id
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={handleChange("email")}
                  placeholder="example@example.com"
                  className="w-full border-b border-black focus:outline-none focus:border-gray-500 text-gray-900 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={handleChange("subject")}
                  placeholder="Your subject"
                  className="w-full border-b border-black focus:outline-none focus:border-gray-500 text-gray-900 py-2"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700">
                Message
              </label>
              <textarea
                value={message}
                onChange={handleChange("message")}
                placeholder="Type your message"
                className="w-full border border-black focus:outline-none focus:border-gray-500 text-gray-900 py-2 px-3 rounded-md h-32 resize-none"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-yellow-400 text-black font-medium rounded-md hover:bg-yellow-500 transition duration-300"
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

export default ContactPage;
