import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import { downloadFileByYoutubeURL } from './utils.js';
import cors from 'cors';


const PORT = 3000;
const server = express();

server.use(bodyParser.json());


server.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
}));


server.get('/api/test', (req, res) => {
    res.send('endpoint is running successfully!');
});


server.post('/api/download',async (req, res) => {
    if (!req.body.downloadPath || !req.body.url || !req.body.format) {
        res.status(400).send('Bad request');
        return;
    }
    const pathToDownload = req.body.downloadPath;
    const url = req.body.url;
    const format = req.body.format;

    if (!fs.existsSync(pathToDownload)) fs.mkdirSync(pathToDownload);
    
    const response = await downloadFileByYoutubeURL(url, format);

    res.send(response);
});


export {
    server
}