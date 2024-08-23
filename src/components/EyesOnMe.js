// Code EyesOnMe Component Here
import React from "react";
function EyesOnMe(){
    const HandleFocus = () => {
        console.log("Good!");
    };
    const HandleBlur = () => {
        console.log("Hey! Eyes on me!");
    };
    return(
        <button 
          onFocus={HandleFocus}
          onBlur={HandleBlur}
        >
            
            
           Eyes on me
       </button>
    );
}
export default EyesOnMe;