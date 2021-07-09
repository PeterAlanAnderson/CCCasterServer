## Tools

Tool: Simple WebSocket Client extension for firefox:

https://addons.mozilla.org/en-US/firefox/addon/simple-websocket-client/

Put this link into the "URL" box and hit "Open":

ws://fierce-lowlands-57630.herokuapp.com/

WSS messages that contain JSON objects must stringify the obejct first.

Here is a JSON stringifier utility:

https://tools.knowledgewalls.com/jsontostring

---

## Process

Open multiple tabs of your WS testing tool.

Connect each one to the server via a WS connection.

Use Postman to see the contents of the queue with the /dump-queues/ route.

---

## Join Queue/Connection start

After initializing the connection, an initialConfig event message must be sent within 60 seconds.

```
"{\"eventType\":\"initialConfig\",\"ipAddress\":\"12345\",\"region\":\"NorthAmericaWest\"}"
```

The server will respond with a "no opponents" message or an opponent to ping test every 10 seconds.

---

## Ping Test Result

Stringified JSON message for ping test result:

```
"{\"eventType\":\"pingTestResponse\",\"matcherID\":\"afel5kdkm0kes1ff6r9p10qju\",\"ping\":\"5\"}"
```

To use this, connect at least 2 WS connections, run the /dump-queues/ route in Postman, then paste a matcherID that is not assigned to the WS connection you're using into the matcherID.

If pingResult is below 126, the connection process will start. If above 126, a new matcher should be sent back.

```
"{\"eventType\":\"portIsOpen\"}"
```
