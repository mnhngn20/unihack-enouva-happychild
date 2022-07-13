import { Card, Checkbox, Col, Divider, Input, Row, Typography } from 'antd';
import React from 'react';

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
  { label: 'Orange', value: 'Orange' },
  { label: 'Orange', value: 'Orange' },
  { label: 'Orange', value: 'Orange' },
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
  { label: 'Orange', value: 'Orange' },
  { label: 'Orange', value: 'Orange' },
  { label: 'Orange', value: 'Orange' },
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
  { label: 'Orange', value: 'Orange' },
  { label: 'Orange', value: 'Orange' },
  { label: 'Orange', value: 'Orange' },
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
];

function Courses() {
  const onChange = () => console.log('sss');

  return (
    <Row className="m-5 flex">
      <Col>
        <Card style={{ width: 300 }}>
          <Typography.Title level={5}>Category</Typography.Title>
          <Input placeholder="search category" />
          <Checkbox.Group
            options={plainOptions}
            defaultValue={['Apple']}
            onChange={onChange}
          />
          <Checkbox.Group
            options={plainOptions}
            defaultValue={['Apple']}
            onChange={onChange}
          />
          <Checkbox.Group
            options={plainOptions}
            defaultValue={['Apple']}
            onChange={onChange}
          />
          <Divider />
          <Typography.Title level={5}>Position</Typography.Title>
          <Checkbox.Group
            options={plainOptions}
            defaultValue={['Apple']}
            onChange={onChange}
          />
          <Checkbox.Group
            options={plainOptions}
            defaultValue={['Apple']}
            onChange={onChange}
          />
          <Checkbox.Group
            options={plainOptions}
            defaultValue={['Apple']}
            onChange={onChange}
          />
          <Checkbox.Group
            options={plainOptions}
            defaultValue={['Apple']}
            onChange={onChange}
          />
          <Divider />
          <Typography.Title level={5}>Levels</Typography.Title>
          <Checkbox.Group
            options={plainOptions}
            defaultValue={['Apple']}
            onChange={onChange}
          />
          <Checkbox.Group
            options={plainOptions}
            defaultValue={['Apple']}
            onChange={onChange}
          />
          <Checkbox.Group
            options={plainOptions}
            defaultValue={['Apple']}
            onChange={onChange}
          />
          <Divider />
          <Typography.Title level={5}>Types</Typography.Title>
          <Checkbox.Group
            options={plainOptions}
            defaultValue={['Apple']}
            onChange={onChange}
          />
          <Checkbox.Group
            options={plainOptions}
            defaultValue={['Apple']}
            onChange={onChange}
          />
          <Checkbox.Group
            options={plainOptions}
            defaultValue={['Apple']}
            onChange={onChange}
          />
          <Checkbox.Group
            options={plainOptions}
            defaultValue={['Apple']}
            onChange={onChange}
          />
        </Card>
      </Col>
      <Col className="mx-4 flex w-full flex-wrap items-center">
        <Input placeholder="search program" className="mb-5" />
        {options.map((item, index) => (
          <Card className="inline-flex w-56 content-center " key={index}>
            {item.label}
          </Card>
        ))}
      </Col>
    </Row>
  );
}

export default Courses;
