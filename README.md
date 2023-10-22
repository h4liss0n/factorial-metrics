# Welcome to visualize metrics!

We need a Frontend + Backend application that allows you to post and visualize metrics.
Each metric will have a timestamp, name, and value.
The metrics will be shown in a timeline and must show averages per minute/hour/day
The metrics will be persisted in the database.

access by: https://h4liss0n.github.io/factorial-metrics

## Backend

 - node
 - typescript
 - express
 - PostgreSQL
 
## Frontend
  - React
  - typescript 
  - styled-components 

## How to use un you local machine

    use DBeaver to create a database locally
    port    :  5432,    
    username:  "postgres",
    password:  "test",
    database:  "metric" 

  - backend 
	  - go to the backend folder
	  - docker-compose up to setup database
	  - npm start	  
  - frontend
	  - go to the frontend folder
		  - got to .env and define # REACT_APP_FF_USE_REMOTE_API=true
		  - npm start