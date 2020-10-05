import React from 'react';

const Volunteer = (props) => {
    console.log(props.program.topic)
    return (
        <div>
            <h3>{props.program.topic}</h3>
        </div>
    );
};

export default Volunteer;