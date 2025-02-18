export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-[#FCEDC6] flex flex-col items-center">
      {/* Header Section */}
      <header className="w-full bg-[#FCEDC6] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Contact Us Title */}
          <div className="mb-6">
            <h2 className="uppercase text-lg font-bold tracking-wide text-[#1D2130]">
              Contact Us
            </h2>
            <div className="w-16 border-t-2 border-[#1D2130] mt-1"></div>
          </div>

          {/* Main Heading and Description */}
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="max-w-lg">
              <h1 className="text-3xl md:text-5xl font-bold text-[#1D2130] leading-[120%] ">
                We&apos;d love to hear from you
              </h1>
              <p className="mt-4 text-lg text-[#1D2130] opacity-70 leading-[160%] text-justify">
                Have any question in mind or want to enquire? Please feel free
                to contact us through the form or the following details.
              </p>
            </div>

            {/* Contact Details */}
            <div className="mt-8 lg:mt-0">
              <h3 className="text-2xl font-bold text-[#1D2130]">
                Let&apos;s talk!
              </h3>
              <p className="mt-2 text-lg text-[#1D2130]">
                Phone number:{" "}
                <span className="font-medium">sahayogisathi@mail.com</span>
              </p>
              <div className="border-t mt-4 border-gray-300 w-full"></div>

              <h3 className="mt-4 text-xl font-bold text-[#1D2130]">
                Head Office
              </h3>
              <p className="text-lg text-[#525560]">
                8 Brewery Drive, Lagos, Nigeria.
              </p>

              {/* Social Media Links */}
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

      {/* Contact Form Section */}
      <div className="w-full bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-md">
          <form className="space-y-6">
            {/* First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border-b border-black focus:outline-none focus:border-gray-500 text-gray-900 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border-b border-black focus:outline-none focus:border-gray-500 text-gray-900 py-2"
                />
              </div>
            </div>

            {/* Email & Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700">
                  Email Id
                </label>
                <input
                  type="email"
                  placeholder="example@example.com"
                  className="w-full border-b border-black focus:outline-none focus:border-gray-500 text-gray-900 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Your subject"
                  className="w-full border-b border-black focus:outline-none focus:border-gray-500 text-gray-900 py-2"
                />
              </div>
            </div>

            {/* Message Box */}
            <div>
              <label className="block text-sm font-bold text-gray-700">
                Message
              </label>
              <textarea
                placeholder="Type your message"
                className="w-full border border-black focus:outline-none focus:border-gray-500 text-gray-900 py-2 px-3 rounded-md h-32 resize-none"
              />
            </div>

            {/* Submit Button */}
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
}
