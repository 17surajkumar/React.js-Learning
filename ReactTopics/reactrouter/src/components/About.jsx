const About = () => {
  const skills = [
    "React",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "Node.js",
    "Firebase",
    "Vite",
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 animate-fade-in">
      <h1 className="text-4xl font-bold text-center mb-4 text-slate-900">
        About Me
      </h1>
      <p className="text-center text-slate-500 mb-12">
        A little bit about my journey and skills.
      </p>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left column for text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-indigo-600">My Story</h2>
          <p className="text-slate-600 leading-relaxed">
            Hello! I'm a dedicated web developer with a knack for creating
            engaging user interfaces and robust back-end systems. My journey
            into code started years ago, and since then, I've been hooked on
            turning complex problems into elegant, user-friendly solutions.
          </p>
          <p className="text-slate-600 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies or
            contributing to open-source projects.
          </p>
        </div>

        {/* Right column for skills */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
            My Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
