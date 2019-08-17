const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' })
});


const PORT  = process.env.PORT || 5000;
app.listen(5000);

//http://localhost:5000

//req is the request

//res is the data
