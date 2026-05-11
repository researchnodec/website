#!/bin/bash

# GitHub Pages deploy script for ResearchNode website
echo "🚀 Deploying to GitHub Pages..."

# Check if new-design exists
if [ ! -d "new-design" ]; then
    echo "❌ Error: new-design directory not found!"
    exit 1
fi

# Check if dist exists in new-design
if [ ! -d "new-design/dist" ]; then
    echo "❌ Error: new-design/dist not found!"
    exit 1
fi

# Backup current files
echo "💾 Backing up current files..."
mkdir -p backup
cp index.html backup/ 2>/dev/null || true
cp styles.css backup/ 2>/dev/null || true
cp script.js backup/ 2>/dev/null || true
cp *.jpg backup/ 2>/dev/null || true

# Replace files with new design (GitHub Pages compatible)
echo "🔄 Replacing files for GitHub Pages..."

# Copy new HTML
cp new-design/dist/index.html ./

# Copy new CSS (from dist/assets) - rename for GitHub Pages
if [ -f "new-design/dist/assets/index-"*.css ]; then
    cp new-design/dist/assets/index-*.css ./styles.css
fi

# Copy new JS (from dist/assets) - rename for GitHub Pages  
if [ -f "new-design/dist/assets/index-"*.js ]; then
    cp new-design/dist/assets/index-*.js ./script.js
fi

# Copy images
cp new-design/dist/img/*.jpg ./

# Copy new README
cp new-design/README.md ./

# Copy favicon and icons
cp new-design/dist/favicon.svg ./
cp new-design/dist/icons.svg ./

# Create .nojekyll file to prevent Jekyll processing
touch .nojekyll

echo "✅ Files replaced successfully for GitHub Pages!"

# Show what changed
echo ""
echo "📋 Changed files:"
echo "  - index.html (new React app)"
echo "  - styles.css (new design styles)"
echo "  - script.js (new React bundle)"
echo "  - *.jpg (team photos)"
echo "  - favicon.svg (new favicon)"
echo "  - icons.svg (new icons)"
echo "  - README.md (updated documentation)"
echo "  - .nojekyll (GitHub Pages compatibility)"

echo ""
echo "🌐 Ready to deploy to GitHub Pages!"
echo "   Run: git add . && git commit -m 'Deploy new React design to GitHub Pages' && git push origin main"
echo ""
echo "📝 Note: Contact form will use Formspree (update HTML with your Formspree ID)"
