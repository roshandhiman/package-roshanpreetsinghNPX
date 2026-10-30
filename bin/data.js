module.exports = {
  name: "Roshanpreet Singh Dhiman",
  handle: "roshan",
  role: "Full-stack developer · AI & systems tinkerer",
  school: "B.E. Computer Science, Chitkara University (2025 - 2029)",
  location: "Punjab, India",

  bio: [
    "I'm a computer science student who has loved computers since I was a kid.",
    "I was always the one opening things up to see how they work, and that",
    "curiosity never really went away.",
    "",
    "What keeps me going is solving problems. Give me something broken or",
    "confusing and I won't rest until I understand it. I like learning by",
    "building, and I'm always looking for the next hard thing to figure out.",
  ],

  links: {
    github: "https://github.com/roshandhiman",
    linkedin: "https://linkedin.com/in/roshandhiman",
    leetcode: "https://leetcode.com/roshanpreetsingh",
    instagram: "https://instagram.com/roshanpreetsingh.3",
    portfolio: "https://roshandhiman-portfolio.vercel.app",
    email: "mailto:roshanpreetsinghdhiman@gmail.com",
    // portfolio: "https://your-portfolio-url",
    // resume: "https://link-to-your-resume.pdf",
  },
  email: "roshanpreetsinghdhiman@gmail.com",

  projects: [
    {
      id: "vyom-os",
      name: "Vyom OS",
      tag: "web desktop OS",
      stack: "React 18, Vite, Zustand, WebGL, IndexedDB",
      desc: [
        "A desktop operating system that runs in the browser.",
        "Multi-workspace window manager, dock, and 10 apps including a sandboxed",
        "shell, code editor and proxy browser. Files live in an in-memory virtual",
        "filesystem that syncs to IndexedDB. WebGL shaders keep it at 60 FPS.",
      ],
      repo: "https://github.com/roshandhiman/vyom-os"
    },
    {
      id: "ada",
      name: "Ada",
      tag: "autonomous AI threat analyst",
      stack: "Next.js, Supabase, Groq, Llama 3.3, Vercel",
      desc: [
        "An agent that pulls 500+ security feeds per cycle through the Algolia API",
        "and summarises threats with Llama 3.3 70B in under 2 seconds.",
        "Built with a teammate; backend handles 1,000+ API requests per session.",
      ],
      repo: "https://github.com/roshandhiman/autonomous-ai-persona"
    },
    {
      id: "sable",
      name: "Sable",
      tag: "prompt-to-website generator",
      stack: "React, Vite, Tailwind, Groq, Gemini, OpenRouter",
      desc: [
        "Type a prompt, get a responsive landing page rendered live in an editable",
        "two-pane workspace. A fallback router moves between Groq, Gemini and",
        "OpenRouter when one fails or is slow, which cut turnaround by 40%.",
      ],
      repo: "https://github.com/roshandhiman/sable"
    },
    {
      id: "cherry",
      name: "CHERRY",
      tag: "offline desktop assistant",
      stack: "Python, Ollama, AsyncIO, local LLMs",
      desc: [
        "A personal assistant that runs fully on-device with quantized models.",
        "No cloud, works offline. Async plugin system handles tool calls, desktop",
        "workflows and file operations with sub-50ms local response.",
      ],
      repo: "https://github.com/roshandhiman/cherry"
    },
    {
      id: "mac-live-wallpaper",
      name: "Mac Live Wallpaper",
      tag: "native macOS utility",
      stack: "Swift, AppKit, AVFoundation",
      desc: [
        "Plays looping 4K MP4s as your desktop wallpaper using hardware decoding,",
        "with CPU under 2%. Most of the work was hunting down threading race",
        "conditions that were crashing the app.",
      ],
      repo: "https://github.com/roshandhiman/Mac-Live-Wallpaper"
    },
    {
      id: "friday-desktop",
      name: "friday-desktop",
      tag: "offline JARVIS-style assistant for macOS",
      stack: "Electron, React, FastAPI, Ollama, faster-whisper",
      desc: [
        "A fully offline AI desktop assistant for macOS, inspired by JARVIS.",
        "Talk to it with local voice (faster-whisper), and it handles system",
        "control and app launching, with the models running through Ollama.",
      ],
      repo: "https://github.com/roshandhiman/friday-desktop",
    },
    {
      id: "file-agent",
      name: "file-agent",
      tag: "offline file-making agent",
      stack: "Python, PydanticAI, Ollama",
      desc: [
        "Tell it in plain English what you want and it creates the file or saves",
        "the note. Runs fully offline on a local model through Ollama.",
      ],
      repo: "https://github.com/roshandhiman/file-agent",
    },
    {
      id: "dos-attack-lab",
      name: "DoS Lab",
      tag: "cybersecurity learning lab",
      stack: "Bash, Linux networking tools",
      desc: [
        "An educational lab for understanding how denial-of-service traffic works:",
        "packet generation, traffic behaviour and the networking tools around it.",
        "Meant for controlled environments only.",
      ],
      repo: "https://github.com/roshandhiman/dos_attack",
    },
  ],

  experience: [
    {
      role: "Machine Learning Engineer Intern",
      org: "Yuva Intern (Henry Harvin)",
      when: "Oct 2026 - now",
      points: [
        "Built end-to-end Python ML pipelines: preprocessing, feature selection, hyperparameter tuning (35% lower latency).",
        "Set up modular CI/CD testing with a 4-person team (25% faster release sprints).",
      ],
    },
    {
      role: "Open Source Contributor",
      org: "Various projects",
      when: "Mar 2025 - now",
      points: [
        "Reproduced and patched platform-specific build failures and runtime edge cases.",
        "Reviewed code with maintainers, grew unit test suites by 15%, fixed auth bottlenecks.",
      ],
    },
  ],

  skills: {
    languages: "Python, C, Java, JavaScript, TypeScript, SQL, Swift, HTML, CSS",
    frameworks: "React, Next.js, Node, Express, Tailwind, FastAPI, Electron, PyTorch, Pydantic AI, OpenCV",
    tools: "Git, Linux, Ollama, Supabase, Firebase, MySQL, Vercel, Xcode, REST APIs",
    core: "DSA, Operating Systems, Systems Programming, OOD",
  },

  achievements: [
    "Finalist, Finvasia Innovation Hackathon 2026",
    "Top 5, ThinkRoot x Vortex '26",
    "Top 5, Salesforce Crosswalk '25",
    "4th of 300+ in Chitkara University DSA contest",
    "180+ problems solved on LeetCode",
  ],
};