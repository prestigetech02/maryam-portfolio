# Oladunjoye Maryam - Social Media Portfolio

A modern, sophisticated, and clean one-page portfolio website for a Social Media Manager and Graphic Designer. Built with React, Vite, and Framer Motion for smooth animations.

## Features

- 🎨 **Modern Design**: Clean and sophisticated UI with gradient accents
- 🌓 **Dark/Light Mode**: Seamless theme switching with persistent storage
- ✨ **Smooth Animations**: Entrance animations and scroll-triggered effects using Framer Motion
- 📱 **Fully Responsive**: Optimized for all device sizes
- 🎯 **User-Centered**: Intuitive navigation and clear information hierarchy
- ⚡ **Fast Performance**: Built with Vite for optimal loading times

## Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Professional summary with key statistics
- **Skills & Tools**: Showcase of core skills and platforms
- **Experience**: Timeline view of work experience
- **Education**: Educational background
- **Contact**: Contact information and social links

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Framer Motion**: Animation library
- **CSS3**: Styling with CSS Variables for theming

## Customization

### Changing Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --accent: #6366f1;
  --gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* ... */
}
```

### Updating Content

All content is located in the component files within `src/components/`. Simply edit the JSX and data arrays to update your information.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for personal portfolio use.

