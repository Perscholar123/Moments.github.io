import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

// const dotenv = require('dotenv');

dotenv.config({
    path: "./config.env",
});

const app = express();



app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes); //http://localhost:5000/posts

app.get('/',(req,res)=>{
    res.send("Hello to Memories API");
});


const CONNECTION_URL = mongoose
    .connect(
        process.env.DATABASE.replace("<password>", process.env.DATABASE_PASSWORD),
        // { useCreateIndex: true,  useNewUrlParser: true,   useUnifiedTopology: true,  useFindAndModify: false, }
    )
    .then(()=>{console.log("database is up and running...");})
    .catch((error)=>{console.log(error.message);});

    const PORT = process.env.PORT || 5000;

    app.listen(PORT,()=>{console.log(`server started on port ${PORT}`);});




// const PORT = process.env.PORT || 5000;

// mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
//     .then(()=> app.listen(PORT, ()=> console.log(`Server running at ${PORT}`)))
//     .catch((error)=> console.log(error.message));

// mongoose.set('useFindAndModify', false);