import React from 'react';


const Third = (props) => {
    return (
        <div>
           <h1>Third Component</h1>
           {props.children}
        </div>    
    );
}


export default Third;