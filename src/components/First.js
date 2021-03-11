import React from 'react';

const First = (props) => {
    return (
        <div>
           <h1>First Component</h1>
            {props.children}     
        </div>    
    );
}


export default First;