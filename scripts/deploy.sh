#!/usr/bin/env bash
set -e

echo "Building project..."
npm run build
touch dist/.nojekyll

echo "Deploying dist to gh-pages branch..."
REMOTE_URL=$(git remote get-url origin)

cd dist
rm -rf .git
git init -b gh-pages
git config user.name "Andy Haryoko"
git config user.email "turnback2ubuntu@gmail.com"
git add -A
git commit -m "deploy: $(date '+%Y-%m-%d %H:%M:%S')"
git push -f "$REMOTE_URL" gh-pages
rm -rf .git

echo "Deployment to gh-pages completed successfully!"
