import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
const SaveForm = (props) => {
    let navigate = useNavigate();
    
    const [data, setData] = useState({
        title:"",
        text:""
    });

    const changeValue = (e) => {
        setData({
            ...data,
            [e.target.name]:e.target.value
        });
    }

    const submitData = (e) => {
        e.preventDefault();//submit무효화
        fetch("http://localhost:8080/msg",{
            method:"POST",
            headers:{
                "Content-Type":"application/json; charset=utf-8"
            },
            body:JSON.stringify(data)
        }).then(res=>{
            console.log(res);
            if(res.status === 201 || res.status === 200){
                return res.json();
            }else{
                return null;
            }
        }).then(res=>{
            console.log(res);
            if(res !== null){
                navigate("/");
            }else{
                alert("등록 실패!")
            }

        }); //비동기 함수
    }

    return (
        <Form onSubmit={submitData}>
            <b>글쓰기</b>
            <br/><br/>
            <Form.Group controlld="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter email" name="title" onChange={changeValue}/>
            </Form.Group>

            <Form.Group controlld="formBasicText">
                <Form.Label>Text</Form.Label>
                <Form.Control type="text" placeholder="Enter Text" name="text" onChange={changeValue}/>
            </Form.Group>
            <br/>
            <Button variant="primary" type="submit">
                Submit    
            </Button>         
        </Form>
    );
};

export default SaveForm; 