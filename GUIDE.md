# Vishal Yadav Portfolio - Owner's Guide

A complete handbook for running, updating, and handing off this website. No prior
coding knowledge required for the content edits in Section 4.

Project location on this PC:
C:/Users/vy355/.claude/vishal-portfolio

Tech stack: Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion.

------------------------------------------------------------

## 1. How to run the project (manually)

You use Windows, so open Command Prompt: press the Windows key, type cmd, press Enter.

Then copy-paste these two lines:

```
cd /d C:\Users\vy355\.claude\vishal-portfolio
npm run dev
```

Wait until it prints "Local: http://localhost:3000", then open that address in your browser.

To STOP the server: click the black cmd window and press Ctrl + C.

First time on a new computer (or if you see "module not found"), run this once first:

```
cd /d C:\Users\vy355\.claude\vishal-portfolio
npm install
```

Easiest alternative - VS Code:
- Open VS Code, File menu, Open Folder, choose the vishal-portfolio folder.
- Open the terminal with Ctrl + backtick (the key above Tab).
- Type: npm run dev
- Ctrl+click the http://localhost:3000 link.

Common mistakes:
- Running "cd vishal-portfolio" from C:/Users/vy355 fails. The project is INSIDE the .claude folder, so always use the full path above.
- Do not paste any "# http://..." comment text. cmd does not understand the # symbol.
- If port 3000 is busy it will use 3001 - just open whatever URL it prints.

------------------------------------------------------------

## 2. Project structure (where everything lives)

You will mostly touch the files inside the src folder.

```
vishal-portfolio/
  public/                      images and the resume file
    resume.pdf                 the downloadable resume
    images/profile.jpg         your photo (optional, drop it in)
    images/projects/           project cover images (optional)
  src/
    lib/
      site.ts                  name, email, phone, social links
      data/projects.ts         all projects
      data/skills.ts           all skills
      data/certifications.ts   all certifications
    app/
      page.tsx                 home page
      about/page.tsx           About page (education, experience)
      projects/page.tsx        projects listing
      skills/page.tsx          skills page
      certifications/page.tsx  certifications page
      contact/page.tsx         contact page
    components/                reusable building blocks
      home/stats.tsx           the 4 stat numbers on the home page
```

Rule of thumb: to change WORDS and DATA, edit the files in src/lib. To change LAYOUT,
edit the files in src/app and src/components.

------------------------------------------------------------

## 3. The golden rule for editing

1. Open the file in a text editor (Notepad works, VS Code is better).
2. Change the text inside the quotation marks " ".
3. Keep all commas, brackets [ ], and braces { } exactly where they are.
4. Save the file. If "npm run dev" is running, the browser updates automatically.

If the page goes blank after an edit, you probably deleted a comma or a bracket.
Undo with Ctrl + Z and save again.

------------------------------------------------------------

## 4. How to update each section (no coding)

### 4.1 Name, email, phone, social links, resume name

File: src/lib/site.ts

Change the values inside the quotes:

```
name: "Vishal Yadav",
email: "vishalyadav.analytics@gmail.com",
phone: "+91 9619039381",
resumeFileName: "Vishal_Yadav_Resume.pdf",
links: {
  github: "https://github.com/Vishal123-tech",
  linkedin: "https://www.linkedin.com/in/vishal-yadav-339b9b1b5",
  kaggle: "https://www.kaggle.com/vishalinsightx",
},
```

### 4.2 Projects (add / edit / remove)

File: src/lib/data/projects.ts

Each project is a block between { and }. To EDIT one, change the text in quotes.
To ADD a new project, copy an entire existing block (from { to },) and paste it,
then change the values. To REMOVE one, delete its whole block.

Field meanings:

