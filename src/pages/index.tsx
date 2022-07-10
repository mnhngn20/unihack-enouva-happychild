import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, Modal, Row, Typography } from 'antd';
import PlayerList from '#/shared/components/PlayerList';
import useToggle from '#/shared/hooks/useToggle';
import { showError, showSuccess } from '#/shared/utils/tools';
import { Player } from '#/shared/utils/type';
import useSocket from '#/shared/hooks/useSocket';

function Index() {
  const [users, setUsers] = useState<Player[]>([]);
  const { socket } = useSocket();
  const navigate = useNavigate();
  const [visible, onOpen, onClose] = useToggle(false);
  const [requestedPlayerName, setRequestedPlayerName] = useState<string | null>(
    null,
  );
  const [requestPlayerloading, setRequestPlayerLoading] = useState(false);

  if (!localStorage?.getItem('playerName')) {
    navigate('/login');
  }

  useEffect(() => {
    socket?.on('getPlayers', (ids: Player[]) => {
      setUsers(ids);
    });

    socket?.on(
      'opponentRequestStartGame',
      ({ from }: { from: string; to: string }) => {
        onOpen();
        setRequestedPlayerName(from);
      },
    );

    socket?.on('gameAccept', ({ from, to }: { from: string; to: string }) => {
      console.log('from', from);
      console.log('to', to);
      setRequestPlayerLoading(false);
      onClose();
      showSuccess('Game Start!');
      // navigate(`/game/${userId1}/${userId2}`);
    });

    socket?.on('gameAbort', () => {
      setRequestPlayerLoading(false);
      showError('User aborted the game!');
    });

    return () => {
      socket?.removeAllListeners();
    };
  });

  const onLogout = () => {
    localStorage?.removeItem('playerName');
    navigate('/login');
    socket?.disconnect();
  };

  /*
   * useEffect(() => {
   *   const db = getDatabase();`
   *   const starCountRef = ref(db, 'tests');
   *   onValue(starCountRef, snapshot => {
   *     const data = snapshot.val();
   *     console.log(data);
   *   });
   * }, []);
   */

  return (
    <>
      <Modal
        visible={visible}
        destroyOnClose
        onOk={() => {
          socket?.emit('acceptGame', {
            from: requestedPlayerName,
            to: localStorage?.getItem('playerName'),
          });
        }}
        onCancel={() => {
          setRequestPlayerLoading(false);
          onClose();
          socket?.emit('abortGame', {
            from: requestedPlayerName,
            to: localStorage?.getItem('playerName'),
          });
          setRequestedPlayerName(null);
        }}
        okText="Accept"
        cancelText="Deny"
      >
        <Typography>{`${requestedPlayerName} wants to have a match!`}</Typography>
      </Modal>
      <Card className="mt-8 w-[60rem]">
        <Row className="relative">
          <Col span={24} className="absolute right-0">
            <Button onClick={onLogout}>Logout</Button>
          </Col>
          <Col
            span={24}
            className="mb-8 flex justify-center text-2xl font-bold"
          >
            WELCOME TO THE GAME
          </Col>
          <Col span={24}>
            <PlayerList
              users={users}
              loading={requestPlayerloading}
              setLoading={setRequestPlayerLoading}
            />
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default Index;
