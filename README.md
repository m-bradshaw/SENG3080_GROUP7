# SENG3080_GROUP7
### Megan Bradshaw, Gabriel Gurgel, Duane Cressman
### Group 7 in SENG3080 W22

## Summary: 
For this project, we created an application for automation of sending email reminders.  
The application was implemented using a React and Bootstrap frontend, an Express Backend, and a cloud-hosted MongoDB database.   
The front end and backend interface through an API, and we implemented Google OAuth using Passport to manage user accounts and security. The application also interfaces with Nodemailer to send emails, and uses Node-cron to schedule the emails.   

## Usage: 
- Download the source files
- Within the eminders folder and the server folder respectively, run "npm install" to ensure the correct packages are available. 
- In the server folder, create a file with the name ".env" 
  - Insert the following code into the .env file and save
> DB_SOURCE=mongodb+srv://group7:efW0QicKgKnUz36g@eminders.ac18c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority  
> GOOGLE_CLIENT_ID=803255276965-0h2oigkpijgdht537q5r350dqqppk236.apps.googleusercontent.com  
> GOOGLE_SECRET=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  
> GOOGLE_REDIRECT=/api/v1/auth/google/redirect  
- In the server folder, run "npm start" 
- In the eminders folder, run "npm start" 
- Navigate in a browser to "http://localhost:3000"
- Sign in with a google account, and start creating "e-minders"!

## Known Issues: 
Between other assignments, personal commitments, and COVID, we were unable to deploy remotely, though the application is functional when running the front and back-end together on a local machine.

We had planned on deploying our Frontend with Netlify and our backend with Heroku, but unfortunately we were not able to connect Heroku due to timing as well as a security incident relating to GitHub. We did deploy our Front-end to [Netlify](https://marvelous-kheer-837cbe.netlify.app/), but due to some last-minute bugs in routing and integration, this was abandoned for submission. 

![image](https://user-images.githubusercontent.com/41707698/163921506-a3dc84c4-9427-45dc-9a8a-54f9e8884161.png) https://status.heroku.com/
