import React from "react";

function Dogs(props){
    return(
        <div>
            <img src={props.getImage.message}/>
        </div>
    );
};

export default Dogs;