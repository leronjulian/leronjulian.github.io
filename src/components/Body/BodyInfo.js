import React from "react";


class BodyInfo extends React.Component{
    render() {
        return(
            <div>
                <p class="BodyInfo"> 
                    I am a senior Computer Science Major at Morehouse College. I have published research under the supervision of Dr.
                    Kinnis Gosha of the <a href="http://diversitycomplete.com/crcl2/" target="_blank" class="para" rel="noopener noreferrer">Culturally Relevant Computing Lab</a> at Morehouse College. This summer I am interning with NBCUniversal
                    at the CNBC Headquarters in Englewood Cliffs, NJ working with Node.js, React.js, GraphQL, MongoDB, Centos, and Docker!
                    <br/><br/>
                    After Morehouse, I will go on to pursue a Ph.D. in Computer Science focusing on Machine Learning and Computer Vision. I
                    am currently working on projects using a Rasberry Pi that utilizes Maching Learning and Computer Vision. 
                </p>
                <br/>
                <hr/>       
            </div>
        )
    }
}

export default BodyInfo;