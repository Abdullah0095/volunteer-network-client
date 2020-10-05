import { TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
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
  const { url } = topicDetails[0];


  const { register, handleSubmit } = useForm();
  // const onSubmit = data => console.log(data);

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState({
    listingDate: new Date()
  });


  const handleDate = (date) => {
    const newDates = { ...selectedDate };
    newDates.checkIn = date;
    setSelectedDate(newDates);
  };


  const handleRegistration = (id) => {
    const topicList = { ...loggedInUser,...selectedDate, topic, url };
    console.log(topicList)
    fetch('http://localhost:4000/addList', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(topicList)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })

  }


  return (

    <div >
      <div className="logo">
        <Link to="/home"><img className="logo" src={logo} alt="" /></Link>
      </div>


      <div className="form">
        <form >

          <input type="text" size="30" value={loggedInUser.name} /> <br /> <br />

          <input type="text" size="30" value={loggedInUser.email} /> <br />


          <br />
          <div style={{ border: '1px solid gray', width: '250px', marginLeft: '50px' }}>
            <TextField
              id="date"
              // label=""
              value={selectedDate.listingDate}
              onChange={handleDate}
              type="date"
              defaultValue="2020-10-06"

              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <br />

          <input type="text" size="30" placeholder="description" id="" />  <br /> <br />
          <input type="text" size="30" value={topic} /> <br /> <br />
          <Link to='/list'><Button onClick={handleRegistration} style={{ width: '250px' }} variant="primary">Submit</Button></Link>

        </form>
      </div>


    </div>

  );
};

export default Registration;