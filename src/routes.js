const express = require('express');
const bodyParser = require('body-parser');
const { authenticateUser } = require('./services/authService');

class RoutesController {
  constructor() {
    this.matchmaker;
  }

  init(matchmaker, wss) {
    this.matchmaker = matchmaker;
    this.router = new express.Router();
    this.wss = wss;
    this.proxyRoutes();
    console.log('router init complete', this.matchmaker);
    return this.router;
  }

  proxyRoutes() {
    this.router.get('/dump-queues/', this.matchmaker.handleDumpQueue);

    this.router.post(
      '/loginuser',
      bodyParser.json({
        limit: '1024kb',
        type: 'application/json',
      }),
      authenticateUser
    );

    this.wss.on('connection', (ws) => {
      this.matchmaker.handleJoinQueue(ws);

      ws.on('message', (message) => {
        let parsedMessage;
        try {
          parsedMessage = JSON.parse(JSON.parse(message));
        }
        catch(error) {
          console.log("ERROR - unable to parse message")
          console.log("error")
          console.log("message")
          return;
        }
        console.log(parsedMessage);
        try {
          switch (parsedMessage.eventType) {
            case 'initialConfig':
              this.matchmaker.handleInitialConfig(ws, parsedMessage);
              break;
            case 'pingTestResponse':
              this.matchmaker.handlePingResult(ws, parsedMessage);
              break;
            case 'portIsOpen':
              this.matchmaker.handlePortIsOpen(ws, parsedMessage);
              break;
            case 'sendOpenPort': // THIS IS A DEBUG ROUTE
              const respObj = {
                eventType: 'openPort',
              };
              ws.send(JSON.stringify(respObj));
              break;
          }
        }
        catch(error) {
          console.log("ERROR - uncategorized:", parsedMessage)
          return
        }
      });
      ws.on('close', () => {
        this.matchmaker.handleDisconnect(ws);
      });
    });
  }
}

module.exports = RoutesController;
