# Full-Stack-Development-I <br/>
<br/>
In this respository I built a MEAN (MongoDB, Express.js, Angular, Node.js) and a simplier MEN stack. Only the major code files have been included. <br/>
<br/>
This website makes use of Mongoose and MongoDB which I containerized with Docker. I built a RESTful API which is called via the web interface using a middleware stack to connect the function calls and logic together. <br/>
<br/>
app.js - The entry to the website code with high level organization <br/>
app_admin - The code to implement angular <br/>
app_server - The code responsible for the website content, routing, and related functions <br/>
app_api - An extension to allow special functions under travlr/api/ <br/>
<br/>
API examples include: <br/>
trvlr/api/ - Creates a new trip <br/>
trvlr/api/:tripCode? - Searches for trips <br/>
trvlr/api/ tripCode - Update an existing trip <br/>
