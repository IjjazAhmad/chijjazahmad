import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;
export default function ProjectCard(props) {
    const {imglink,title, description,weblink}= props
    return (
        <Card
            className='proCart'
            cover={<img alt="loading..." src={imglink} />}
        >
            <Meta title={title} description={description} />
            <a href={weblink} target='blank'>Live Demo</a>
        </Card>
    )
}
