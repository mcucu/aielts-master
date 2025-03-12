# AIELTS Master - Frontend App
Simple NodeJs Frontend App for IELTS Examiner using OpenAI.

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
- create .env file for auth service : `cp ./frontend/.env.example ./frontend/.env`

##### Run auth service
1. go to service folder : `cd aielts-master/frontend`
2. run docker build app image : `docker build -t aielts-fe .`
3. run docker start app image : `docker run -dp 3000:3000 aielts-fe`
4. open browser & visit : `http://localhost:3000/`

##### Run for development mode
1. go to service folder : `cd aielts-master/frontend`
2. install nodemon using npm : `npm i -g nodemon`
3. run npm script : `npm run dev`
4. open browser & visit : `http://localhost:3000/frontend`
