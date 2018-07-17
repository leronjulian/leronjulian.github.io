import React from "react";

import LeronHeadshot from "./Leron.JPG"

class HeadshotComponent extends React.Component{
    render() {
        
        return(
            <div>
                <img src={LeronHeadshot} class="circular--square"  alt="Leron_Headshot"/> 
            </div>
        )
    }
}

export default HeadshotComponent;