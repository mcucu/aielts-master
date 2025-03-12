# AIELTS Master - Backend Service
Backend Service AI Powered IELTS Preparation Assistant using OpenAI.

## Prerequisite
- nodejs minimun version 12
- installed docker & docker-compose
- free port 3000

## Technology Stack
- nodejs
- docker

## How to run
##### Clone Project
- clone repository : `git clone git@github.com:mcucu/aielts-master .`

##### Setup dotenv
- go to project folder : `cd aielts-master`
- create .env file for auth service : `cp ./backend/.env.example ./backend/.env`

##### Run auth service
1. go to service folder : `cd aielts-master/backend`
2. run docker build app image : `docker build -t aielts-be .`
3. run docker start app image : `docker run -dp 3000:3000 aielts-be`
4. open browser & visit : `http://localhost:3000/`

##### Run for development mode
1. go to service folder : `cd aielts-master/backend`
2. install nodemon using npm : `npm i -g nodemon`
3. run npm script : `npm run dev`
4. open browser & visit : `http://localhost:3000/backend`
