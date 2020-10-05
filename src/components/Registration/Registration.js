import { TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';
import topicData from '../TopicData/TopicData';



import './Registration.css'

const Registration = () => {

  const { id } = useParams();
  const taskData = topicData;

  const topicDetails = taskData.filter(task => task.id == id)
  const { topic } = topicDetails[0];


  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser)


  return (

    <div >
      <div className="logo">
        <Link to="/home"><img className="logo" src={logo} alt="" /></Link>
      </div>


      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>

          <input type="text" size="30" value={loggedInUser.name} /> <br /> <br />

          <input type="text" size="30" value={loggedInUser.email} /> <br />
          

          <br />
          <div style={{border: '1px solid gray', width: '250px', marginLeft:'50px'}}> 
          <TextField
            id="date"
            label=""
            type="date"
            defaultValue=" "

            InputLabelProps={{
              shrink: true,
            }}
          />
          </div>
          <br/> 

          <input type="text" size="30" placeholder="description" id="" />  <br /> <br />
          <input type="text" size="30" value={topic} /> <br/> <br/>
          
          <Button style={{width: '250px'}} variant="primary">Submit</Button>
        </form>
      </div>


    </div>

  );
};

export default Registration;