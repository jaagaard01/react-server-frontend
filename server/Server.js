const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const monk = require('monk')
const bodyParser = require('body-parser')
const cors = require('cors')


// Connection URL
const url = 'mongodb://admin:Password@johncluster-shard-00-00-5rn6t.mongodb.net:27017,johncluster-shard-00-01-5rn6t.mongodb.net:27017,johncluster-shard-00-02-5rn6t.mongodb.net:27017/Fitness?ssl=true&replicaSet=JOHNCLUSTER-shard-0&authSource=admin&retryWrites=true';

const dB = monk(url);


dB.then(() => {
    console.log('Connected correctly to server')
})

const collection = dB.get("Tracking")

app.use(bodyParser.json())
app.use(cors())

/// get all entries
app.get('/', async (req, res) => {
    const result = await collection.find({})
    return res.status(200).send(result)})

/// get a single entry
app.get('/Edit/:id', async (req, res) => {
    const [result] = await collection.find(req.params.id)
    return res.status(200).send(result)})

/// add to entries
app.post('/Create', async (req, res) => {
    const result = await collection.insert(req.body)
    return res.status(200).send(result)
})

/// delete an entry
app.delete('/Delete/:id', async (req, res) => {
    await collection.findOneAndDelete(req.body)
    return res.status(200).send(await collection.find())
})

app.put('/Edit/:id', async (req, res) => {
    const result = await collection.findOneAndUpdate(req.params.id, req.body)
    console.log("Update Complete")
    return res.status(200).send(result)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
