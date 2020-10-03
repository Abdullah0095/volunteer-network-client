import React, { useState } from 'react';
import AllPrograms from '../AllPrograms/AllPrograms';
import Header from '../Header/Header';
import topicData from '../TopicData/TopicData';

const Home = () => {
    console.log(topicData);
    const [programs, setPrograms] = useState(topicData);
    return (
        <div>
            <Header/>
            <h1 style={{textAlign: 'center'}}>I GROW BY HELPING PEOPLE IN NEED</h1>
            {
                programs.map(program => <AllPrograms program={program}></AllPrograms>)
            }
        </div>
    );
};

export default Home;