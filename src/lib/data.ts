import { Project, NavLink, SocialLink } from "@/types";

export const siteConfig = {
  name: "Marcus Ortyl",
  initials: "MO",
  role: "Full stack developer",
  location: "UK",
  email: "marcusortyl@gmail.com",
  tagline: "Building software that feels as good as it looks.",
  subheading:
    "Hi I'm Marcus, a full-stack web developer with a sharp eye for detail and a bias for clean code.",
  description:
      "Full-stack Web Developer with 3+ years of experience building modern web applications and websites. I have experience across a range of technologies however currently would say I specialise in React, TypeScript, JavaScript, Angular and Next.js on the front end, with Node.js and Python on the backend.",
  about: [
    "A short paragraph about you — your background, what you care about in frontend development, and what kind of work you enjoy most.",
    "Mention the kinds of teams or projects you've worked on, and what you're looking for next. Keep it human, not corporate.",
  ],
  openToWork: true,
};

export const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Mortyl" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/marcus-ortyl-058138151/" },
  { label: "CV", href: "/cv.pdf" },
];

export const stack: string[] = [
  "TypeScript/Javascript",
  "Next.js",
  "React",
  "Node.js",
  "Python",
  "REST APIs",
  "Git & GitHub",
  "PostgreSQL",
  "Angular",
  "HTML/CSS",
  "TailwindCSS",
  "Vercel",
  "Socket.io",
  "Prisma",
  "Kubernetes basics",
];

export const featuredStack = ["Next.js", "TypeScript/Javascript", "React", "Node.js", "Python"];

