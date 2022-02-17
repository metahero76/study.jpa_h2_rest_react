
import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
const Detail = (props) => {
    let navigate = useNavigate();
    const { id } = useParams();

    console.log("id:::::"+id);
    const [data, setData] = useState({
        id: "",
        title:"",
        text:""
    });
    
    useEffect(()=>{
        fetch("http://localhost:8080/msg/"+id)
            .then(res=>res.json())
            .then(res=>{
                setData(res);
            }
        );
    },[]);

    const deleteBook = () => {
        fetch("http://localhost:8080/msg/"+id, {
                method:"DELETE"
            })
            .then(res=>res.text())
            .then(res=>{
                if(res === 'ok'){
                    navigate("/");
                }
            }
        );
    }

    const updateBook = () => {
        navigate("/updateForm/" + id);
    }

    return (
        <div>
            <b>상세보기</b>
            <br/><br/>
            <Button variant="warning" onClick={updateBook}>수정</Button>
            {' '}
            <Button variant="danger" onClick={deleteBook}>삭제</Button>
            {' '}
            <hr/>
            <b>id</b> {data.id}
            <br/>
            <b>title</b> {data.title}
            <br/>
            <b>text</b> {data.text}
        </div>
    );
};

export default Detail;