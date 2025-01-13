export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* <h1 className="text-green-500 text-center text-lg sm:text-xl md:text-2xl font-bold mb-4">
          Get in Touch
        </h1> */}
        <h1 className="text-4xl sm:text-5xl font-bold text-green-500 mb-4">
          Get in Touch
        </h1>
        <p className="text-gray-400 text-center text-sm sm:text-base mb-6">
          Feel free to reach out via the form below or through my email or social media links!
        </p>
      <div className="border-dashed border-2 border-green-500 p-4 sm:p-6 max-w-3xl w-full">
        <form
          action="https://formsubmit.co/adharmawijaya@gmail.com"
          method="POST"
          className="flex flex-col gap-6"
        >
          <label className="w-full flex flex-col text-green-500">
            Name:
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="bg-transparent border-b border-green-500 p-2 mt-2 text-white focus:outline-none"
            />
          </label>

          <label className="w-full flex flex-col text-green-500">
            Email:
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="bg-transparent border-b border-green-500 p-2 mt-2 text-white focus:outline-none"
            />
          </label>

          <label className="w-full flex flex-col text-green-500">
            Message:
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="bg-transparent border-b border-green-500 p-2 mt-2 text-white focus:outline-none"
            ></textarea>
          </label>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 hover:bg-green-600 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-8 text-center">
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline"
          >
            GitHub
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
