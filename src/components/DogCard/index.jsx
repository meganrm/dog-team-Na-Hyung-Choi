import React from 'react';
import { Card, Col } from 'antd';


const DogPair = ({
    image,
    name,
    tags
}) => (
    <Col span={8}>
       <Card
            title={`${name} - ${tags.join(', ')}`}
            cover={<img src={`${process.env.PUBLIC_URL}/images/${image}`} alt={`husky named ${name}`}/>}
       >
       </Card>
    </Col>
)

export default DogPair;