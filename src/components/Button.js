import React from "react";

function Button(props){

    const handleSubmit = () => {
        props.handleSubmitFromApp()
    };
    return(
        <div>
            <button type="button" onClick={handleSubmit}> 
                    Cute Dogs!!
            </button>
        </div>
    );
};

export default Button;