# Portfolio Website 
This is a configurable portfolio website built with React, Tailwind CSS, and Vite. The site showcases your projects, blogs, and personal information, and is designed to be easily customizable to fit your needs.

**Live Link**: [amansaw.com](https://amansaw.com/)
## Features

- **Responsive Design**: The website is fully responsive and works seamlessly on all devices.
- **Dark Mode**: Includes a built-in dark mode toggle for better user experience.
- **Project Showcase**: Display your projects with details like title, description, tech stack, and links to GitHub and live demos.
- **Blog Integration**: Automatically fetches and displays your blog posts from dev.to.
- **Contact Section**: Provides links to your social media profiles and an email contact form.
- **Configurable**: Easily customize the content and appearance through a central configuration file.

## Getting Started
### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation
1. Clone the repository:

```sh
git clone https://github.com/amanshaw4511/portfolio
cd portfolio
```

2. Install dependencies:
```sh
    npm install
```

3. Run the development server:
```sh
    npm run dev
```

4. Open your browser and navigate to http://localhost:3000 to view the website.

## Configuration
The website is configurable through the config.ts file located in the src directory. Here's how you can customize it:

### Personal Information
Update your personal information in the personal object:
```typescript
export const personal = {
  name: "Your Name",
};
```

### Links
Update the links to your social media profiles, website, and email:


```typescript
export const links = {
  github: "https://github.com/your-username",
  devto: "https://dev.to/your-username",
  linkedin: "https://www.linkedin.com/in/your-username/",
  tweeter: "https://twitter.com/your-username",
  email: "your-email@example.com",
  website: "https://your-website.com",
};
```

### Hero Section
Customize the hero section with your title, details, and open-to-work text:

```typescript
export const hero = {
  title: "Hi, I'm Your Name",
  details: "Your job title or a short description about yourself.",
  openToWorkText: "Currently open to new opportunities.", // Leave empty to hide
};
```

### Projects
Add or modify your projects in the projectData array:

```typescript
export const projectData: ProjectData[] = [
  {
    title: "Project Title",
    description: "A brief description of the project.",
    techStack: ["React", "Tailwind", "TypeScript"],
    githubLink: "https://github.com/your-username/project-repo",
    liveLink: "https://project-demo.com", // Leave empty if no live demo
  },
  // Add more projects as needed
];
```

### Blogs
If you want to display your blog posts from dev.to, update the devtoUsername:

```typescript
export const blogs = {
  devtoUsername: "your-devto-username",
};
```typescript


### Customizing Styles
The website uses Tailwind CSS for styling. You can customize the styles by editing the index.css file or by adding custom Tailwind classes directly in the components.

## Deployment
To build the project for production, run:
```sh
npm run build
```
This will generate a dist folder with the production-ready files. You can deploy this folder to any static hosting service like Vercel, Netlify, or GitHub Pages.
