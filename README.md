# P.V. Nimantha Madhushan – Professional Developer Portfolio

> **Live Portfolio & GitHub Pages Ready**  
> Modern, responsive, high-performance portfolio website built with semantic HTML5, modern CSS3 (Dark/Light themes), and vanilla JavaScript. Zero heavy dependencies.

---

## 🌟 Overview & Highlights

- **Profile:** P.V. Nimantha Madhushan
- **Role:** Software Developer | Full-Stack & Mobile Engineer | Game & 3D Artist
- **Education:** Bachelor of Computer Science (BCS) Undergraduate, University of Ruhuna, Sri Lanka
- **Affiliation:** Co-Owner & Developer at **Madhushan Studios**
- **Core Technologies:** Flutter, React Native, React, Spring Boot, Java (OOP, Swing), Node.js, Express.js, FastAPI, MySQL, Firestore, MongoDB, Unreal Engine 5, Blender.
- **Resume URL:** [https://01nimantha.github.io/CV/](https://01nimantha.github.io/CV/)
- **Contact:** `01nimantha@gmail.com` | `+94 76 263 7657` | Horana, Sri Lanka

---

## 📂 Project Structure

```text
portfolio/
├── index.html               # Main portfolio landing page with interactive filters & modal deep-view
├── todo-list.html           # Dedicated showcase page for Todo List (Google Play App)
├── instalearn.html          # Dedicated case study for InstaLearn (Univ. of Ruhuna Capstone)
├── cat-tap-hunt.html        # Dedicated showcase page for Cat Tap Hunt (Google Play Game)
├── vrnt-engineers.html      # Dedicated showcase page for VRNT Engineers (Google Play App)
├── calculator.html          # Dedicated showcase page for Smart Calculator (Google Play App)
├── assets/
│   ├── css/
│   │   └── style.css        # Responsive styling, modern CSS variables, dark/light themes, animations
│   └── js/
│       └── main.js          # Dynamic project renderer, category filtering, modal & lightbox, email copy
└── README.md                # Deployment and customization guide
```

---

## 🚀 How to Publish to GitHub Pages

You can publish this portfolio in **2 ways** using GitHub Pages for free:

### Option A: Your Personal Primary GitHub Site (`01nimantha.github.io`)
If you want the website to be accessible directly at **`https://01nimantha.github.io`**:

1. Go to [GitHub](https://github.com) and create a new repository named exactly:
   ```
   01nimantha.github.io
   ```
   *(Make sure it is **Public**)*.

2. In your local terminal inside this folder (`c:\Users\Admin\Desktop\Projects\HTML\portfolio`), run:
   ```bash
   git init
   git add .
   git commit -m "feat: launch modern developer portfolio"
   git branch -M main
   git remote add origin https://github.com/01nimantha/01nimantha.github.io.git
   git push -u origin main
   ```

3. GitHub Pages will build automatically! Within 1–2 minutes, your website is live at:  
   👉 **`https://01nimantha.github.io`**

---

### Option B: A Project Repository (e.g., `https://01nimantha.github.io/portfolio`)
If you want to keep the repository named `portfolio`:

1. Create a repository named `portfolio` on your GitHub account.
2. In your terminal:
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio release"
   git branch -M main
   git remote add origin https://github.com/01nimantha/portfolio.git
   git push -u origin main
   ```
3. In GitHub, open your `portfolio` repository:
   - Go to **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select Branch: **`main`**, Folder: **`/(root)`**, and click **Save**.
4. In about 1 minute, your portfolio will be live at:  
   👉 **`https://01nimantha.github.io/portfolio/`**

---

## 🛠️ Features Included

1. **Category Filtering:** Filter projects seamlessly across:
   - `All Projects (10)`
   - `Mobile Apps (Flutter & React Native)`
   - `Web & Full Stack (React, Spring Boot, FastAPI)`
   - `Java & Software Engineering`
   - `Game Dev & 3D (Unreal Engine 5 & Blender)`
2. **Interactive Deep-View Modal:**
   - Clicking any project card opens a rich modal with detailed bullet points, architecture decisions, team contributors, external links, and full screenshot galleries.
   - Deep-linking supported (e.g., sharing `index.html#project-todo-list` automatically opens the corresponding modal).
3. **Full-Screen Lightbox:**
   - Click any screenshot to inspect it in high resolution.
4. **Theme Switcher:**
   - Toggle between **Dark Mode** (sleek tech modern aesthetic) and **Light Mode** (clean Google aesthetic). User preference is remembered in `localStorage`.
5. **One-Click Email Copy & Toast Notification:**
   - Click the "Copy" button to copy `01nimantha@gmail.com` to clipboard with an animated status toast.
6. **Live App Badges & Privacy Links:**
   - Direct Google Play buttons for all published apps (*Todo List, Cat Tap Hunt, VRNT Engineers, Calculator*) with their live privacy policy links.
7. **Graceful Image Fallbacks:**
   - Protected with `referrerpolicy="no-referrer"` and automated SVG/CSS placeholders so that LinkedIn CDN media links never appear broken.

---

## 📝 Customization & Maintenance

- **Add or Edit Projects:**  
  Open `assets/js/main.js` and modify or add entries in the `projectsData` array. The grid, tags, modal, and screenshots update automatically.
- **Update CV Link:**  
  Search for `https://01nimantha.github.io/CV/` in `index.html` and replace it whenever you update your CV location.
- **Colors & Typography:**  
  Edit the CSS variables in `assets/css/style.css` under `:root` and `[data-theme="light"]`.

---

© 2026 P.V. Nimantha Madhushan. Built with care and precision.
