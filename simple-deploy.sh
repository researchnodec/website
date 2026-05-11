#!/bin/bash

# Simple deploy script - just copy files from dist
echo "🚀 Deploying ResearchNode website..."

# Check if new-design exists
if [ ! -d "new-design" ]; then
    echo "❌ Error: new-design directory not found!"
    exit 1
fi

# Check if dist exists in new-design
if [ ! -d "new-design/dist" ]; then
    echo "❌ Error: new-design/dist not found! Please build first."
    exit 1
fi

# Backup current files
echo "💾 Backing up current files..."
mkdir -p backup
cp index.html backup/ 2>/dev/null || true
cp styles.css backup/ 2>/dev/null || true
cp script.js backup/ 2>/dev/null || true
cp *.jpg backup/ 2>/dev/null || true

# Replace files with new design
echo "🔄 Replacing files..."

# Copy new HTML
cp new-design/dist/index.html ./

# Copy new CSS (from dist/assets)
if [ -f "new-design/dist/assets/index-"*.css ]; then
    cp new-design/dist/assets/index-*.css ./styles.css
fi

# Copy new JS (from dist/assets)  
if [ -f "new-design/dist/assets/index-"*.js ]; then
    cp new-design/dist/assets/index-*.js ./script.js
fi

# Copy images
cp new-design/dist/img/*.jpg ./

# Copy new README
cp new-design/README.md ./

echo "✅ Files replaced successfully!"

# Show what changed
echo ""
echo "📋 Changed files:"
echo "  - index.html (new React app)"
echo "  - styles.css (new design styles)"
echo "  - script.js (new React bundle)"
echo "  - *.jpg (team photos)"
echo "  - README.md (updated documentation)"

echo ""
echo "🌐 Ready to deploy to GitHub!"
echo "   Run: git add . && git commit -m 'Deploy new React design' && git push origin main"
