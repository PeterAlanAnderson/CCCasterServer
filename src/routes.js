const express = require('express');
const bodyParser = require('body-parser');

class RoutesController {
  constructor() {
    this.matchmaker;
  }

  init(matchmaker) {
    this.matchmaker = matchmaker;
    this.router = new express.Router();
    this.proxyRoutes();
    console.log('router init complete', this.matchmaker);
    return this.router;
  }

  proxyRoutes() {
    this.router.post(
      '/join-matchmaking-queue/',
      bodyParser.json({
        limit: '1024kb',
        type: 'application/json',
      }),
      this.matchmaker.handleJoinQueue.bind(this.matchmaker)
    );
    this.router.post(
      '/get-matcher-address/',
      bodyParser.json({
        limit: '1024kb',
        type: 'application/json',
      }),
      this.matchmaker.handleGetMatchers.bind(this.matchmaker)
    );
    this.router.post(
      '/ping-result/',
      bodyParser.json({
        limit: '1024kb',
        type: 'application/json',
      }),
      this.matchmaker.handlePingResult.bind(this.matchmaker)
    );
  }
}

module.exports = RoutesController;
