import React,{useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function Formfill (props){
    const [members, setNewMember] = useState({
        name: "",
        pic:"",
        email: "",
        role: "",
        bio: ""
      });
      const handleChanges = e => {
        setNewMember({ ...members, [e.target.name]: e.target.value });
        console.log(members);
      };
      const submitForm = e => {
        e.preventDefault();
        props.addNewMember(members);
        setNewMember({  name: "",
        pic:"",
        email: "",
        role: "",
        bio: ""});
        console.log(e.target.value);
        props.history.push("/")
      };
    return (
      <Form onSubmit={submitForm}>
        <FormGroup>
          <Label for="memberName">Name:</Label>
          <Input type="text" name="name" id="memberName"   value={members.name}onChange={handleChanges} />
        </FormGroup>
        <FormGroup>
          <Label for="memberEmail">Email:</Label>
          <Input type="email" name="email" id="memberEmail" value={members.email} onChange={handleChanges}/>
        </FormGroup>
        <FormGroup>
          <Label for="memberRole">Role:</Label>
          <Input type="text" name="role" id="memberRole" value={members.role}  onChange={handleChanges}/>
        </FormGroup>
        <FormGroup>
          <Label for="memberBio">Bio:</Label>
          <Input type="textarea" name="bio" id="memberBio" value={members.bio}onChange={handleChanges} />
        </FormGroup>
       
        
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
