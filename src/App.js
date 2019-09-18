import React, {useState} from 'react';
import './App.css';
import Formfill from './component/Form';
import data from "./membersData"
import { Route, Link } from "react-router-dom";
import MemberList from './component/MemberList';


function App() {
  const [members, setNewMember] = useState(data);
  const addNewMember= member =>{
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
    <MemberList members={members}/>
    </div>

    <Route
        path="/Formfill"
        render={props => <Formfill {...props} addNewMember={addNewMember} />}
      />
    </>
  );
}

export default App;
