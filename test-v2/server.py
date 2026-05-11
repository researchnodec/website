#!/usr/bin/env python3
import http.server
import webbrowser
import os

PORT = 8080

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    webbrowser.open(f'http://localhost:{PORT}')
    with http.server.HTTPServer(("", PORT), MyHandler) as httpd:
        print(f"🚀 V2 test server running at http://localhost:{PORT}")
        print("📱 Testing new design...")
        print("📝 Press Ctrl+C to stop")
        httpd.serve_forever()
