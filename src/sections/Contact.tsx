import { links } from '@/config'
import { FaTwitter, FaLinkedin, FaDev, FaGithub } from 'react-icons/fa'

function Contact() {
  return (
    <section
      id="contact"
      className="py-16 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-gray-100">
          Get in Touch
        </h2>
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          Have a question or want to discuss a project?
          I’m always open to freelance or full-time opportunities.
          Reach out using the email below or follow me on social media.
        </p>

        <a
          href={`mailto:${links.email}`}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors inline-block"
        >
          Send Email
        </a>

        <div className="mt-8">
          <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
            Follow me on:
          </p>
          <ul className="flex flex-wrap gap-6 justify-center">
            <li>
              <a
                href={links.tweeter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                <FaTwitter size={20} />
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                <FaLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                <FaGithub size={20} />
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a
                href={links.devto}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                <FaDev size={20} />
                <span>dev.to</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact
