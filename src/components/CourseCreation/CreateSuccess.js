import React from 'react'
import { Result, Button , Descriptions, Image} from 'antd';
export default function CreateSuccess({course}) {
    return (
    
            
            <Result
            status="success"
                title={<>
                    {course?.tenKhoaHoc || "Complete React Developer in 2021"}
                     
                </>}
            subTitle={`Khóa học ${course?.tenKhoaHoc || "Complete React Developer in 2021"} được tạo thành công`}
            extra={
              
                <Descriptions layout="vertical" column={2} bordered  extra={<Button type="primary">Tạo khóa học mới</Button>}>
                    <Descriptions.Item label="Tên khóa học">Complete React Developer in 2021</Descriptions.Item>
    <Descriptions.Item label="Mã khóa học">"REACT2021"</Descriptions.Item>
    <Descriptions.Item label="Chủ đề">FrontEnd</Descriptions.Item>
    <Descriptions.Item label="Ngày tạo">2018-04-24 18:00:00</Descriptions.Item>
   
 
    <Descriptions.Item label="Mô tả">
    Become a Senior React Developer! Build a massive E-commerce app with Redux, Hooks, GraphQL, ContextAPI, Stripe, Firebase
                    </Descriptions.Item>
                    <Descriptions.Item label="Hình ảnh">
    <Image
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
    </Descriptions.Item>
  </Descriptions>
               
                
            }
        />
  
       
    )
}
