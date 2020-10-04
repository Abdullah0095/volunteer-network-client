import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const AllPrograms = (props) => {
    // console.log(props)
    
    const history = useHistory()



    const handleProgram = () => {
        history.push('/registration')
    }
    return (
        <div>
            
            <Card style={{ width: '18rem',float: 'left', margin: '10px'}}>
                <Card.Img variant="top" src={props.program.url}/>
                

                <Button onClick={handleProgram} variant="dark">{props.program.topic}. {props.program.id}</Button>
                
            </Card>
        </div>
    );
};

export default AllPrograms;