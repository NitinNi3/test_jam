import io from 'socket.io-client';
// const sockets = io('http://localhost:3001', { autoConnect: true, forceNew: true });
const sockets = io('https://jam.choira.io',{path:'/jamsocket'});
// const sockets = io('/');
export default sockets;
