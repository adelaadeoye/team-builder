import React, {useState, useEffect} from 'react';
import './App.css';
import Formfill from './component/Form';
import data from "./membersData"
import { Route, Link } from "react-router-dom";
import MemberList from './component/MemberList';
import axios from "axios"


function App() {
  const [members, setNewMember] = useState(data);
  const [images, setImages] = useState();

  const addNewMember= member =>{
   
      axios
        .get(`https://source.unsplash.com/random/318x180`)
        .then(response => {
          setImages(response);
          console.log(response)
        })
        .catch(error => {
          console.error(error);
        });
  
    const newMember={
      name: member.name,
      id:Date.now(),
      pic:"https://source.unsplash.com/random/318x180",
      email: member.email,
      role: member.role,
      bio: member.bio
    }
    setNewMember([...members, newMember])
  }
  
  return (<>
    <div className="membersList">
      <Link to="/Formfill">
      <button>click me</button>
      </Link>
      <Route exact path="/" render={props=> <MemberList {...props} members={members}/>}/>
    
    </div>

    <Route
        path="/Formfill"
        render={props => <Formfill {...props} addNewMember={addNewMember} />}
      />
    </>
  );
}

export default App;
