# ⚡ Premium Glassmorphic React TODO Application

A beautiful, state-of-the-art React-based task management application featuring a modern glassmorphic dark-theme UI. This application is crafted with customizable CSS variables, Google Fonts (`Outfit`), and smooth micro-animations to offer a premium user experience while keeping your tasks organized.

---

## 🚀 Key Features

- **💎 Glassmorphic Styling**: Sleek semi-transparent panels with backdrop-blur filters (`backdrop-filter`), elegant borders, and soft shadows.
- **✨ Micro-Animations & Glow Effects**: Smooth hover transitions (`transition: all 0.3s cubic-bezier(...)`) and interactive gradient glow effects on inputs and cards.
- **💾 LocalStorage Persistence**: Automatically saves and loads your TODO list using the browser's local storage so you never lose your progress.
- **🛡️ Form Validation**: Prevents adding empty titles or descriptions with user-friendly alerts.
- **📱 Responsive Layout**: Built with a mobile-first philosophy, utilizing a responsive navigation bar and responsive flexbox layouts.
- **🎨 Custom Scrollbar**: Polished, theme-matching scrollbar styling for a consistent aesthetic across all screen dimensions.

---

## 🛠️ Technology Stack

- **Core**: [React 19](https://react.dev/) (powered by React DOM & functional hooks)
- **Styling**: Vanilla CSS3 with CSS Custom Variables (Design Tokens)
- **Fonts**: [Google Fonts (Outfit)](https://fonts.google.com/specimen/Outfit)
- **Build/Dev Server**: React Scripts (Create React App workflow)

---

## 📂 Project Structure

Here is an overview of the key components and codebase structure:

```text
todo-list/
├── public/                 # Static assets
└── src/
    ├── Components/         # React components
    │   ├── AddTodo.js      # Form input handler for adding new tasks
    │   ├── Footer.js       # Footer component with copyright text
    │   ├── Header.js       # Navigation bar with branding & search UI
    │   ├── TodoItem.js     # Single todo card displaying title, description & delete button
    │   └── Todos.js        # Todo list wrapper handling lists & empty states
    ├── App.css             # Main styling, cards, inputs, and button components
    ├── App.js              # Application root, State management, LocalStorage effects
    ├── index.css           # Global design tokens, gradients, custom scrollbar, and body layout
    └── index.js            # React entry point
```

### File Navigation Links:
- [src/App.js](file:///c:/Users/Abcom/OneDrive/Desktop/EIT/REACT/todo-list/src/App.js): Roots state and orchestrates `localStorage` synchronization.
- [src/App.css](file:///c:/Users/Abcom/OneDrive/Desktop/EIT/REACT/todo-list/src/App.css): Layout grid, button styling, hover effects, and cards.
- [src/index.css](file:///c:/Users/Abcom/OneDrive/Desktop/EIT/REACT/todo-list/src/index.css): Theme design tokens, root fonts, variables, and global resetting.
- [src/index.js](file:///c:/Users/Abcom/OneDrive/Desktop/EIT/REACT/todo-list/src/index.js): React entry file mapping the application to the DOM.
- Components directory:
  - [src/Components/AddTodo.js](file:///c:/Users/Abcom/OneDrive/Desktop/EIT/REACT/todo-list/src/Components/AddTodo.js): UI Form to capture new tasks.
  - [src/Components/Todos.js](file:///c:/Users/Abcom/OneDrive/Desktop/EIT/REACT/todo-list/src/Components/Todos.js): List container checking for empty state.
  - [src/Components/TodoItem.js](file:///c:/Users/Abcom/OneDrive/Desktop/EIT/REACT/todo-list/src/Components/TodoItem.js): Single list item displaying values and containing a delete trigger.
  - [src/Components/Header.js](file:///c:/Users/Abcom/OneDrive/Desktop/EIT/REACT/todo-list/src/Components/Header.js): Topbar navigation.
  - [src/Components/Footer.js](file:///c:/Users/Abcom/OneDrive/Desktop/EIT/REACT/todo-list/src/Components/Footer.js): Copyright footer.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v16.x or higher recommended) and `npm` package manager.

### Installation

1. Navigate to the project directory:
   ```bash
   cd todo-list
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

* To start the development server:
  ```bash
  npm start
  ```
  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

* To run tests:
  ```bash
  npm test
  ```

* To build the application for production:
  ```bash
  npm run build
  ```
  The build folder will contain the optimized production bundle.

---

## 🎨 Theme Customization

The design system is managed via CSS variables in [src/index.css](file:///c:/Users/Abcom/OneDrive/Desktop/EIT/REACT/todo-list/src/index.css). You can easily customize the overall aesthetic by modifying the custom properties in `:root`:

```css
:root {
  --bg-gradient: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 100%); /* Radial background */
  --panel-bg: rgba(30, 41, 59, 0.45);                                         /* Glass background */
  --panel-border: rgba(255, 255, 255, 0.08);                                  /* Glass border */
  --text-primary: #f8fafc;                                                    /* Principal text color */
  --text-secondary: #94a3b8;                                                  /* Accent/muted text */
  --accent-color: #8b5cf6;                                                    /* Primary brand color */
  --accent-gradient: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);        /* Violet gradient */
  --danger-gradient: linear-gradient(135deg, #f87171 0%, #ef4444 100%);        /* Red delete gradient */
}
```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information (if applicable).
