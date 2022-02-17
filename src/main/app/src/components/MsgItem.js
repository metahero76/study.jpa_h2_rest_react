import React from 'react';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const MsgItem = (props) => {
    const {id, title, author} = props.book;
    return (
        <Card style={{background:"#EBEAEA"}}>
            <Card.Body>
                <Card.Title>[{id}] {title}</Card.Title>
                <Link to={'/msg/'+id} className="btn btn-paimary">
                    상세보기
                </Link>
            </Card.Body>
        </Card>
    );
};

export default MsgItem;