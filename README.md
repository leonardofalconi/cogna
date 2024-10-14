# Cogna

### Requirements

1. Node v18.0.0 or higher: [nodejs.org/en/download/package-manager](https://nodejs.org/en/download/package-manager)
2. Yarn: `npm install --global yarn`
3. Docker: [docs.docker.com/engine/install](https://docs.docker.com/engine/install/)

### Install

1. Create a docker volume: `docker volume create cogna` and `docker volume ls` to confirm if was created
2. Go to the project's root folder and install all the dependencies: `yarn`
3. Stay in the root folder and execute the prisma generate command: `yarn prisma generate`
4. In the root folder, run the Docker database container: `docker-compose up`

### How to Run the Project

1. Start in development mode: `yarn start`
2. Start in development mode and monitor changes: `yarn start:dev`

### Environment Variables

- We have an env file in the root `.env`
