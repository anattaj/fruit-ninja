// Serves fruit_ninja.html on localhost and opens it. The page needs a server rather than
// a double-clicked file because browsers only grant the camera to secure origins,
// and http://localhost is one while file:// is not.
const http = require("http");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const PORT = Number(process.argv[2]) || 4748;
const DIR = __dirname;
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript" };

http.createServer((req, res) => {
  const name = decodeURIComponent(new URL(req.url, "http://x").pathname).replace(/^\/+/, "") || "fruit_ninja.html";
  const file = path.join(DIR, name);
  // Only files directly in this folder, so nothing else on disk is reachable.
  if (path.dirname(file) !== DIR || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
    res.writeHead(404).end();
    return;
  }
  res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
}).listen(PORT, "127.0.0.1", () => {
  const url = `http://localhost:${PORT}`;
  console.log(`Fruit Ninja running at ${url}  (Ctrl+C to stop)`);
  if (!process.argv.includes("--no-open")) exec(process.platform === "win32" ? `start "" ${url}` : `open ${url}`);
});
