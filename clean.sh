#!/bin/bash

if [ "$1" == "bdd" ]; then
    docker-compose down -v
    docker volume prune -f
elif [ "$1" == "all" ]; then
    docker-compose down -v
    docker volume prune -f
    docker network prune -f
    rm -rf ./backend/node_modules
    rm -rf ./frontend/node_modules
else
    echo "Usage: $0 {bdd|all}"
    exit 1
fi
