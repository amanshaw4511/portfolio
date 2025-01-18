function About() {
  return (
    <section
      id="about"
      className="py-16 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          About Me
        </h2>
        <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
          I’m Aman Kumar Saw, a Senior Software Engineer based in Chennai,
          India, with 4+ years of experience in microservices, event-driven
          architectures, and system design. Leveraging deep expertise in Java,
          Spring Boot and DevOps, I specialize in creating scalable,
          fault-tolerant solutions for financial and enterprise applications.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Beyond coding, I’m passionate about mentoring fellow developers,
          conducting thorough code reviews, and fostering a collaborative
          engineering culture. My goal is to deliver robust, future-proof
          platforms that effectively address both business and technical
          challenges.
        </p>
        <div className="text-lg text-gray-700 dark:text-gray-300 mt-3">
          <h3 className="text-2xl font-semibold mb-1 text-gray-900 dark:text-gray-100">
            Hobbies &amp; Interests
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Exploring new technologies, especially programming languages. I
              primarily use
              <strong> Java</strong> and <strong>TypeScript</strong> at work,
              but have also dabbled in <strong>Python</strong>,{" "}
              <strong>Bash</strong>, <strong>Rust</strong>,
              <strong> Haskell</strong>, <strong>Lua</strong>, and{" "}
              <strong>Scala</strong>. Most recently, I’ve been learning{" "}
              <strong>Go</strong>.
            </li>
            <li>
              Tweaking my Linux and terminal setup for improved UX and
              efficiency. I regularly create CLI tools and scripts with{" "}
              <strong>Python </strong>
              and <strong>Bash</strong>, and generally prefer CLI solutions over
              GUIs.
            </li>
            <li>
              Enjoy playing chess in my free time. Check out my
              <a
                href="https://www.chess.com/member/amanshaw4511"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
              >
                chess.com
              </a>{" "}
              profile.
            </li>
            <li>
              Beyond coding and computers, I have a keen interest in philosophy
              and love exploring different schools of thought.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
