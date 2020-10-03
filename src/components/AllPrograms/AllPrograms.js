import React from 'react';
import { Button, Card } from 'react-bootstrap';

const AllPrograms = (props) => {
    console.log(props)
    return (
        <div>
            {/* <h2>{props.program.topic}.</h2> */}
            {/* <p>{props.program.id}</p> */}
            {/* <img height="200px" src={props.program.url} /> */}



            <Card style={{ width: '18rem',float: 'left', margin: '10px'}}>
                <Card.Img variant="top" src={props.program.url}/>
                <Button variant="dark">{props.program.topic}.</Button>
                {/* <Card.Body>
                    
                </Card.Body> */}
            </Card>
        </div>
    );
};

export default AllPrograms;