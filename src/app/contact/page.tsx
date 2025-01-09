export default function Contact() {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
        <p className="text-lg mb-8 text-gray-400">
          Feel free to reach out via the form below or through my email or social media links!
        </p>
        <div className="w-full max-w-md border-dashed border-2 border-green-500 p-6">
          {/* Contact Form */}
          <form
            action="https://formsubmit.co/your-email@example.com"
            method="POST"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 bg-gray-700 text-white focus:outline-none focus:ring focus:ring-green-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 bg-gray-700 text-white focus:outline-none focus:ring focus:ring-green-500"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full p-3 bg-gray-700 text-white focus:outline-none focus:ring focus:ring-green-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 hover:bg-green-600 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* Additional Contact Information */}
        <div className="mt-8 text-center">
          <p className="text-gray-400">Email: your-email@example.com</p>
          <p className="text-gray-400">Phone: +123 456 7890</p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline"
            >
              Twitter
            </a>
          </div>
        </div>
      </section>
    );
  }
  