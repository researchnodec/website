#!/bin/bash

echo "🧪 Testing new React design locally..."

# Check if new-design exists
if [ ! -d "new-design" ]; then
    echo "❌ Error: new-design directory not found!"
    exit 1
fi

# Create test directory
echo "📁 Setting up test environment..."
mkdir -p test-site
cd test-site

# Copy new design files
echo "📋 Copying new design files..."
cp ../new-design/dist/* ./

# Create simple Python server script
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
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    webbrowser.open(f'http://localhost:{PORT}')
    with http.server.HTTPServer(("", PORT), MyHandler) as httpd:
        print(f"🚀 Test server running at http://localhost:{PORT}")
        print("📱 Testing new React design...")
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
echo "📝 This will open the new design in your browser"
echo "📱 Test all features:"
echo "   - Responsiveness (resize browser)"
echo "   - Animations and transitions"
echo "   - Team section with photos"
echo "   - Contact form (will show error - expected)"
echo "   - Language switch (if implemented)"
echo ""
echo "🔄 When ready for production:"
echo "   cd .."
echo "   ./github-pages-deploy.sh"