- slug: the web address part, lowercase-with-dashes, must be unique.
- title: project name shown everywhere.
- tagline: one-line summary on the card.
- category: must be one of "Data Analysis", "Machine Learning", "Dashboard", "SQL".
- year: e.g. "2026".
- featured: true shows it on the home page, false hides it from home.
- tech: the technology tags, e.g. ["Python", "SQL", "Power BI"].
- illustration: which built-in graphic to show. One of "ml", "sql", "powerbi", "dashboard".
- githubUrl: the "View code" button link.
- overview, features, challenges, results, resultNarrative, architecture, screenshots:
  the content shown on the project detail page.

Minimal new-project template:

```
{
  slug: "my-new-project",
  title: "My New Project",
  tagline: "One line about it.",
  category: "Machine Learning",
  year: "2026",
  featured: true,
  tech: ["Python", "Pandas"],
  illustration: "ml",
  githubUrl: "https://github.com/Vishal123-tech/my-new-project",
  overview: "A longer paragraph describing the project.",
  features: ["First feature", "Second feature"],
  challenges: ["A challenge you solved"],
  results: [
    { label: "Accuracy", value: 90, suffix: "%" },
    { label: "Records", value: 5000, suffix: "+" }
  ],
  resultNarrative: "What the outcome was.",
  architecture: [
    { step: "Collect", detail: "Gather data" },
    { step: "Model", detail: "Train the model" }
  ],
  screenshots: [{ caption: "Result chart" }]
},
```

If you add an image cover, put the file in public/images/projects/ and add this line
inside the project: cover: "/images/projects/your-file.png".

Note about the category filter: clicking a category on the Projects page shows only
projects whose category matches. "All" shows everything.

### 4.3 Skills

File: src/lib/data/skills.ts

Skills are grouped. Inside each group, the skills list looks like:

```
{ name: "Python", level: 90 },
```

level is 0 to 100 and controls the length of the colored bar. Add or remove lines,
keeping the same format and the comma at the end.

### 4.4 Certifications

File: src/lib/data/certifications.ts

Each certification block:

```
{
  title: "Machine Learning for Data Science Projects",
  issuer: "IBM SkillsBuild",
  date: "Mar 2026",
  sortKey: 202606,
  skills: ["Machine Learning", "Python"],
},
```

issuer must be one of "IBM SkillsBuild", "Google", "Deloitte" (to add a new issuer,
ask an AI or developer to extend the allowed list and its color).
sortKey orders the timeline - bigger number = shown higher (use YYYYMM, e.g. Mar 2026 = 202603).

### 4.5 About page (education, experience, objective)

File: src/app/about/page.tsx

- education: the school/college list (newest first).
- journey: the experience and milestone timeline.
- The career-objective paragraph and the location text are also in this file -
  search for the words to find them.

Education entry format:

```
{
  period: "Mar 2023 - May 2027",
  title: "B.E. - Electrical, Electronics & Communications Engineering",
  subtitle: "Shree L. R. Tiwari College of Engineering, Mumbai",
  description: "Optional extra line.",
},
```

### 4.6 Home page stat numbers

File: src/components/home/stats.tsx

The 4 big numbers near the top. Each one:

```
{ label: "Featured projects", to: 2 },
{ label: "Technologies & tools", to: 20, suffix: "+" },
```

to is the number it counts up to. suffix adds text like "+" or "%".

### 4.7 Replace the resume file

Put your latest PDF at public/resume.pdf (overwrite the existing file). Keep the
name exactly "resume.pdf". Every Download Resume button uses it automatically.

### 4.8 Add your photo

Save a square photo as public/images/profile.jpg. It appears on the About page
automatically. If absent, a placeholder shows.

------------------------------------------------------------

## 5. See your changes / check it still works

- While "npm run dev" is running, saving a file refreshes the browser instantly.
- To confirm everything is healthy before publishing, run:

```
npm run build
```

If it ends without "Failed", you are good. If it shows an error, read the file name
and line number it mentions, undo your last edit, and try again.

------------------------------------------------------------

## 6. Save your changes to GitHub

