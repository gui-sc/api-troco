const express = require('express');
const cors = require('cors');
const path = require('path');
const router = require('./routes/router');

const PORT = 3000;
const server = express();
server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cors());

server.use(router)

server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})