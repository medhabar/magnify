# Magnify Modal Reveal

A React application that demonstrates a product modal with an image magnifier feature. Perfect for e-commerce websites where users want to examine product details closely.

## How can I edit this code?

There are several ways of editing your application.

You can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Docker Support

This project includes Docker support for both development and production environments.

### Using Docker for Development

```sh
# Start the development environment
docker-compose up app-dev

# The application will be available at http://localhost:8080
```

### Using Docker for Production

```sh
# Build and start the production environment
docker-compose up app-prod --build

# The application will be available at http://localhost
```

### Building and Running Docker Images Manually

```sh
# Build the production image
docker build -t magnify-modal-reveal .

# Run the production image
docker run -p 80:80 magnify-modal-reveal

# Build the development image
docker build -t magnify-modal-reveal-dev -f Dockerfile.dev .

# Run the development image
docker run -p 8080:8080 -v $(pwd):/app -v /app/node_modules magnify-modal-reveal-dev
```

### Using the Helper Script

This project includes helper scripts for common Docker operations:

**For Linux/Mac:**
```sh
# Make the script executable
chmod +x docker-helper.sh

# Start development environment
./docker-helper.sh dev

# Start production environment
./docker-helper.sh prod

# Build development image
./docker-helper.sh build-dev

# Build production image
./docker-helper.sh build-prod

# Clean Docker resources
./docker-helper.sh clean
```

**For Windows:**
```sh
# Start development environment
docker-helper.bat dev

# Start production environment
docker-helper.bat prod

# Build development image
docker-helper.bat build-dev

# Build production image
docker-helper.bat build-prod

# Clean Docker resources
docker-helper.bat clean
```

## GitHub Repository

To push this project to your own GitHub repository, follow these steps:

### Option 1: Using the Helper Script

1. Create a new repository on GitHub (do not initialize it with a README, .gitignore, or license)
2. Use the provided helper script:

**For Linux/Mac:**
```sh
# Make the script executable
chmod +x github-setup.sh

# Run the script with your GitHub repository URL
./github-setup.sh https://github.com/yourusername/magnify-modal-reveal.git
```

**For Windows:**
```sh
# Run the batch script with your GitHub repository URL
github-setup.bat https://github.com/yourusername/magnify-modal-reveal.git
```

### Option 2: Manual Setup

1. Create a new repository on GitHub (do not initialize it with a README, .gitignore, or license)
2. Push the local repository to GitHub:

```sh
# Initialize Git repository
git init

# Configure Git (if not already configured)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Add all files to Git
git add .

# Commit changes
git commit -m "Dockerize application with development and production configurations"

# Add your GitHub repository as a remote
git remote add origin https://github.com/yourusername/magnify-modal-reveal.git

# Push the code to GitHub
git push -u origin main
```

Once pushed, you can clone it using:

```sh
git clone https://github.com/yourusername/magnify-modal-reveal.git
```

## Deployment Options

You can deploy this application to any platform that supports Docker containers, such as:

- AWS Elastic Container Service (ECS)
- Google Cloud Run
- Azure Container Instances
- Heroku (with Docker support)
- Digital Ocean App Platform
- Vercel
- Netlify

