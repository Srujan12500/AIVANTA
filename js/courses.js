/* ============================================================
   AIVANTA — courses.js
   Course data (frontend-only, no backend) + rendering logic
   for the homepage "Featured Courses", the Courses page
   (search + category filter), and the Course Details page.
   ============================================================ */

const COURSES = [
  {
    slug: "java-programming",
    title: "Java Programming",
    category: "programming",
    categoryLabel: "Programming",
    level: "Beginner",
    duration: "8 weeks",
    price: 4999,
    accent: "#3e5fdd",
    shortDesc: "Core Java syntax, OOP principles, and collections through hands-on practice.",
    description:
      "A practical, project-driven introduction to Java for people who have never written a line of code before. You'll build a working command-line application by the end of the course, not just complete exercises.",
    skills: ["Java Syntax", "OOP", "Collections", "Exception Handling", "File I/O"],
    syllabus: [
      { week: "Week 1–2", topic: "Java fundamentals: variables, control flow, methods" },
      { week: "Week 3–4", topic: "Object-oriented programming: classes, inheritance, interfaces" },
      { week: "Week 5", topic: "Collections framework and generics" },
      { week: "Week 6", topic: "Exception handling and file I/O" },
      { week: "Week 7", topic: "Working with build tools and packages" },
      { week: "Week 8", topic: "Capstone: a console-based inventory manager" },
    ],
    requirements: ["A laptop (Windows, macOS, or Linux)", "No prior programming experience required"],
  },
  {
    slug: "python-programming",
    title: "Python Programming",
    category: "programming",
    categoryLabel: "Programming",
    level: "Beginner",
    duration: "8 weeks",
    price: 4499,
    accent: "#e8a33d",
    shortDesc: "From Python basics to writing clean, reusable scripts and small tools.",
    description:
      "Learn Python the way it's actually used day-to-day: writing scripts that solve real problems. The course moves from fundamentals to working with files, APIs, and simple data-handling libraries.",
    skills: ["Python Syntax", "Functions & Modules", "File Handling", "Basic Pandas", "Virtual Environments"],
    syllabus: [
      { week: "Week 1–2", topic: "Python fundamentals and data structures" },
      { week: "Week 3", topic: "Functions, modules, and packages" },
      { week: "Week 4", topic: "File handling and working with APIs" },
      { week: "Week 5–6", topic: "Intro to Pandas for data handling" },
      { week: "Week 7", topic: "Writing and packaging small CLI tools" },
      { week: "Week 8", topic: "Capstone: a data-cleaning script" },
    ],
    requirements: ["A laptop (Windows, macOS, or Linux)", "No prior programming experience required"],
  },
  {
    slug: "html-css",
    title: "HTML & CSS",
    category: "frontend",
    categoryLabel: "Frontend",
    level: "Beginner",
    duration: "5 weeks",
    price: 2999,
    accent: "#3e5fdd",
    shortDesc: "Build structured, well-styled web pages from a blank file, by hand.",
    description:
      "The foundation every frontend developer needs. You'll learn semantic HTML and modern CSS layout — Flexbox and Grid — by building real page layouts rather than copying templates.",
    skills: ["Semantic HTML", "CSS Box Model", "Flexbox", "Grid", "Responsive Basics"],
    syllabus: [
      { week: "Week 1", topic: "Semantic HTML and document structure" },
      { week: "Week 2", topic: "CSS fundamentals: box model, selectors, specificity" },
      { week: "Week 3", topic: "Flexbox layouts" },
      { week: "Week 4", topic: "CSS Grid layouts" },
      { week: "Week 5", topic: "Capstone: a fully responsive landing page" },
    ],
    requirements: ["A laptop and a text editor (VS Code recommended)", "No prior experience required"],
  },
  {
    slug: "javascript",
    title: "JavaScript",
    category: "frontend",
    categoryLabel: "Frontend",
    level: "Intermediate",
    duration: "7 weeks",
    price: 3999,
    accent: "#e8a33d",
    shortDesc: "DOM manipulation, events, and modern ES6+ syntax for interactive pages.",
    description:
      "Move beyond static pages. This course covers modern JavaScript — from core syntax to DOM manipulation, events, and asynchronous code — so you can build genuinely interactive interfaces.",
    skills: ["ES6+ Syntax", "DOM Manipulation", "Events", "Fetch & Async/Await", "LocalStorage"],
    syllabus: [
      { week: "Week 1", topic: "Modern JavaScript syntax (ES6+)" },
      { week: "Week 2–3", topic: "DOM manipulation and event handling" },
      { week: "Week 4", topic: "Working with forms and validation" },
      { week: "Week 5", topic: "Fetch API and asynchronous JavaScript" },
      { week: "Week 6", topic: "Browser storage: LocalStorage and SessionStorage" },
      { week: "Week 7", topic: "Capstone: an interactive dashboard widget" },
    ],
    requirements: ["Basic HTML & CSS knowledge", "A laptop and a text editor"],
  },
  {
    slug: "frontend-web-development",
    title: "Frontend Web Development",
    category: "frontend",
    categoryLabel: "Frontend",
    level: "Intermediate",
    duration: "10 weeks",
    price: 6999,
    accent: "#3e5fdd",
    shortDesc: "HTML, CSS, and JavaScript combined into one complete frontend track.",
    description:
      "A complete path from a blank page to a fully responsive, interactive website — the same skill set used to build the site you're reading this on. Combines structure, styling, and behaviour into one cohesive project-based course.",
    skills: ["HTML5", "CSS3", "Responsive Design", "JavaScript", "Git Basics"],
    syllabus: [
      { week: "Week 1–2", topic: "Semantic HTML and CSS layout systems" },
      { week: "Week 3–4", topic: "Responsive design with media queries" },
      { week: "Week 5–6", topic: "JavaScript fundamentals and DOM interaction" },
      { week: "Week 7", topic: "Forms, validation, and accessibility" },
      { week: "Week 8", topic: "Version control basics with Git" },
      { week: "Week 9–10", topic: "Capstone: a full multi-page website" },
    ],
    requirements: ["A laptop (Windows, macOS, or Linux)", "No prior experience required"],
  },
  {
    slug: "java-spring-boot",
    title: "Java Spring Boot",
    category: "backend",
    categoryLabel: "Backend",
    level: "Intermediate",
    duration: "9 weeks",
    price: 7499,
    accent: "#e8a33d",
    shortDesc: "Build and secure REST APIs with Spring Boot and connect them to MySQL.",
    description:
      "For developers who already know Java and want to build backend services. Covers REST API design, Spring Boot's core modules, and connecting a real MySQL database — the same stack used in production backend teams.",
    skills: ["Spring Boot", "REST APIs", "Spring Data JPA", "MySQL Integration", "API Testing"],
    syllabus: [
      { week: "Week 1", topic: "Spring Boot fundamentals and project structure" },
      { week: "Week 2–3", topic: "Building REST APIs and controllers" },
      { week: "Week 4–5", topic: "Spring Data JPA and MySQL integration" },
      { week: "Week 6", topic: "Validation, error handling, and DTOs" },
      { week: "Week 7", topic: "Testing REST endpoints" },
      { week: "Week 8–9", topic: "Capstone: a REST API for a small application" },
    ],
    requirements: ["Working knowledge of core Java", "Basic SQL familiarity is helpful"],
  },
  {
    slug: "sql-mysql",
    title: "SQL & MySQL",
    category: "database",
    categoryLabel: "Database",
    level: "Beginner",
    duration: "6 weeks",
    price: 3499,
    accent: "#3e5fdd",
    shortDesc: "Query, design, and manage relational databases with MySQL.",
    description:
      "Databases are behind almost every application. This course teaches you to write real SQL queries, design normalized schemas, and manage a MySQL database from the ground up.",
    skills: ["SQL Queries", "Joins", "Schema Design", "Indexing Basics", "MySQL Workbench"],
    syllabus: [
      { week: "Week 1", topic: "Relational database concepts and setup" },
      { week: "Week 2", topic: "SELECT, WHERE, and filtering data" },
      { week: "Week 3", topic: "Joins and multi-table queries" },
      { week: "Week 4", topic: "Aggregation, grouping, and subqueries" },
      { week: "Week 5", topic: "Schema design and normalization" },
      { week: "Week 6", topic: "Capstone: designing a small database from scratch" },
    ],
    requirements: ["A laptop with MySQL Workbench installed", "No prior database experience required"],
  },
];

