import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Col, Rate, Row, Typography, Image } from 'antd';
import Carousel, { CarouselRef } from 'antd/lib/carousel';
import { useRef } from 'react';

import { ReviewList } from '..';
import { StyledCard } from '../styles';

const { Paragraph, Title } = Typography;

function Review() {
  const carouselRef = useRef<CarouselRef | null>(null);

  return (
    <Row gutter={[24, 24]}>
      <Col span={24} className="relative">
        <div className="bg-slate-100">
          <div className="absolute left-0 z-30 ml-1 flex h-full items-center">
            <LeftOutlined
              className="cursor-pointer text-xl"
              onClick={() => carouselRef?.current?.prev()}
            />
          </div>
          <div className="absolute right-0 z-30 mr-1 flex h-full items-center">
            <RightOutlined
              className="cursor-pointer text-xl"
              onClick={() => {
                carouselRef?.current?.next();
              }}
            />
          </div>
          <Carousel
            autoplay
            ref={carouselRef}
            className="bg-slate-100 px-6 py-6"
            draggable
          >
            {ReviewList.map((review, i) => (
              <Col span={24} key={i}>
                <StyledCard className="border-color-accent-sky">
                  <div className="items flex items-center justify-around px-2">
                    <Image
                      className="max-h-[12rem] w-52 rounded-2xl object-cover"
                      src={review.avatar}
                      preview={false}
                    />
                    <div className="w-3/4">
                      <Title level={2}>{review.name}</Title>
                      <Title level={5} className="m-0 text-primary-color">
                        {review.work}
                      </Title>
                      <Rate allowHalf disabled defaultValue={review.rate} />
                      <Paragraph
                        ellipsis={{
                          rows: 4,
                          expandable: false,
                          symbol: 'label.etc',
                        }}
                        className="mb-2 text-lg"
                      >
                        Kh??a h???c d??nh cho b??? m??? c???a tr??? nghi ng??? ho???c c?? t??? k???,
                        ch???m ph??t tri???n, ch???m n??i, v.v. ???????c x??y d???ng t??? c??c
                        ph????ng ph??p can thi???p c?? nhi???u b???ng ch???ng v?? t??? kinh
                        nghi???m h?????ng d???n can thi???p tr??n h??n 400 gia ????nh t???i c??c
                        t???nh th??nh Vi???t Nam
                      </Paragraph>
                    </div>
                  </div>
                </StyledCard>
              </Col>
            ))}
          </Carousel>
        </div>
      </Col>
    </Row>
  );
}

export default Review;
