import io from 'socket.io-client';
// const sockets = io('http://localhost:3001', { autoConnect: true, forceNew: true });
const sockets = io('http://192.168.0.9:3001');
// const sockets = io('/');
export default sockets;
