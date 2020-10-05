import React, { useContext } from 'react';
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
  const {topic} = topicDetails[0];
  

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

          <input type="text" size="35" value={loggedInUser.name} /> <br /> <br/>

          <input type="text" size="35" value={loggedInUser.email} /> <br /> <br/>

          <input type="text" size="35" name="description" placeholder="Description" /> <br /> <br/>
          <input type="text" size="35" name={loggedInUser.name} id="" />  <br /> <br/>
          <input type="text" size="35" value={topic} />
          <input type="submit" name="Registration" />
        </form>
      </div>


    </div>

  );
};

export default Registration;