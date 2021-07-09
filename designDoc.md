# High level process overview

The server will store users as websocket connections.

Websocket messages should be stringified JSON objects that contain an eventType KVP that indicates what the rest of the message object contains.

---

# Event Types Sent From Server To Client:

## **pingTest**

### Contains an IP addresse and its corresponding matcherID for the client to ping test against.

```
{
    eventType: 'pingTest',
    matcherID: string,
    address: string
}
```

## **openPort**

### Instructs the client to open a port to host a matchmaking session

```
{
    eventType: 'openPort'
}
```

## **joinMatch**

### Instructs the client to join a waiting host. Contains the host's IP address with appended port.

```
{
    eventType: 'joinMatch',
    address: string,
}
```

## noOpponents

### There are no valid opponents. The server will try again in 10 seconds.

```
{
    eventType: 'noOpponents'
}
```

# Event Types Sent From Client To Server

## **pingTestResponse**

### Contains results of ping tests to different client sessions. Please include average ping in the result.

```

{
eventType: 'pingTestResponse',
matcherID: string,
ping: string
}

```

## **portIsOpen**

### Informs the server that the client has opened a port to allow a guest to join a match.

```

{
eventType: 'portIsOpen'
}

```

---

Not sure if we need a terminate function. It would make sense to add a Websocket.close('userClosedMatchmaking') or Websocket.close('matchCompleted') from the client side, but these are not MVP. And uncerimonious Websocket.close('matchStart') is likely sufficient for MVP.

Need to explore keeping WSS connection open during matches and reporting match progress as rounds/games end or ending WSS connection as game starts and creating a POST route to send results after game ends.
