#!/bin/bash

echo "🧪 Testing V2 new design..."

# Create test directory
echo "📁 Setting up V2 test environment..."
mkdir -p test-v2
cd test-v2

# Copy V2 files
echo "📋 Copying V2 files..."
cp ../V2/* ./

# Create test server
echo "🐍 Creating test server..."
cat > server.py << 'EOF'
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
EOF

chmod +x server.py

echo "✅ V2 test environment ready!"
echo ""
echo "🌐 To start testing:"
echo "   cd test-v2"
echo "   ./server.py"
echo ""
echo "📱 What to test:"
echo "   - New design and layout"
echo "   - All animations and transitions"
echo "   - Team section with current photos"
echo "   - Contact form (Formspree)"
echo "   - Responsiveness on all devices"
echo "   - Performance and loading"
echo ""
echo "🔄 When ready to deploy V2:"
echo "   cd .."
echo "   cp -r V2/* ./"  
echo "   git add . && git commit -m 'Deploy V2 design' && git push origin main"
