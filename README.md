# Social-Media-Dashboard
🌐 Social Media Dashboard

This is a dynamic and responsive social media dashboard built with **HTML, SASS (SCSS), CSS, and JavaScript**. The layout displays key metrics and insights from multiple platforms, inspired by real-time admin dashboards.

The project highlights modern frontend techniques and deeper SASS concepts like mixins, loops, maps, and modular architecture.

---

📌 Project Overview

The Social Media Dashboard provides a central view of platform metrics (e.g., followers, likes, engagement). It's a clean UI demo ideal for showcasing frontend skills in responsive layout, styling, and interactivity.

🧭 Ideal for:

- Dashboard UI/UX demos  
- Frontend interview assignments  
- Admin panel design starters

---

✨ Features

📊 Interactive social media stats layout  
🌓 Dark/light mode toggle  
📱 Responsive mobile-first design  
🧩 Advanced SASS techniques (`@mixin`, `@for`, `@each`, `map-get`)  
🔄 Organized and scalable SCSS folder structure  
⚙️ JavaScript-powered theme switching

---

📁 Project Structure

social-dashboard/  
├── images/                     # Icons and platform logos  
│   ├── icon-facebook.svg  
│   ├── icon-twitter.svg  
│   ├── icon-instagram.svg  
│   └── icon-youtube.svg  
├── css/  
│   └── style.css               # Compiled from SASS  
├── sass/  
│   ├── _variables.scss  
│   ├── _mixins.scss  
│   ├── _cards.scss  
│   └── main.scss               # Main SASS entry file  
├── index.html                  # Dashboard HTML  
├── script.js                   # JS for theme toggle  
├── package.json                # SASS and project config  
├── package-lock.json  
└── README.md                   # Project documentation

---

🔧 Technology Stack

Languages: HTML5, SASS (SCSS), CSS3, JavaScript  
Tools: Node.js, NPM, VS Code, Live Server  
Design: SVG icons, modular card layout  

---

📋 Prerequisites

Ensure you have:

- Node.js and npm installed  
- A code editor like VS Code  

Install SASS globally (if not already):

```bash
npm install -g sass
````

---

🛠 Installation

```bash
# Clone the repository
git clone https://github.com/PARAMASIVAM52/social-dashboard.git  
cd social-dashboard  

# Install dependencies
npm install  

# Start SASS watcher to compile SCSS to CSS
npm start
```

Then open `index.html` in your browser or use **Live Server** in VS Code.

---

📄 How It Works

* Responsive layout using media queries
* SASS handles theming, layout structure, and visual consistency
* JavaScript manages light/dark theme toggle and dynamic class switching
* Metrics and platform cards styled using SASS maps and reusable mixins

---

🚀 Future Enhancements

✅ Real-time API data integration (e.g., Twitter, YouTube analytics)
🧩 Convert to React for reusable components
🎯 Add filtering or date range toggles
♿ Improve accessibility (tab focus, ARIA labels)
📈 Add light animations or transitions for metrics

---
