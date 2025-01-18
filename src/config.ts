import { ProjectData } from "./types";

export const links = {
  github: "https://github.com/amanshaw4511",
  devto: "https://dev.to/amanshaw4511",
  linkedin: "https://www.linkedin.com/in/amanshaw4511/",
  tweeter: "https://twitter.com/amanshaw4511",
  email: "amanshaw4511@gmail.com",
  website: "https://amansaw.com",
};

export const blogs = {
  devtoUsername: "amanshaw4511",
}


export const hero = {
  title: "Hi, I'm Aman Saw",
  details: "Senior Software Engineer with a passion for building dynamic, high-performance applications.",
  // make it empty to not desplay open to work
  openToWorkText: "", // "Currently open to new opportunities."
}

export const personal = {
  name: "Aman Saw"
}


export const projectData: ProjectData[] = [
 {
    title: "Developer Tools",
    description:
      "A suite of browser-based utilities for developers, offering JSON/XML formatting, JWT token parsing, base64 encoding, decoding and more to streamline everyday coding tasks",
    techStack: ["Rust", "WebAssebly", "React"],
    githubLink: "https://github.com/amanshaw4511/devtools",
    liveLink: "https://devtools.amansaw.com",
  },
  {
    title: "Jenkinsctl",
    description:
      "jenkinsctl is a CLI tool that puts Jenkins management right in your terminal. It simplifies tasks like listing builds, fetching logs, and triggering parameterized jobs — no more web UI hassle!",
    techStack: ["Python", "CLI", "YAML", "Jenkins"],
    githubLink: "https://github.com/amanshaw4511/jenkinsctl",
    liveLink: "", 
  },
  {
    title: "Redis Server",
    description:
      "Toy Redis Server implementation in java. Supports basic commands commands like GET, SET, INCR, LPUSH, LPOP, LRANGE etc. Supports time based expiry on data and concurrent consumers",
    techStack: ["Java", "TCP", "Concurrency", "Redis"],
    githubLink: "https://github.com/amanshaw4511/fintech-dashboard",
    liveLink: "",
  },
  {
    title: "Personal Portfolio",
    description:
      "My personal website showcasing past and present projects, integrated with a blog section for tech articles from dev.to.",
    techStack: ["React", "Tailwind", "Cloudflare"],
    githubLink: "https://github.com/amanshaw4511/portfolio",
    liveLink: "https://amansaw.com",
  },

];
