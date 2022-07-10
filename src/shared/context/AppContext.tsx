import { createContext, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

export interface AppContextProps {
  socket: Socket | null;
}

export const AppContext = createContext<AppContextProps>({
  socket: null,
});

interface Props {
  children: React.ReactNode;
}

export function AppProvider({ children }: Props) {
  const socket = useRef(io('ws://localhost:8900'));

  socket?.current.emit('newPlayerJoined', localStorage?.getItem('playerName'));

  return (
    <AppContext.Provider
      value={{
        socket: socket?.current,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
