const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const { MongoClient } = require('mongodb');


app.use(cors());
require('dotenv').config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ernke.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// console.log(uri);

async function run() {
    try {
        await client.connect();
        console.log("Database Connected");

        //   const database = client.db('sample_mflix');
        //   const movies = database.collection('movies');
        //   // Query for a movie that has the title 'Back to the Future'
        //   const query = { title: 'Back to the Future' };
        //   const movie = await movies.findOne(query);
        //   console.log(movie);
    } finally {
        // Ensures that the client will close when you finish/error
        //await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send("Doctors Portal2 Server Running")
})

app.listen(port, () => {
    console.log(`Running on Port :${port}`);
})