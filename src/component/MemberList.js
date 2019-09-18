import React, { useState, useEffect } from "react";
import axios from "axios"

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Row,
  Button,
  Col
} from "reactstrap";

function MemberList(props) {
    
   
  return (
    <div >
    
      {props.members.map(item => (
        <div className="memberList" key={item.id}>
          
    
        <Card body>
        <CardImg top width="100%" src={item.pic} alt="Card image cap" />
        <CardTitle>{item.name}</CardTitle>
        <CardSubtitle>{item.role}</CardSubtitle>
        <CardText>{item.bio}</CardText>
        <CardSubtitle>{item.email}</CardSubtitle>

          <Button>Edit</Button>
        </Card>
   
      
  
        </div>
      ))}
    </div>
  );
}

export default MemberList;
