# AIVANTA — Frontend Website

**Build. Learn. Innovate.**

A production-quality, frontend-only website for AIVANTA — a technology startup offering website development services and industry-focused programming courses. Built with plain HTML5, CSS3, and vanilla JavaScript. No backend, no build step, no dependencies to install.

## Project structure

```text
AIVANTA/
│
├── index.html            Home page
├── services.html         Services page + quote request modal
├── courses.html           Courses page (search + category filters)
├── course-details.html    Dynamic course detail page (?slug=...)
├── about.html             About Us page
├── contact.html           Contact page + contact form
│
├── css/
│   ├── style.css          Core design system + components
│   └── responsive.css     Breakpoint overrides
│
├── js/
│   ├── main.js            Navigation, scroll reveal, toast, modal, back-to-top
│   ├── courses.js         Course data + rendering + search/filter + detail page
│   └── forms.js           Form validation for quote request + contact form
│
├── assets/
│   ├── images/            (empty — no external image assets required; visuals are inline SVG)
│   └── icons/             (empty — icons are inline SVG in the markup)
│
├── README.md
└── .gitignore
```

## Running locally

No build tools or package installs are required. Any static file server works:

```bash
cd AIVANTA
python3 -m http.server 8080
# then open http://localhost:8080
```

Or open `index.html` directly in a browser — every page uses relative paths only.

## What's implemented

- Fully responsive layout (mobile, tablet, laptop, desktop) using Flexbox, Grid, and media queries in `css/responsive.css`.
- Responsive navigation with a hamburger menu on smaller screens.
- Smooth scrolling and active-link highlighting per page.
- Scroll-triggered reveal animations (`IntersectionObserver`, with a fallback for older browsers).
- Dynamic course rendering from a single JS data source (`js/courses.js`) — used on the homepage's featured section, the full courses page, and the course details page.
- Course search and category filtering (All / Programming / Frontend / Backend / Database).
- A quote-request modal with full client-side validation (`js/forms.js`).
- A contact form with client-side validation.
- Both forms show clear success/error states and optionally mirror submissions to `localStorage` for demo purposes only — **no backend exists, and no data is transmitted anywhere.**
- Enroll button on course details shows "Course enrollment will be available soon." — no fake payment flow.
- Back-to-top button, toast notifications, and no dead links or console errors.
- Semantic HTML, heading hierarchy, form labels, visible focus states, and `prefers-reduced-motion` support for accessibility.
- Title tags, meta descriptions, and Open Graph tags per page for basic SEO.

## Deploying with GitHub + Vercel

### 1. Create a GitHub repository

```bash
cd AIVANTA
git init
git add .
git commit -m "Initial commit: AIVANTA frontend website"
git branch -M main
git remote add origin https://github.com/<your-username>/AIVANTA.git
git push -u origin main
```

(Create the empty `AIVANTA` repository on GitHub first via the "New repository" button, without a README, then run the commands above.)

### 2. Connect the repository to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (GitHub login is easiest).
2. Click **Add New… → Project**.
3. Select the `AIVANTA` repository from the list (authorize Vercel's GitHub App if prompted).
4. Framework preset: choose **Other** (this is a static site — no build step needed).
5. Leave **Build Command** and **Output Directory** blank, or set Output Directory to `.` if Vercel requires a value.
6. Click **Deploy**.

### 3. Verify the live site

Once deployment finishes, Vercel gives you a URL like `https://aivanta.vercel.app`. Open it and check:

- Home, Services, Courses, About, and Contact pages all load.
- The mobile menu opens and closes correctly.
- Course search and filters work on the Courses page.
- Clicking a course opens its detail page with the right content.
- The quote request modal and contact form validate and show success messages.

### 4. Updating the site later

Any push to the `main` branch redeploys automatically:

```bash
git add .
git commit -m "Describe your change"
git push
```

Vercel picks up the push, builds, and updates the live URL within a minute or two — no manual redeploy step needed.

## Notes

- This is a frontend-only build, as scoped. There is no server, database, authentication, or payment processing anywhere in this project.
- Placeholder contact details (email, phone, location) in `contact.html` should be replaced with real values before going live.
- `og:url` / `canonical` tags currently point to `https://aivanta.example.com/` — update these to the real production domain once one is chosen.
