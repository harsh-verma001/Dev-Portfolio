# Developer Portfolio

A modern, responsive developer portfolio website with design aesthetics. This project features smooth animations, a dark theme, and a clean, professional layout to showcase my skills and projects.

## Live Demo

Check out the live demo: [Developer Portfolio](https://same-nszj8dcupch-latest.netlify.app/)

## Features

- **Modern Design**: Minimalist and clean UI
- **Responsive Layout**: Works seamlessly on all devices
- **Smooth Animations**: Engaging micro-interactions with Framer Motion
- **Dark Mode**: Dark theme with gradient accents
- **Interactive Sections**:
  - Hero section with animated elements
  - About section with career timeline
  - Projects showcase with filterable cards
  - Skills section with animated progress bars
  - Contact form with validation

## Tech Stack

- **Next.js**: React framework for production
- **TypeScript**: For type safety
- **Tailwind CSS**: For styling
- **Framer Motion**: For animations
- **Shadcn/UI**: Component library

## Getting Started

### Prerequisites

Make sure you have Node.js and npm/bun installed on your system.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/dev-portfolio.git
   cd dev-portfolio
   ```

2. Install dependencies:

   ```bash
   # Using npm
   npm install

   # Using bun (recommended)
   bun install
   ```

3. Run the development server:

   ```bash
   # Using npm
   npm run dev

   # Using bun (recommended)
   bun run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

To build the project for production:

```bash
# Using npm
npm run build

# Using bun (recommended)
bun run build
```

To deploy as a static site:

```bash
./build.sh
```

This will create a zip file `portfolio-build.zip` that you can deploy to a static hosting service like Netlify, Vercel, or GitHub Pages.

## Customization

### Personal Information

To customize the portfolio with your information:

1. Update the project data in `src/components/sections/ProjectsSection.tsx`
2. Update the skills data in `src/components/sections/SkillsSection.tsx`
3. Update the timeline in `src/components/sections/AboutSection.tsx`
4. Modify contact information in `src/components/sections/ContactSection.tsx`

### Styling

The project uses Tailwind CSS for styling. You can customize the theme by modifying the `tailwind.config.ts` file.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Design inspiration from [Stripe](https://stripe.com)
- Images from [Unsplash](https://unsplash.com)
