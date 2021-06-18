const express = require('rxpress');
const path = require('path');

const app = express();

app.use(express.static('./dist/trabalho003'));


app.get('/*',(req, res)=> res.sedFile('index.html',{root:'dist/trabalho003'}),
);

app.listen(process.env.PORT || 8080);