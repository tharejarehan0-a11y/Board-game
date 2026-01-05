//intializing a server using express

const express = require('express');//imports everything from express to the express variable
const app = express();//creates a backend application
const PORT = 8383;  //it is a place in ip address

let data=['james'];

//Middleware
app.use(express.json());

//HTTP verbs and Routes

//the method informs the nature of reques and the route is a further subdirectory basically we direc the request to the body of code to respond appropiately, and these locations or routes are called endpoints
//website endpoints
app.get('/',(req,res)=>{
    console.log('Yay i hit an endpoint',req.method);
    res.send(`
        <body>
        <p> ${JSON.stringify(data)} </p>
        <a href = "/dashboard">DashBoard</a>
        </body>
        <script>console.log('this is my script');</script>
        `);
});

app.get('/dashboard',(req,res)=>{
    console.log("This is the dashboard");
    res.send(`
        <body>
        <h1>This is a dashboard</h1><input/>
        <a href="/">Home</a>
        </body>
        `);
})

//api endpoints
app.get('/api/data',(req,res)=>{
    console.log('This one is for data')
    res.send(data);
})
// CRUD = CREATE-post READ-get UPDATE-put and DELETE-delete 
app.post('/api/data',(req,res)=>{
    //someone wants to create a user 
    //the user clicks a sign up button after entering their credentials, and theri browser is wired up to send out a netwark request to the server to handle that action
    const newEntry = req.body
    console.log(newEntry);
    data.push(newEntry.name);
    res.sendStatus(201);
});
app.delete('/api/data',(req,res)=>{
    data.pop();
    console.log('we deleted the last peice of the array');
    res.sendStatus(203);
})
app.listen(PORT,()=>{
    console.log(`Server has started on the port ${PORT}`);
});//it listens to incoming requests


