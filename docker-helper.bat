@echo off
REM Helper script for Docker operations on Windows

if "%~1"=="" (
  echo Usage: %0 {dev^|prod^|build-dev^|build-prod^|clean}
  exit /b 1
)

if "%~1"=="dev" (
  echo Starting development environment...
  docker-compose up app-dev
  exit /b 0
)

if "%~1"=="prod" (
  echo Starting production environment...
  docker-compose up app-prod --build
  exit /b 0
)

if "%~1"=="build-dev" (
  echo Building development image...
  docker build -t magnify-modal-reveal-dev -f Dockerfile.dev .
  exit /b 0
)

if "%~1"=="build-prod" (
  echo Building production image...
  docker build -t magnify-modal-reveal .
  exit /b 0
)

if "%~1"=="clean" (
  echo Cleaning Docker resources...
  docker-compose down
  docker rmi magnify-modal-reveal magnify-modal-reveal-dev
  exit /b 0
)

echo Unknown command: %1
echo Usage: %0 {dev^|prod^|build-dev^|build-prod^|clean}
exit /b 1
