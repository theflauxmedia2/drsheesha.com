"""Local preview of the prerendered dist folder, including real 404s."""

from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import mimetypes

ROOT = Path(__file__).resolve().parents[1] / 'dist'


class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        url = self.path.split('?', 1)[0]
        if url != '/' and url.endswith('/'):
            self.send_response(308)
            self.send_header('Location', url.rstrip('/') or '/')
            self.end_headers()
            return

        rel = url.lstrip('/')
        if url == '/':
            candidates = [ROOT / 'index.html']
        else:
            candidates = [ROOT / rel, ROOT / f'{rel}.html', ROOT / rel / 'index.html']

        for candidate in candidates:
            if candidate.is_file():
                data = candidate.read_bytes()
                ctype = mimetypes.guess_type(candidate.name)[0] or 'application/octet-stream'
                if candidate.suffix == '.html':
                    ctype = 'text/html; charset=utf-8'
                self.send_response(200)
                self.send_header('Content-Type', ctype)
                self.send_header('Content-Length', str(len(data)))
                self.end_headers()
                self.wfile.write(data)
                return

        data = (ROOT / '404.html').read_bytes()
        self.send_response(404)
        self.send_header('Content-Type', 'text/html; charset=utf-8')
        self.end_headers()
        self.wfile.write(data)

    def log_message(self, fmt, *args):
        print(self.address_string(), fmt % args)


if __name__ == '__main__':
    ThreadingHTTPServer(('127.0.0.1', 4174), Handler).serve_forever()
