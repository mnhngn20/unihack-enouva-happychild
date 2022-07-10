import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

const useSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io('localhost:8900');
    setSocket(newSocket);

    newSocket?.emit('newPlayerJoined', localStorage?.getItem('playerName'));
    return () => {
      newSocket.removeAllListeners();
      newSocket.close();
    };
  }, [setSocket]);

  return {
    socket,
    setSocket,
  };
};

export default useSocket;
