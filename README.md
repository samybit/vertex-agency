# Vertex Digital Agency 🚀

[![Deployment Status](https://img.shields.io/github/actions/workflow/status/samybit/vertex-agency/deploy.yml?style=for-the-badge&logo=github&label=Live%20Deploy&color=0ea5e9)](https://github.com/samybit/vertex-agency/actions)

A modern, multi-page digital agency website designed to showcase clean, maintainable front-end code. Built with a focus on pixel-perfect UI, fluid interactions, and enterprise-grade CSS architecture.

**[🔗 View Live Demo Here](https://samybit.github.io/vertex-agency/)**

---

## ✨ Key Features

- **Responsive CSS Grid Layouts:** Fluid, mobile-first design that adapts seamlessly to all screen sizes without relying on heavy frameworks like Bootstrap.
- **Interactive UI Components:** Custom-built jQuery accordion, mobile off-canvas menu, and dynamic image gallery overlays.
- **Client-Side Validation:** User-friendly contact form validation that prevents empty submissions and checks email formatting.
- **Micro-Interactions:** Dynamic browser tab titles using the Visibility API to improve user re-engagement.
- **Performance Optimized:** Employs the Sticky Footer flexbox technique and `scrollbar-gutter` to prevent layout shifting (Cumulative Layout Shift) for better Core Web Vitals.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic markup ensuring accessibility and SEO best practices |
| **SCSS (Dart Sass)** | Compiled using the modern `@use` and `@forward` modules (replacing the deprecated `@import`) |
| **jQuery v3.7.1** | Clean, performant DOM manipulation and event handling |

---

## 🏗️ Architecture: The 7-1 Pattern

This project utilizes the strict **7-1 Sass Architecture** combined with the **BEM (Block Element Modifier)** methodology, ensuring the CSS is highly scalable, modular, and easy to maintain.

```text
scss/
├── abstracts/      # Variables, mixins, and design tokens
├── vendors/        # External CSS (Normalize)
├── base/           # Boilerplate resets and global typography
├── layout/         # Macro-layouts (Grid, Header, Footer)
├── components/     # Micro-components (Buttons, Cards, Forms, Gallery)
├── pages/          # Page-specific styles
├── themes/         # Theme configurations
└── main.scss       # Central compiler hub using @use
```

---

## ⚙️ Local Development

To run this project locally and compile the Sass files:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/samybit/vertex-agency.git
   ```

2. **Navigate into the directory:**

   ```bash
   cd vertex-agency
   ```

3. **Install Sass globally** (if you haven't already):

   ```bash
   npm install -g sass
   ```

4. **Run the Dart Sass compiler watcher:**

   ```bash
   sass --watch scss/main.scss css/main.css
   ```

5. Open `index.html` in your browser, or use the **VS Code Live Server** extension.

---

*Designed and coded by Samy Barsoum.*
