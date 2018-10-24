import React from "react";

class Projects extends React.Component{
    render() {
        return(
            <div class="publications-margin"> 
                <h1>Projects</h1>
                <ul>
                    <li><h2><a href="https://github.com/leronjulian/Gender_Recognition_Algorithm" target="_blank" rel="noopener noreferrer"> Gender Recognition Algorithm</a></h2></li>
                    <p>Algorithm that given an image of a human face, the algorithm will classify the given image as a male or female by utilizing the human's facial features: Nose, Jawline, Eyes, Eyebrows, and Mouth</p>
                    <p>Developed in Pyton. Utilizing: Computer Vision, Machine Learning, and Data Science. Libraries: OpenCV, NumPY, K-Nearest Neighbor Algorithm, and Dlib</p>
                    <p><a href="https://dl.acm.org/author_page.cfm?id=99659254016&coll=DL&dl=ACM&trk=0" target="_blank" rel="noopener noreferrer"> Contributors: Leron Julian</a></p>
                </ul>
            </div>
        )
    }
}

export default Projects;