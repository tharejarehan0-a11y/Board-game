//intializing a server using express

const express = require('express');//imports everything from express to the express variable
const app = express();//creates a backend application
const PORT = 8383;  //it is a place in ip address

let data={
    name:'james',
    job:'Developer'
}

//HTTP verbs and Routes

//the method informs the nature of reques and the route is a further subdirectory basically we direc the request to the body of code to respond appropiately, and these locations or routes are called endpoints
//website endpoints
app.get('/',(req,res)=>{
    console.log('Yay i hit an endpoint',req.method);
    res.send(`
        <body>
        <p> ${JSON.stringify(data)} </p>
        </body>
        `);
});

app.get('/dashboard',(req,res)=>{
    console.log("This is the dashboard");
    res.send('<h1>This is a dashboard</h1><input/>');
})

//api endpoints
app.get('/api/data',(req,res)=>{
    console.log('This one is for data')
    res.send(data);
})
// CRUD = CREATE-post READ-get UPDATE-put and DELETE-delete 
app.listen(PORT,()=>{
    console.log(`Server has started on the port ${PORT}`);
});//it listens to incoming requests