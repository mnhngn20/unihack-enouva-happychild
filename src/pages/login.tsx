import { Button, Card, Col, Form, Input, Row, Typography } from 'antd';
import { Store } from 'antd/lib/form/interface';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const onSubmit = ({ playerName }: Store) => {
    localStorage?.setItem('playerName', playerName);

    navigate('/');
  };

  return (
    <Card className="mt-36 w-[30rem] shadow-xl">
      <Row>
        <Col span={24} className="flex items-center justify-center">
          <Typography className="text-2xl font-bold text-primary-color">
            Login
          </Typography>
        </Col>
        <Col span={24} className="flex items-center justify-center">
          <Form
            onFinish={onSubmit}
            className="flex flex-col items-center justify-center gap-8"
          >
            <Form.Item
              name="playerName"
              label="Player Name"
              rules={[{ required: true }]}
            >
              <Input placeholder="Input your name" />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              GET STARTED!
            </Button>
          </Form>
        </Col>
      </Row>
    </Card>
  );
}

export default Login;
