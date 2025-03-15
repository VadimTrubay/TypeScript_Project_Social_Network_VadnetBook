export class WebSocketService {
  constructor(url, token) {
    if (!token) {
      throw new Error('Токен отсутствует!');
    }

    const socketUrl = `${url}?token=${token}`;
    this.socket = new WebSocket(socketUrl);
    this.listeners = [];

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.listeners.forEach((callback) => callback(data));
    };
  }

  sendMessage(message) {
    this.socket.send(JSON.stringify(message));
  }

  onMessage(callback) {
    this.listeners.push(callback);
  }

  close() {
    this.socket.close();
  }
}
