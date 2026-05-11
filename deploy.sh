#!/bin/bash

# Deploy script for ResearchNode website
# Usage: ./deploy.sh

echo "🚀 Starting ResearchNode website deployment..."

# Check if we're in the right directory
if [ ! -d "new-design" ]; then
    echo "❌ Error: new-design directory not found!"
    exit 1
fi

# Navigate to new design
cd new-design

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🔨 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

# Go back to root directory
cd ..

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
cp new-design/dist/assets/*.css ./styles.css

# Copy new JS (from dist/assets)  
cp new-design/dist/assets/*.js ./script.js

# Copy images
cp new-design/dist/img/*.jpg ./

# Copy new README
cp new-design/README.md ./

# Copy server files
cp new-design/server.js ./
cp new-design/.env.example ./
cp new-design/package.json ./

echo "✅ Files replaced successfully!"

# Show what changed
echo ""
echo "📋 Changed files:"
echo "  - index.html (new React app)"
echo "  - styles.css (new design styles)"
echo "  - script.js (new React bundle)"
echo "  - *.jpg (team photos)"
echo "  - README.md (updated documentation)"
echo "  - server.js (new backend)"
echo "  - package.json (updated dependencies)"
echo "  - .env.example (environment variables)"

echo ""
echo "🌐 Ready to deploy to GitHub!"
echo "   Run: git add . && git commit -m 'Deploy new React design' && git push origin main"
