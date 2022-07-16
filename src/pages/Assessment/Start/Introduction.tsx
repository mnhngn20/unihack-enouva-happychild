import { Col, Row, Typography } from 'antd';

export default function Introduction() {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24} className="flex flex-col gap-2">
        <Typography className="text-xl font-bold">1, ASQ là gì?</Typography>
        <Typography className="ml-4">
          <strong>ASQ (Ages and Stages Questionnaires)</strong> - Bảng câu hỏi
          Độ tuổi và Giai đoạn phát triển là hệ thống câu hỏi dành cho cha
          mẹ/người chăm sóc trẻ hoàn thiện nhằm sàng lọc và theo dõi sự phát
          triển toàn diện của trẻ từ 1 tháng đến 6 tuổi, trên cơ sở đó phát hiện
          sớm các nguy cơ chậm phát triển ở trẻ, do các chuyên gia Đại học
          Oregon, Hoa Kỳ xây dựng và hoàn thiện trong hơn 40 năm qua.
        </Typography>
        <Typography className="ml-4">
          ASQ-3 được coi như tiêu chuẩn vàng để sàng lọc sự phát triển cho trẻ.
          ASQ-3 đã được phát triển thành nhiều thứ tiếng, trong đó có phiên bản
          tiếng Việt với câu từ dễ hiểu và dễ thực hiện.
        </Typography>
        <Typography className="ml-4">
          ASQ sàng lọc và theo dõi 5 lĩnh vực phát triển của trẻ: giao tiếp, vận
          động thô, vận động tinh, giải quyết vấn đề và cá nhân - xã hội.
        </Typography>
      </Col>
      <Col span={24} className="flex flex-col gap-2">
        <Typography className="text-xl font-bold">
          2, Mất bao lâu để thực hiện ASQ-3?
        </Typography>
        <Typography className="ml-4">
          Cha mẹ hoặc người chăm sóc trẻ trực tiếp sẽ mất tầm 10-15 phút để hoàn
          thành Bộ câu hỏi sàng lọc.
        </Typography>
        <Typography className="ml-4">
          Phần tính điểm sẽ do hệ thống tiến hành xử lí và thực hiện.
        </Typography>
      </Col>
      <Col span={24} className="flex flex-col gap-2">
        <Typography className="text-xl font-bold">
          3, ASQ-3 có dễ sử dụng không?
        </Typography>
        <Typography className="ml-4">
          Bộ câu hỏi ASQ-3 được viết ở trình độ phổ thông và được minh họa rất
          dễ hiểu. Mỗi bản câu hỏi sẽ có: - Chỉ dẫn rõ ràng, dễ hiểu - 30 câu
          hỏi diễn đạt đơn giản cho 5 lĩnh vực, mỗi lĩnh vực gồm 6 hoạt động. -
          Kết quả sàng lọc gồm điểm từng lĩnh vực và nhận xét chung.
        </Typography>
      </Col>
    </Row>
  );
}
