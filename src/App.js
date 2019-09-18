import React, {useState} from 'react';
import './App.css';
import Formfill from './component/Form';
import data from "./membersData"
import { Route, Link } from "react-router-dom";
import MemberList from './component/MemberList';


function App() {
  const [members] = useState(data);

  return (
    <div className="membersList">
    <MemberList members={members}/>
    </div>
  );
}

export default App;
