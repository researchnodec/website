#!/bin/bash

echo "🧪 Testing new design with current files..."

# Create test directory
echo "📁 Setting up test environment..."
mkdir -p test-site
cd test-site

# Copy current working files
echo "📋 Copying current files..."
cp ../index.html ./
cp ../styles.css ./
cp ../script.js ./
cp ../*.jpg ./

# Create simple server
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
        print(f"🚀 Test server running at http://localhost:{PORT}")
        print("📱 Testing current design...")
        print("📝 Press Ctrl+C to stop")
        httpd.serve_forever()
EOF

chmod +x server.py

echo "✅ Test environment ready!"
echo ""
echo "🌐 To start testing:"
echo "   cd test-site"
echo "   ./server.py"
echo ""
echo "📱 Test features:"
echo "   - Current design with all functionality"
echo "   - Contact form working"
echo "   - All sections responsive"
echo ""
echo "🔄 When ready to switch to new design:"
echo "   cd .."
echo "   ./github-pages-deploy.sh"
