'use strict';
const express = require('express');
const WebSocket = require('ws');
const Matchmaker = require('./matchmaker/matchmaker');
const RoutesController = require('./routes');
const cors = require('cors');
const log = require('./common/utils/logger');

const port = process.env.PORT || 3030;

const app = express();
const server = require('http').createServer(app);

// Serve Static Assests to Heroku
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('src/client/build'));
}
app.use(cors());

const wss = new WebSocket.Server({ server });

const matchmaker = new Matchmaker();
const routeController = new RoutesController();
const router = routeController.init(matchmaker, wss);

app.use((req, res, next) => router(req, res, next));
server.listen(port, () => log(`Listening on port ${port}`));
