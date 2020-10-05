import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';


const AllPrograms = (props) => {
    // console.log(props)
    
    // const history = useHistory()



    const handleProgram = () => {
        // history.push('/registration')
    }
    return (
        <div style={{marginLeft: '60px', marginTop: '20px'}}>
            
            <Card style={{ width: '18rem',float: 'left', margin: '10px'}}>
                <Card.Img variant="top" src={props.program.url}/>
                

                <Link to={`/registration/${props.program.id}`}><Button onClick={handleProgram} variant="dark">{props.program.topic}. {props.program.id}</Button></Link>
                
            </Card>
        </div>
    );
};

export default AllPrograms;