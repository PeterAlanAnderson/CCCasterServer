class Matcher {
  constructor(matcherID, ws) {
    this.matcherID = matcherID;
    this.ws = ws;
    this.openPort;
    this.isConnected = true;
    this.badMatchIDs = [];
    this.isMatchedWith;
    // this.exhaustedQueue = 0;
  }

  getIpAddress() {
    return this.ws._socket.remoteAddress();
  }
}

module.exports = Matcher;
