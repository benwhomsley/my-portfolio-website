'use client'

const ContactForm = () => {
  return (
    <form
        name="contact"
        method="POST"
        data-netlify={true}
        className="w-full max-w-lg mt-10 bg-black/60 rounded-xl shadow-lg p-8 flex flex-col gap-6 border border-gray-800"
        hidden
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-gray-200 font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-gray-200 font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-gray-200 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition resize-none"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-yellow-300 text-black font-semibold px-6 py-2 rounded-lg shadow hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
        >
          Send
        </button>
      </form>
  )
}

export default ContactForm
