#!/bin/bash

# Helper script for Docker operations

case "$1" in
  dev)
    echo "Starting development environment..."
    docker-compose up app-dev
    ;;
  prod)
    echo "Starting production environment..."
    docker-compose up app-prod --build
    ;;
  build-dev)
    echo "Building development image..."
    docker build -t magnify-modal-reveal-dev -f Dockerfile.dev .
    ;;
  build-prod)
    echo "Building production image..."
    docker build -t magnify-modal-reveal .
    ;;
  clean)
    echo "Cleaning Docker resources..."
    docker-compose down
    docker rmi magnify-modal-reveal magnify-modal-reveal-dev
    ;;
  *)
    echo "Usage: $0 {dev|prod|build-dev|build-prod|clean}"
    exit 1
esac

exit 0
