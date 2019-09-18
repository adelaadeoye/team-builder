import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function Formfill (){
 
    return (
      <Form>
        <FormGroup>
          <Label for="memberName">Name:</Label>
          <Input type="text" name="name" id="memberName" placeholder="Adela Adeoye" />
        </FormGroup>
        <FormGroup>
          <Label for="memberEmail">Email:</Label>
          <Input type="email" name="email" id="memberEmail" placeholder="adeoye.adela@gmail.com" />
        </FormGroup>
        <FormGroup>
          <Label for="memberRole">Role:</Label>
          <Input type="text" name="role" id="memberRole" placeholder="Software Engineer" />
        </FormGroup>
        <FormGroup>
          <Label for="memberBio">Bio:</Label>
          <Input type="textarea" name="bio" id="memberBio" />
        </FormGroup>
       
        
        <Button>Submit</Button>
      </Form>
    );
  }
