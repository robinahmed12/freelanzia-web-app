import React from 'react';
import { useLoaderData } from 'react-router';


const TaskDetails = () => {
    
    const data = useLoaderData()
    console.log(data);
    
    return (
       <>
        <div className='max-w-7xl mx-auto mt-20'>
            <h1>details</h1>
        </div>
       </>
    );
};

export default TaskDetails;