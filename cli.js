const readline = require("readline");
const { exec } = require("child_process");
const d = require("./data");
const tty = process.stdout.isTTY;
const paint = (code) => (s) => (tty ? `\x1b[${code}m${s}\x1b[0m` : s);
const bold = paint("1");
const dim = paint("2");
const green = paint("32");
const cyan = paint("36");
const yellow = paint("33");
const magenta = paint("35");
const banner = String.raw`
 ____   ___  ____  _   _    _    _   _
|  _ \ / _ \/ ___|| | | |  / \  | \ | |
| |_) | | | \___ \| |_| | / _ \ |  \| |
|  _ <| |_| |___) |  _  |/ ___ \| |\  |
|_| \_\\___/|____/|_| |_/_/   \_\_| \_|`;
const pad = (s, n) => s + " ".repeat(Math.max(0, n - s.length));
const section = (t) => `\n${bold(cyan(t))}\n${dim("-".repeat(t.length))}`;
function openUrl(url) {
  const cmd =
    process.platform === "darwin" ? "open" :
    process.platform === "win32" ? 'start ""' : "xdg-open";
  exec(`${cmd} "${url}"`);
}
function findProject(q) {
  if (!q) return null;
  const n = parseInt(q, 10);
  if (!isNaN(n)) return d.projects[n - 1];
  q = q.toLowerCase();
  return d.projects.find((p) => p.id === q || p.name.toLowerCase().includes(q));
}
const commands = {
  help() {
    const rows = [
      ["about", "who I am"],
      ["projects","things I've built (try: project 1,project vyom)"],
      ["experience","internship and open source"],
      ["skills","languages,frameworks,tools"],
      ["achievements","hackathons and contests"],
      ["socials", "links"],
      ["contact", "email me"],
      ["open <name>", "open a link or project in your browser"],
      ["neofetch", "me, but in neofetch format"],
      ["clear / exit", ""],
    ];
    return section("commands") + "\n" + rows.map(([c, t]) => `  ${green(pad(c, 14))}${t}`).join("\n");
  },
  about() {
    return `\n${bold(d.name)}\n${dim(d.role)}\n${dim(d.school)}\n\n${d.bio.join("\n")}`;
  },
  projects() {
    const list = d.projects
      .map((p, i) => `  ${yellow(i + 1 + ".")} ${bold(pad(p.name, 20))}${dim(p.tag)}`)
      .join("\n");
    return section("projects") + "\n" + list + `\n\n${dim("type 'project <number or name>' for details")}`;
  },
  project(arg) {
    const p = findProject(arg);
    if (!p) return arg ? `no project called '${arg}'. type 'projects'.` : "usage: project <number or name>";
    return (
      `\n${bold(magenta(p.name))} ${dim("- " + p.tag)}\n${dim(p.stack)}\n\n${p.desc.join("\n")}\n\n` +
      `${green("code")}  ${p.repo}`
    );
  },
  experience() {
    return (
      section("experience") +
      "\n" +
      d.experience
        .map((e) => `\n${bold(e.role)} ${dim("@ " + e.org + "  (" + e.when + ")")}\n` + e.points.map((x) => `  - ${x}`).join("\n"))
        .join("\n")
    );
  },
  skills() {
    const s = d.skills;
    return (
      section("skills") +
      `\n${green(pad("languages", 12))}${s.languages}\n${green(pad("frameworks", 12))}${s.frameworks}\n` +
      `${green(pad("tools", 12))}${s.tools}\n${green(pad("core", 12))}${s.core}`
    );
  },
  achievements() {
    return section("achievements") + "\n" + d.achievements.map((a) => `  ${yellow("*")} ${a}`).join("\n");
  },
  socials() {
    return (
      section("socials") +
      "\n" +
      Object.entries(d.links)
        .filter(([k]) => k !== "email")
        .map(([k, v]) => `  ${green(pad(k, 11))}${v}`)
        .join("\n")
    );
  },
  contact() {
    return `\n${green("email")}  ${d.email}\n${dim("or find me on github / linkedin (type 'socials')")}`;
  },
  open(arg) {
    if (!arg) return "usage: open <github|linkedin|leetcode|instagram|email|project name>";
    const key = arg.toLowerCase();
    const url = d.links[key] || (findProject(key) || {}).repo;
    if (!url) return `don't know how to open '${arg}'`;
    openUrl(url);
    return dim(`opening ${url}`);
  },
  neofetch() {
    const rows = [
      ["name", d.name],
      ["role", d.role],
      ["school", "Chitkara University"],
      ["now", "ML Intern @ Yuva Intern"],
      ["langs", "Python, TS, Swift, C, Java"],
      ["editor", "VS Code"],
      ["github", d.links.github.replace("https://", "")],
    ];
    return "\n" + rows.map(([k, v]) => `${cyan(pad(k, 8))}${v}`).join("\n");
  },
  whoami() { return "guest (but you can call me a recruiter's favourite)"; },
  pwd() { return "/home/guest/roshan"; },
  ls() { return "about  projects  experience  skills  achievements  socials  contact"; },
  date() { return new Date().toString(); },
  sudo() { return "nice try. guest is not in the sudoers file. this incident will not be reported."; },
};
commands.whoami=()=>commands.about();
commands.bio=commands.about;
commands.links=commands.socials;
commands.exp=commands.experience;
function run(line) {
  const [cmd, ...rest] = line.trim().split(/\s+/);
  if (!cmd) return "";
  if (cmd === "clear") { console.clear(); return ""; }
  const fn = commands[cmd.toLowerCase()];
  return fn ? fn(rest.join(" ")) : `command not found: ${cmd}. type 'help'.`;
}
if (process.argv.length>2) {
  console.log(run(process.argv.slice(2).join(" ")));
  process.exit(0);
}
console.clear();
console.log(cyan(banner));
console.log(`\n${bold("Hey, I'm Roshan.")} ${dim("Welcome to my terminal.")}`);
console.log(`${dim("type")} ${green("help")} ${dim("to see what you can do, or")} ${green("about")} ${dim("to start.")}\n`);
const names=[...Object.keys(commands),"clear","exit"];
const rl=readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `${green("guest@roshan")}${dim(":")}${cyan("~")}${dim("$")} `,
  completer: (line) => {
    const hits = names.filter((c) => c.startsWith(line));
    return [hits.length ? hits : names, line];
  },
});
rl.prompt();
rl.on("line", (line) => {
  if (["exit", "quit"].includes(line.trim())) return rl.close();
  const out = run(line);
  if (out) console.log(out + "\n");
  rl.prompt();
});
rl.on("close", () => {
  console.log(dim("\nthanks for stopping by.\n"));
  process.exit(0);
});