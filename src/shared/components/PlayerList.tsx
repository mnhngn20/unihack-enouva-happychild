import { Avatar, Button, Col, Row } from 'antd';
import { useState } from 'react';
import useSocket from '../hooks/useSocket';
import { Player } from '../utils/type';
import DefaultAvatar from '#/assets/images/defaultAvatar.jpg';

interface PlayerList {
  users?: Player[];
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function PlayerList({ users = [], loading, setLoading }: PlayerList) {
  const { socket } = useSocket();
  const [selectedPlayerName, setSelectedPlayerName] = useState<string | null>(
    null,
  );

  return (
    <>
      <Row>
        <Col
          span={24}
          className="flex items-center justify-center text-xl font-bold text-primary-color"
        >
          PLAYER LIST
        </Col>
        {users?.map(user => (
          <Col
            key={user?.playerName}
            span={24}
            className="mt-2 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <Avatar size={65} src={DefaultAvatar} />
              {`${user?.playerName} ${
                user?.playerName === localStorage?.getItem('playerName')
                  ? '(You)'
                  : ''
              }`}
            </div>
            {user?.playerName !== localStorage?.getItem('playerName') && (
              <Button
                type="primary"
                onClick={() => {
                  setLoading(true);
                  setSelectedPlayerName(user?.playerName);
                  socket?.emit('requestStartGame', {
                    from: localStorage?.getItem('playerName'),
                    to: user?.playerName,
                  });
                }}
                loading={loading && user?.playerName === selectedPlayerName}
                disabled={loading && user?.playerName !== selectedPlayerName}
              >
                START GAME!
              </Button>
            )}
          </Col>
        ))}
      </Row>
    </>
  );
}

export default PlayerList;
