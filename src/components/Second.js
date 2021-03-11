import React from 'react';


const Second = (props) => {
    return (
        <div>
           <h1>Second Component</h1>
           {props.children}
        </div>    
    );
}


export default Second;