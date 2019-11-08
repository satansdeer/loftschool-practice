const ws = new WebSocket(`wss://planning-poker-server.glitch.me`);
ws.onerror = () => console.log("WebSocket error");
ws.onopen = () => {
  console.log("WebSocket connection established");
};
ws.onclose = () => console.log("WebSocket connection closed");

export const send = message => {
  try {
    ws.send(message);
  } catch (e) {}
};

export const onMessage = cb => {
  ws.onmessage = cb;
};

export const onConnect = cb => {
  ws.onopen = () => {
    console.log("WebSocket connection established");
    cb();
  };
};
