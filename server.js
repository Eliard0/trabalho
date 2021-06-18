const express = require('express');
const path = required('pacth');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirnae + '/dit/trabalho003'));

app.get('/*',(req, res)=>{
    res.sendFile(__dirname + '/dist/trabalho003/index.html');
});

app.listen(PORT,()=>{
    console.log('servidor iniciado na porta'+ PORT);
})