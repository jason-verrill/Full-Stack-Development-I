# Full-Stack-Development-I

In this respository I built a MEAN (MongoDB, Express.js, Angular, Node.js) and a simplier MEN stack. Only the major code files have been included. 

This website makes use of Mongoose and MongoDB which I containerized with Docker. I built a RESTful API which is called via the web interface using a middleware stack to connect the function calls and logic together. 

app.js - The entry to the website code with high level organization
app_admin - The code to implement angular
app_server - The code responsible for the website content, routing, and related functions
app_api - An extension to allow special functions under travlr/api/

API examples include:
trvlr/api/ - Creates a new trip
trvlr/api/:tripCode? - Searches for trips
trvlr/api/ tripCode - Update an existing trip
