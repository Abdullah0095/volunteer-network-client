import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import SelectedAllTopic from '../SelectedAllTopic/SelectedAllTopic';


const SelectedTopic = () => {
    const [programs, setPrograms] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(()=> {
        fetch('http://localhost:4000/myProgram?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setPrograms(data));
    }, [])
    return (
        <div>
            <Header/>
            <h1>i have {programs.length}</h1>
            
            
        
        {
            programs.map(program => <SelectedAllTopic program={program}></SelectedAllTopic>)
            
            
        }
        
        

        </div>
    );
};

export default SelectedTopic;