const FEATURED_SLUGS = [
  "java-programming",
  "python-programming",
  "frontend-web-development",
  "java-spring-boot",
  "sql-mysql",
];

/* ---------- Shared card renderer ---------- */
function courseCardHTML(course) {
  const initials = course.title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return `
    <article class="course-card reveal" data-category="${course.category}" data-title="${course.title.toLowerCase()}">
      <div class="thumb" style="background:${course.accent}" aria-hidden="true">${initials}</div>
      <div class="body">
        <div class="tag-row">
          <span class="tag">${course.categoryLabel}</span>
          <span class="tag">${course.level}</span>
        </div>
        <h3>${course.title}</h3>
        <p>${course.shortDesc}</p>
        <div class="meta">
          <span>${course.duration}</span>
          <span class="price">&#8377;${course.price.toLocaleString("en-IN")}</span>
        </div>
        <div class="footer-row">
          <a class="btn btn-outline btn-block" href="course-details.html?slug=${course.slug}">Explore Course</a>
        </div>
      </div>
    </article>
  `;
}

/* ---------- Homepage: featured courses ---------- */
function renderFeaturedCourses() {
  const mount = document.getElementById("featured-courses");
  if (!mount) return;
  const featured = FEATURED_SLUGS.map((slug) => COURSES.find((c) => c.slug === slug)).filter(Boolean);
  mount.innerHTML = featured.map(courseCardHTML).join("");
  initRevealOnScroll();
}

