const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const Nodes = require('./DB/NodesData');
const Edges = require('./DB/EdgesData');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());



app.get('/api/diagram-data', async (req, res) => {
  const nodes = await Nodes.find({});
  const edges = await Edges.find({});
  res.send({ nodes, edges });
});
app.post('/api/diagram-data/node', async (req, res) => {
  console.log(req.body);
  const newNode = await Nodes.create({
    id: req.body.id,
    data: {
      label: req.body.lable,
      components: [
        {
          name: req.body.ComponentName,
        },
      ],
    },
  })
});
app.post('/api/edges', async (req, res) => {
  const edge = new Edges(req.body);
  await edge.save();
  res.send(edge);
}); 
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
