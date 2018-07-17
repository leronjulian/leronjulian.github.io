import React from "react";
import github from "./GitHub.png"
import linkedIn from "./ln.png"


class Mini_Links extends React.Component{
    render() {
        const styling = {
            "padding-right": "20px",
            "padding-top": "10px",
            float: "left"
        }

        return(
            <div>
                <a href="https://github.com/leronjulian" target="_blank" rel="noopener noreferrer"> <img src={github} style={styling} alt="mini_picture" /></a>
                <a href="https://www.linkedin.com/in/leronjulian/" target="_blank" rel="noopener noreferrer"> <img src={linkedIn}  style = {styling} alt="LinkedIn Logo"/> </a>   
            </div>
        )
    }
}

export default Mini_Links;