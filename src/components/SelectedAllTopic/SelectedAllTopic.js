import React from 'react';
import { Card } from 'react-bootstrap';

const SelectedAllTopic = (props) => {
    return (
        <div style={{marginLeft: '60px', marginTop: '20px'}}>
            
            <Card style={{ width: '18rem',float: 'left', margin: '10px'}}>
                <Card.Img variant="top" src={props.program.url}/>
                

            <h3>{props.program.topic}</h3>
                
            </Card>
        </div>
    );
};

export default SelectedAllTopic;