import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';



import './Registration.css'

const Registration = (props) => {
  
  const { id } = useParams();
  

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
          <input type="text" size="35" value={id} />
          <input type="submit" name="Registration" />
        </form>
      </div>


    </div>

  );
};

export default Registration;