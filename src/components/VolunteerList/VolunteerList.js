import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Volunteer from '../Volunteer/Volunteer';



const VolunteerList = () => {
    const [programs, setPrograms] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(()=> {
        fetch('http://localhost:4000/myProgram?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setPrograms(data));
    }, [])
    return (
        <div>
            
            <h1>i have {programs.length}</h1>
            
            
        
        
        {
            programs.map(program => <Volunteer program={program}></Volunteer>)
        }
        

        </div>
    );
};

export default VolunteerList;