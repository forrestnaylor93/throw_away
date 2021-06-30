require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();


//middleware
app.use(cors());
app.use(express.json());

// requesting student by id
app.get('/students/:id', async(req,res) => {

    try {
        const id = req.params.id;
        const result = await db.query(
            "SELECT * FROM students WHERE id=$1;",
            [id]
        );
    
        res.status(200).json({
            status:"success",
            student:result.rows[0]
        }
        )
        
    } catch (err) {
        console.error(err);
    }

})

// get all topics
app.get("/topics", async(req,res) => {
    try {
        const result = await db.query(
            "SELECT * FROM topics;"
        )
        res.status(200).json({
            status:"success",
            results:result.rows.length,
            topics: result.rows
        })
    } catch (err) {
        console.error(err)
    }
})


// listen
const port = process.env.PORT || 5001;

app.listen(port, ()=>{
    console.log(`server is up and listening on port ${port}.`);
})
