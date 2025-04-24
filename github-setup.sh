#!/bin/bash

# Helper script for GitHub setup

# Check if repository URL is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <github-repository-url>"
  echo "Example: $0 https://github.com/yourusername/magnify-modal-reveal.git"
  exit 1
fi

REPO_URL=$1

# Configure Git if not already configured
if [ -z "$(git config --global user.name)" ]; then
  echo "Configuring Git user name..."
  read -p "Enter your name: " name
  git config --global user.name "$name"
fi

if [ -z "$(git config --global user.email)" ]; then
  echo "Configuring Git user email..."
  read -p "Enter your email: " email
  git config --global user.email "$email"
fi

# Initialize Git repository if not already initialized
if [ ! -d ".git" ]; then
  echo "Initializing Git repository..."
  git init
fi

# Add all files to Git
echo "Adding files to Git..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Dockerize application with development and production configurations"

# Add remote repository
echo "Adding remote repository..."
git remote add origin $REPO_URL

# Push to GitHub
echo "Pushing to GitHub..."
git push -u origin main

echo "Setup complete! Your code is now on GitHub at $REPO_URL"
exit 0
