# AIELTS Master - AI Powered IELTS Preparation Assistant

## Introduction
// TODO

## Prerequisite
- nodejs minimun version 14
- installed docker & docker-compose
- free port 3000 (be) & port 3001 (fe)

## Tech Stack
- nodejs
- nextjs

## How to use
#### Clone Project
- clone repository : `git clone git@github.com:mcucu/aielts-master .`

#### Setup dotenv
- go to project folder : `cd aielts-master`
- create .env file for backend service : `cp ./backend/.env.example ./backend/.env`
- create .env file for frontend service : `cp ./frontend/.env.example ./frontend/.env`

#### Run all services
1. go to project folder : `cd aielts-master`
2. run docker composer : `docker-compose up --build`

#### Run per services
1. as example we will run auth service
2. go to service folder : `cd aielts-master/backend`
3. run docker build app image : `docker build -t aielts-be .`
4. run docker start app image : `docker run -dp 3000:3000 aielts-be`
5. open browser & visit : `http://localhost:3000/`

## Deployed App
// TODO

## System Diagram
// TODO

## Supported Skills
- Writing
- Speaking

## Features
- **Band scores**: TODO
- **Corrections**: TODO
- **Idea suggestions**: TODO
- **Improved version**: TODO
