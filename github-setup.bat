@echo off
REM Helper script for GitHub setup on Windows

REM Check if repository URL is provided
if "%~1"=="" (
  echo Usage: %0 ^<github-repository-url^>
  echo Example: %0 https://github.com/yourusername/magnify-modal-reveal.git
  exit /b 1
)

set REPO_URL=%~1

REM Configure Git if not already configured
git config --global user.name >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
  echo Configuring Git user name...
  set /p name="Enter your name: "
  git config --global user.name "%name%"
)

git config --global user.email >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
  echo Configuring Git user email...
  set /p email="Enter your email: "
  git config --global user.email "%email%"
)

REM Initialize Git repository if not already initialized
if not exist .git (
  echo Initializing Git repository...
  git init
)

REM Add all files to Git
echo Adding files to Git...
git add .

REM Commit changes
echo Committing changes...
git commit -m "Dockerize application with development and production configurations"

REM Add remote repository
echo Adding remote repository...
git remote add origin %REPO_URL%

REM Push to GitHub
echo Pushing to GitHub...
git push -u origin main

echo Setup complete! Your code is now on GitHub at %REPO_URL%
exit /b 0