export const projects: Project[] = [
  {
    id: "ai-dungeon-master",
    number: "01",
    title: "Dungeon Master",
    description:
      "A stateful, tool-using AI agent built around the AI-engineering skills that transfer to production: tool/function calling, grounding a model so it can't hallucinate outcomes, and — the hard part — evaluating a non-deterministic agent. Claude narrates while a deterministic Python engine owns the rules, dice and state, and a real eval harness pairs deterministic objective checks with an LLM-as-judge. No live demo yet.",
    tags: ["Next.js", "TypeScript", "Python", "FastAPI", "Anthropic", "Pydantic", "Docker"],
    image: undefined,
    images: ["/images/ai-dungeon-master/home.png", "/images/ai-dungeon-master/ingame.png"],
    url: undefined,
    githubUrl: "https://github.com/Mortyl/ai-dungeon-master",
    caseStudy: {
      overview:
        "AI Dungeon Master runs an interactive fantasy adventure where Claude narrates the story, but every action in the world goes through a deterministic Python game engine that owns the rules, the dice and the state. The model can only propose structured actions through tool calls; the engine validates them, decides what is legal, and returns the ground truth for the model to narrate back. That separation keeps the AI from hallucinating outcomes and makes the system testable, which is the part most agentic AI projects skip. The backend is Python and FastAPI with Claude tool use and Pydantic state, and the frontend is a Next.js and Tailwind play surface. There is no live demo yet — deployment is on the roadmap.",
      problem:
        "Anyone can wire an LLM to a chat box, but a Dungeon Master is a non-deterministic, multi-turn, stateful agent, and letting the model own the world means it will happily fake outcomes — resurrect a slain NPC, walk through a locked door, or invent a dice roll. The harder problem is that an agent like this has no single correct output, so most projects never really evaluate it. I wanted to build one that was both grounded in a real ruleset rather than the model's imagination, and verifiable through an evaluation suite I could actually trust.",
      approach:
        "I kept the game engine completely LLM-free: rules, dice, combat and constraints live in plain Python, world state is modelled with Pydantic, and adventures are authored as data the engine never mutates. The DM layer is a Claude tool-use loop that turns free text like \"grab the key, then open the door\" into validated engine calls, then narrates whatever the engine reports back. Illegal actions are refused by the engine and narrated as refusals, not faked. FastAPI exposes start-a-game and take-a-turn endpoints, and the Next.js frontend renders a scrolling story log with a live status panel driven straight off the game state.",
      decisions:
        "The key decision was keeping the engine deterministic and LLM-free so the rules are unit-testable, the dice are seedable, and the evals are reproducible — none of which holds if the model owns the state. That let me build the eval harness in two buckets. Objective checks drive scripted playthroughs and assert on things with a genuine right answer — taken items persist, slain NPCs stay dead, locked doors block, and every emitted state validates against the model — running deterministically in CI with no API key. Prose quality is scored separately by an LLM-as-judge on a rubric, kept advisory so it never gates CI.",
      learned:
        "This project taught me how to evaluate a non-deterministic system without pretending it is deterministic: separate what has a right answer from what is a matter of taste, check the former with hard assertions, and keep the latter advisory. Drawing a firm line between a deterministic core and the model — the engine owns state, the LLM only proposes — is what made the whole thing testable, and seedable dice were the small detail that made the evals reproducible. I also got a clearer feel for designing a tool-use loop, where the model's job is to interpret intent and narrate ground truth rather than decide outcomes.",
    },
  },
  {
    id: "portfolio-v2",
    number: "02",
    title: "Marcus Henri Studio",
    description:
      "A design-led second portfolio built under my studio brand, Marcus Henri. One fixed viewport, no scrolling — featuring a raw WebGL noise shader, generative Canvas 2D artwork, and a runtime-switchable background.",
    tags: ["Next.js", "TypeScript", "Tailwind 4", "WebGL", "Canvas 2D", "Vercel"],
    image: undefined,
    images: [
      "/images/portfolio-v2/home-shader.jpg",
      "/images/portfolio-v2/projects-shader.jpg",
    ],
    url: "https://marcushenri.studio",
    githubUrl: "https://github.com/Mortyl/portfolio-v2",
    caseStudy: {
      overview:
        "Marcus Henri Studio is my second portfolio — a design-led, single-page site live at marcushenri.studio. The whole site lives in one fixed viewport box with no scrolling or routing: the name and nav anchor the top-left, content fades between sections in the bottom-right, and the background is rendered by one of two switchable engines — a domain-warped simplex noise shader written in raw WebGL, or a Canvas 2D generative piece that rotates between a recursive tree, a radial burst, and a sine-wave seascape.",
      problem:
        "One portfolio can't serve two audiences. This site is deliberately conventional so recruiters scanning dozens of portfolios get their answers in seconds — but for freelance and direct outreach, a conventional layout undersells the craft. I wanted a second surface that demonstrates design and front-end finish by being the demonstration, without compromising the recruiter-friendly one.",
      approach:
        "Built with Next.js 16 (App Router, React 19) and TypeScript, styled with Tailwind 4's CSS-first configuration — design tokens live entirely in globals.css with no tailwind.config file. Typography is self-hosted PP Neue Montreal via next/font/local. The noise background is written against the raw WebGL API, and the geometric background is hand-rolled Canvas 2D. Deployed on Vercel behind a custom domain.",
      decisions:
        "The biggest decision was strategic rather than technical: two portfolios under two brands. This one stays the conventional application URL; the studio site carries the Marcus Henri brand and a 'Designer & Developer' framing aimed at freelance clients. Technically, the key choice was the box-in-viewport layout — heading top-left and content bottom-right share one full-viewport space rather than splitting into columns, so the layout survives a 375px phone with no structural media queries. I also chose raw WebGL over three.js, since pulling in a full 3D library for a single fragment shader wasn't worth the dependency.",
      learned:
        "This was my first time writing WebGL by hand — compiling shaders, wiring up uniforms and textures, and re-reading CSS custom properties each frame so the shader tracks the active theme. I also learned Tailwind 4's CSS-first configuration and font self-hosting with next/font/local, plus a lesson in positioning: designing one artefact for one specific audience produces a sharper result than trying to serve everyone with a single site.",
    },
  },
  {
    id: "poe-professor",
    number: "03",
    title: "PoEProfessor",
    description:
      "Path of Exile 2's first AI powered companion app — currently being actively developed. Features a build guide generator, interactive passive skill tree visualiser, and a companion feature which uses an expertly hand-written PoE2 knowledge base. Live demo available on request.",
    tags: ["Next.js", "TypeScript", "Python", "FastAPI", "Anthropic", "OAuth"],
    images: [
      "/images/poe-professor/builds.jpg",
      "/images/poe-professor/passivetree.jpg",
      "/images/poe-professor/ascendancyTree.jpg",
      "/images/poe-professor/gearrecommendations.jpg",
      "/images/poe-professor/tierList.jpg",
      "/images/poe-professor/login.jpg",
    ],
    url: undefined,
    githubUrl: "https://github.com/Mortyl/poe-professor",
    caseStudy: {
      overview:
        "PoEProfessor is a Path of Exile 2 companion web app inspired by Porofessor.gg — currently in active development. It currently features an AI build guide generator, a floating Shaper chat companion powered by Claude, an interactive passive skill tree canvas, and a growing structured knowledge base covering PoE2 mechanics, weapons, classes, and ascendancies. More features are being developed.",
      problem:
        "Path of Exile 2 is an extremely complex ARPG with thousands of different mechanics and builds which can be overwhelming for newer and intermediate players. We are trying to provide a tool which minimises this steep learning curve and encourages build innovation. There is currently no single tool which explains builds, highlights relevant passive nodes, and answers game mechanic questions in context.",
      approach:
        "Built a Next.js frontend with a canvas-based passive skill tree visualiser and a FastAPI Python backend. The AI layer uses Anthropic's Claude API fueled by a hand-curated knowledge base of markdown files. Rather than dumping raw game data at the AI, each file is carefully authored — sifting through patch notes, community resources, and Path of Building data to extract only what is accurate, current, and relevant to the questions being asked.",
      decisions:
        "The key decision was building a file-based knowledge system rather than relying on Claude's training data alone. PoE2 is in Early Access and Claude's training data contains a lot of PoE1 knowledge — without grounding, the AI confidently gives wrong answers. Curating the knowledge base manually means every piece of information the AI uses has been verified against the current patch, keeping responses accurate as the game continues to change.",
      learned:
        "So far this project has taught me how important data collection and prompt grounding is when using LLMs in domain-specific contexts. It's also the first project where I have used Python which has allowed me to improve my skills in a valuable new programming language. I have also used this opportunity to structure a FastAPI backend for AI powered endpoints. One of the bigger features was building a zoomable and pannable passive tree canvas renderer from scratch.",
    },
  },
  {
    id: "taskflow",
    number: "04",
    title: "TaskFlow",
    description: "A real-time collaborative task manager built with Next.js, TypeScript, Socket.io and PostgreSQL. Features drag and drop, live activity feeds, and multi-user collaboration.",
    tags: ["Next.js", "TypeScript", "Node.js", "Socket.io", "PostgreSQL", "Prisma"],
    image: undefined,
    images: [
      "/images/taskflow/LoginScreen.jpg",
      "/images/taskflow/CreateAccountScreen.jpg",
      "/images/taskflow/BoardHomeScreen.jpg",
      "/images/taskflow/BoardIdscreen.jpg",
      "/images/taskflow/EditCard.jpg"
    ],
    url: undefined,
    githubUrl: "https://github.com/Mortyl/task-manager",
    caseStudy: {
      overview: "TaskFlow is a Trello-style collaborative task manager where multiple users can work on boards in real time. Users can create boards, add columns and cards, drag cards between columns, and see live updates from other users instantly.",
      problem: "Most task managers don't show live updates without refreshing — collaborating with a team means constantly missing changes. I wanted to build something where changes are reflected instantly across all connected users.",
      approach: "I built a custom Node.js server alongside Next.js to support persistent WebSocket connections via Socket.io. The frontend uses React with @dnd-kit for drag and drop, and the backend uses Prisma with PostgreSQL on Neon for data storage.",
      decisions: "The key decision was using a custom Node.js server rather than Next.js API routes alone. Next.js serverless functions can't maintain persistent connections which Socket.io requires. This meant more setup but gave full control over the real-time layer.",
      learned: "I learned how real-time systems work at a deeper level — managing rooms, broadcasting events, and keeping client state in sync with the server. I also got experience designing a relational database schema with Prisma and handling JWT authentication from scratch.",
    },
  },
  {
    id: "mmo",
    number: "05",
    title: "ARPG-MMO (in development)",
    description:
      "An ambitious solo project I'm using to push my AI-assisted development workflow as far as it will go — building a full ARPG-MMO in Unreal Engine 5.8 to see how far AI can take one developer. Under the hood it's real systems engineering: data-driven C++ architecture, a FastAPI and PostgreSQL persistence service consumed in-engine, and networked movement with client-side prediction. Private repository but can give live demo on request.",
    tags: ["Unreal Engine 5", "C++", "GAS", "FastAPI", "PostgreSQL", "Networking", "UMG"],
    image: undefined,
    images: ["/images/mmo/startingzone.jpg", "/images/mmo/fox.jpg"],
    url: undefined,
    githubUrl: undefined,
    caseStudy: {
      overview:
        "This is a low-poly, stylised ARPG-MMO I'm building solo in Unreal Engine 5.8, and I took it on for a specific reason: to challenge myself with a project far beyond typical solo scope and push my AI-assisted development workflow as hard as I can — to see how far AI can genuinely take one developer. It's a game rather than a web app, but the bulk of the work is software engineering that transfers directly: a data-driven, modular C++ architecture, combat on Unreal's Gameplay Ability System, a separate FastAPI and PostgreSQL backend for player persistence consumed in-engine, and networked movement with client-side prediction. The mob combat pass is complete — data-driven AI with patrol, telegraphed and dodgeable heavy attacks, death, and a custom foot-IK animation node — and player combat is the next milestone.",
      problem:
        "I wanted a deliberately hard, sprawling project to stress-test how I work with AI — something that would force me to direct AI tooling across many unfamiliar domains at once: C++ gameplay systems, animation, networking, and backend persistence. An MMO is a large systems problem before it is anything else: it needs shared, reusable code that scales to many classes, abilities, mobs, and items without duplicating logic per instance, plus a real backend to persist player state and a networking model that stays responsive over latency. The goal was to build those foundations properly with AI in the loop, rather than script one-off behaviour I'd have to rewrite later.",
      approach:
        "The architecture is data-driven throughout: shared C++ base classes plus data assets define classes, abilities, and mobs, so new content is authored as data rather than new code. Combat runs on the Gameplay Ability System in C++, and player persistence lives in a separate FastAPI and PostgreSQL service, consumed in-engine through a custom C++ UPersistenceSubsystem that saves and loads player state. The UI is pure C++ UMG — spatial inventory, equipment and stats panels, HUD, talent tree, and the menu and character-creation flow, with no Blueprint UI — and the loot loop runs end to end from kill to interact to loot window to bags.",
      decisions:
        "The key decision was to favour modularity over speed early: shared base classes and data assets rather than per-instance duplication, so each new mob, class, or item is a data change rather than a code change. For networking I used Unreal's Character Movement Component for client-side predicted movement and validated it in networked Play-In-Editor; a full dedicated-server build needs a source-built engine, so I've deferred that and test replication in networked PIE for now. On animation, creatures without Mannequin IK bones couldn't use the standard foot placement, so I wrote a bespoke AnimGraph node to drive foot IK rather than reworking every skeleton.",
      learned:
        "The biggest thing this project is teaching me is how to work with AI at scale: directing AI tooling effectively across a large, multi-domain codebase, breaking ambitious features into pieces a model can genuinely help with, and staying the architect who reviews and integrates rather than offloading judgement. Technically it has stretched me well beyond web work — a data-driven C++ architecture that stays modular as scope grows, the Gameplay Ability System, and reasoning about replication and client-side prediction under latency — while the FastAPI and PostgreSQL persistence service wired into the engine through a subsystem is the most directly transferable piece. It has also taught me to be honest about scope: it's solo and in active development, not released, and I've prioritised getting the underlying systems and my workflow right over rushing features.",
    },
  },
];
