import React from 'react';

const Fifth = (props) => {
    return (
        <div>
           <h1>Fifth Component</h1>
           <p>{props.text}</p>
           <p>{props.product}</p>
           <p>{props.age}</p>
        </div>    
    );
}


export default Fifth;