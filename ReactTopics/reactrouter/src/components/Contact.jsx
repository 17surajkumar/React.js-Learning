const Contact = () => {
  return (
    <div className="max-w-xl mx-auto p-4 animate-fade-in">
      <h1 className="text-4xl font-bold text-center mb-4 text-slate-900">
        Get In Touch
      </h1>
      <p className="text-center text-slate-500 mb-10">
        Have a question or want to work together? Feel free to reach out!
      </p>

      <form className="space-y-6 bg-white p-8 rounded-lg shadow-md">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-slate-700"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-white transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
