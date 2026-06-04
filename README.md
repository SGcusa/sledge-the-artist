# Sledge The Artist — Website

Personal portfolio and commission website for **Sledge The Artist** (Cape Town, ZA).

Built with: **HTML5 · Tailwind CSS (CDN) · CSS3 · jQuery 3.7 · Vanilla JS**

---

## 📁 Project Structure

```
sledge-the-artist/
├── index.html          # Main single-page website
├── css/
│   └── style.css       # Custom styles (animations, form, buttons)
├── js/
│   └── main.js         # jQuery interactions (nav, filters, form, scroll)
├── images/             # Your artwork photos (copy here)
└── README.md
```

---

## 🚀 Run Locally

This is a static site — no server needed. Two options:

### Option 1 — Open directly (quickest)
```bash
# Just double-click index.html in Finder/Explorer
# OR from terminal:
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

### Option 2 — Local dev server (recommended, avoids image path issues)

Install the VS Code **Live Server** extension, then right-click `index.html` → *Open with Live Server*.

Or use Python (built into macOS/Linux):
```bash
cd sledge-the-artist
python3 -m http.server 8080
# Then open http://localhost:8080 in your browser
```

Or use Node.js:
```bash
npx serve .
# Then open http://localhost:3000
```

---

## 📸 Adding Your Images

Drop your artwork photos into the `images/` folder.
The site already references these filenames — rename yours to match, or update the `src` attributes in `index.html`:

| File | Used in |
|------|---------|
| `Screenshot_20240219-152106.png` | Hero background, About section |
| `Screenshot_20240219-1528592.png` | Gallery |
| `Screenshot_20240219-152813.png` | Gallery |
| `Screenshot_20240219-151300.png` | Gallery (clothing) |
| `Screenshot_20240219-151649.png` | Gallery |
| `Screenshot_20240219-1528593.png` | Gallery |
| `Group_48.png` | Gallery |

---

## 📬 Contact Form — Hook Up Email

The form currently opens WhatsApp automatically. To also receive email, sign up at [Formspree](https://formspree.io) (free) and replace the form action in `js/main.js`:

```js
// In main.js, replace the setTimeout simulation with:
$.ajax({
  url: 'https://formspree.io/f/YOUR_FORM_ID',
  method: 'POST',
  data: { name, service, message },
  success: function() { /* show success */ }
});
```

---

## 🐙 Push to GitHub

### First time setup:
```bash
# 1. Create a new repo on github.com — name it "sledge-the-artist"
# 2. Then in terminal, inside the project folder:

cd sledge-the-artist
git init
git add .
git commit -m "Initial commit — Sledge The Artist website"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/sledge-the-artist.git
git push -u origin main
```

### After making changes:
```bash
git add .
git commit -m "Update site"
git push
```

---

## 🌐 Free Hosting (GitHub Pages)

Once pushed to GitHub:
1. Go to your repo on github.com
2. Click **Settings** → **Pages**
3. Under *Source*, select **Deploy from a branch** → `main` → `/ (root)`
4. Click **Save**
5. Your site will be live at: `https://YOUR_USERNAME.github.io/sledge-the-artist`

---

## 🎨 Customise

| Thing to change | Where |
|----------------|-------|
| Colours | `tailwind.config` in `index.html` + `css/style.css` |
| Stats (200+, 5+) | Hero section in `index.html` |
| Testimonial quote | Search "SLEDGE CAPTURED" in `index.html` |
| WhatsApp number | Search `27653620916` in `index.html` + `js/main.js` |
| Social links | Footer + About section in `index.html` |

---

Made with ❤️ for Sledge The Artist · Cape Town