/* ---------- Courses page: search + filter ---------- */
function initCoursesPage() {
  const mount = document.getElementById("course-grid");
  if (!mount) return;

  const searchInput = document.getElementById("course-search");
  const pills = document.querySelectorAll(".filter-pill");
  let activeCategory = "all";
  let query = "";

  function render() {
    const filtered = COURSES.filter((c) => {
      const matchesCategory = activeCategory === "all" || c.category === activeCategory;
      const matchesQuery = c.title.toLowerCase().includes(query) || c.shortDesc.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });

    if (!filtered.length) {
      mount.innerHTML = `<div class="empty-state">No courses match "${escapeHTML(query)}". Try a different search term or category.</div>`;
      return;
    }

    mount.innerHTML = filtered.map(courseCardHTML).join("");
    initRevealOnScroll();
  }

  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      activeCategory = pill.dataset.category;
      render();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      query = e.target.value.trim().toLowerCase();
      render();
    });
  }

  render();
}

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ---------- Course details page ---------- */
function initCourseDetailsPage() {
  const mount = document.getElementById("course-detail-mount");
  if (!mount) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const course = COURSES.find((c) => c.slug === slug) || COURSES[0];

  document.title = `${course.title} — AIVANTA Courses`;

  mount.innerHTML = `
    <div class="course-detail-layout">
      <div>
        <span class="tag" style="margin-bottom:16px;display:inline-block;">${course.categoryLabel}</span>
        <h1>${course.title}</h1>
        <p style="font-size:var(--fs-400);color:var(--slate);max-width:640px;">${course.description}</p>

        <h3 style="margin-top:36px;">Skills you'll cover</h3>
        <div class="skill-chip-row">
          ${course.skills.map((s) => `<span class="skill-chip">${s}</span>`).join("")}
        </div>

        <h3 style="margin-top:36px;">Course syllabus</h3>
        ${course.syllabus
          .map(
            (item) => `
          <div class="syllabus-item">
            <span class="week">${item.week}</span>
            ${item.topic}
          </div>`
          )
          .join("")}

        <h3 style="margin-top:36px;">Requirements</h3>
        <ul class="feature-list">
          ${course.requirements.map((r) => `<li>${r}</li>`).join("")}
        </ul>
      </div>

      <aside class="enroll-card reveal">
        <span class="price-big">&#8377;${course.price.toLocaleString("en-IN")}</span>
        <p style="margin:0;color:var(--slate);font-size:var(--fs-200);">one-time course fee</p>
        <ul class="meta-list">
          <li><span>Level</span><strong>${course.level}</strong></li>
          <li><span>Duration</span><strong>${course.duration}</strong></li>
          <li><span>Format</span><strong>Self-paced + live sessions</strong></li>
          <li><span>Instructor</span><strong>AIVANTA Faculty</strong></li>
        </ul>
        <button class="btn btn-primary btn-block" id="enroll-btn" type="button">Enroll Now</button>
        <p class="form-note text-center" style="margin-top:12px;">No payment is collected on this preview site.</p>
      </aside>
    </div>
  `;

  const enrollBtn = document.getElementById("enroll-btn");
  if (enrollBtn) {
    enrollBtn.addEventListener("click", () => {
      showToast("Course enrollment will be available soon.", "success");
    });
  }

  initRevealOnScroll();
}

document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedCourses();
  initCoursesPage();
  initCourseDetailsPage();
});
