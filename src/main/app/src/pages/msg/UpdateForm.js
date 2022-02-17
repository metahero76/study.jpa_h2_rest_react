import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

const UpdateForm = (props) => {
    let navigate = useNavigate();
    const { id } = useParams();

    const [data, setData] = useState({
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

    const changeValue = (e) => {
        setData({
            ...data,
            [e.target.name]:e.target.value
        });
    }

    const submitData = (e) => {
        e.preventDefault();//submit무효화
        fetch("http://localhost:8080/msg/"+id,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json; charset=utf-8"
            },
            body:JSON.stringify(data)
        }).then(res=>{
            console.log(res);
            if(res.status === 200){
                return res.json();
            }else{
                return null;
            }
        }).then(res=>{
            console.log(res);
            if(res !== null){
                navigate("/msg/"+id);
            }else{
                alert("수정 실패!")
            }

        }); //비동기 함수
    }

    return (
        <Form onSubmit={submitData}>
            <b>글수정</b>
            <br/><br/>
            id.{data.id}
            <br/><br/>
            <Form.Group controlld="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Enter Title" 
                name="title" 
                onChange={changeValue}
                value={data.title}/>
            </Form.Group>

            <Form.Group controlld="formBasicText">
                <Form.Label>Text</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Enter Text"
                name="text" onChange={changeValue}
                value={data.text}/>
            </Form.Group>    
            <br/>
            <Button variant="primary" type="submit">
                Submit    
            </Button>         
        </Form>
    );
};

export default UpdateForm; 