The GitHub remote is already set up. After editing, run:

```
cd /d C:\Users\vy355\.claude\vishal-portfolio
git add -A
git commit -m "Update content"
git push
```

The first push opens a browser window to log in to GitHub - approve it once.

If the repository does not exist yet, create an empty one named vishal-portfolio at
https://github.com/new (owner Vishal123-tech, do not add a README), then push.

------------------------------------------------------------

## 7. Put it online (Vercel)

1. Go to https://vercel.com/new and import the vishal-portfolio GitHub repo.
2. Click Deploy. No settings needed.
3. After it is live, open src/lib/site.ts and set url to your real address, e.g.
   url: "https://vishal-yadav.vercel.app", then commit and push again.

Or from the folder: npm i -g vercel, then vercel --prod.

------------------------------------------------------------

## 8. Updating with an AI assistant (new Claude session, ChatGPT, Gemini)

You can use any AI to make changes. Do this:

1. Open the project folder so you can see the files.
2. Tell the AI which file you want changed (see Section 2 and 4 for the file).
3. Paste the current contents of that file, and this important note:

   IMPORTANT: This project uses Next.js 16 and Tailwind CSS v4 (newer than most
   training data). Only change the data/text I ask for. Keep all commas and brackets
   valid. Do not change the build setup.

Ready-to-paste prompt template:

```
I have a Next.js 16 + TypeScript portfolio. I want to [describe your change,
e.g. "add a new project called X"]. The relevant file is src/lib/data/projects.ts.
Here are its current contents:

[paste the file here]

Please give me the full updated file. Keep the existing format, commas, and brackets
valid. Do not change anything else.
```

4. Copy the AI's updated code back into the file, save, and run npm run dev to check.

Tip: Claude Code (the tool that built this) can open the whole folder and edit files
directly - that is the smoothest option. ChatGPT/Gemini work too, but you copy-paste
files in and out by hand.

------------------------------------------------------------

## 9. Notes for a full-stack developer

- Framework: Next.js 16 (App Router, Turbopack), React 19, TypeScript strict mode.
- Styling: Tailwind CSS v4. Design tokens and custom utilities are in
  src/app/globals.css (CSS variables for both themes, .gradient-text, .bg-grid,
  .glass, etc.). Dark mode is class-based via next-themes.
- UI primitives: hand-rolled shadcn-style components in src/components/ui
  (button, card, badge, input, textarea) using class-variance-authority.
- Animations: Framer Motion. Note ease arrays must be typed as Variants or the
  build fails (TS), and brand icons are custom SVGs in src/components/icons.tsx
  because lucide-react removed its brand icons in this version.
- Content is fully data-driven: src/lib/site.ts and src/lib/data/*. Pages map over
  that data, so adding items rarely needs component changes.
- SEO: metadata in app/layout.tsx and per page; app/sitemap.ts, app/robots.ts, and
  a dynamic OG image at app/opengraph-image.tsx.
- Scripts: npm run dev, npm run build, npm start, npm run lint.
- Project detail uses generateStaticParams + generateMetadata (params is a Promise -
  await it). All routes are static/SSG.

------------------------------------------------------------

## 10. Troubleshooting / FAQ

- "The system cannot find the path specified" -> you are not in the project folder.
  Use: cd /d C:\Users\vy355\.claude\vishal-portfolio
- "module not found" / "next is not recognized" -> run npm install once.
- Page is blank or build fails after an edit -> you removed a comma or bracket.
  Undo with Ctrl + Z, save, try again.
- Port 3000 busy -> Next.js uses 3001 automatically; open that URL.
- Resume downloads as resume(1).pdf -> harmless browser behavior when the file
  already exists in Downloads; the name is set to Vishal_Yadav_Resume.pdf.
- Changes not showing -> hard refresh the browser with Ctrl + Shift + R.

------------------------------------------------------------

Made for Vishal Yadav. Keep this file in the project folder for reference.
