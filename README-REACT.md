# MechClarity - React + Vite + Tailwind

A modern, responsive web application for academic resources, timetables, and notes.

## Features

- 🎨 Beautiful UI with Tailwind CSS
- ⚡ Lightning-fast with Vite
- 📱 Fully responsive design
- 🖼️ Custom background images
- 📚 Books & PDFs library
- 📅 Interactive timetable
- 📝 Subject-wise notes
- 🔗 Quick links to important resources

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- PostCSS & Autoprefixer

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
MechClarity/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── TimeAndBooks.jsx
│   │   ├── Notes.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── Images/
│   └── background1.png (and other images)
├── Documents and Books/
│   └── (PDF files)
├── index-react.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Customization

### Background Image

The background image is set in `tailwind.config.js`:

```js
backgroundImage: {
  'mountain-night': "url('/Images/background1.png')",
}
```

### Adding New Notes

Edit `src/components/Notes.jsx` and add to the `notesData` object.

### Updating Timetable

Modify the `timetable` array in `src/components/TimeAndBooks.jsx`.

## Developed By

Pradeep Kumawat

## License

MIT
