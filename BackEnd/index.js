const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const Nodes = require('./DB/NodesData');
const Edges = require('./DB/EdgesData');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors()); // To handle cross-origin requests
app.use(express.json());



app.get('/api/diagram-data',async (req, res) => {
  const nodes = await Nodes.find({});
  const edges = await Edges.find({});
  res.send({ nodes, edges });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
