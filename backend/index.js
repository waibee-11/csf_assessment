const express = require('express');
const cors = require('cors');
const { User } = require('./db');

// creating an app using express
const app = express();

// using express.json() to be able to access the body of the request
app.use(express.json());

// using cors() so that a frontend on a different domain can send requests to this backend
app.use(cors());

// get endpoint that returns all the users in the database
app.get('/', async (req, res) => {
    // fetching all the entries from the database
    const response = await User.find({});
    res.json({
        response,
    });
});


// get endpoint that returns a particular user based on the id field
app.get('/:id', async (req, res) => {
    // using try and catch blocks to catch "user does not exist" errors
    try{
        // accessing the id from the request url
        const id = req.params.id;
        const response = await User.findOne({
            "_id": id
        });
        res.json({
            msg: "Data found!",
            response,
        });
    } catch (error) {
        res.json({
            msg: "Error!",
        });
    };
});

// post endpoint to add a new user to the database. Data has to be same as User schema defined in /db/index.js
app.post('/', (req, res) => {
    // fetching all the fields from the body of the request
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;
    const password = req.body.password;
    // creating a new User in the database
    User.create({
        name,
        age,
        email,
        password,
    })
    .then(() => {
        alert("User added successfully");
        res.json({
            msg: "User added successfully",
        });
    })
    .catch((e) => {
        res.status(200).json({
            msg: "Error! User is not created",
        });
    });
});

app.listen(3000);