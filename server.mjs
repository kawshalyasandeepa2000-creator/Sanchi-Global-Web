import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';

const root = process.cwd();
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.json':'application/json','.ico':'image/x-icon'};
const port = Number(process.env.PORT) || 4173;

createServer(async (req,res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const file = resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (file !== root && !file.startsWith(root + sep)) { res.writeHead(403).end('Forbidden'); return; }
    if (!(await stat(file)).isFile()) { res.writeHead(404).end('Not found'); return; }
    const content = await readFile(file);
    res.writeHead(200, {'Content-Type':mime[extname(file)] || 'application/octet-stream', 'X-Content-Type-Options':'nosniff'}).end(content);
  } catch { res.writeHead(404).end('Not found'); }
}).listen(port, () => console.log(`SENCHI GLOBAL website running at http://localhost:${port}`));
