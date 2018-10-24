import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";
import MiniLinks from "./SM_Links";
import Headshot from "./Headshot";

import './App.css';

import Publication from "./Body/Publications"
import Projects from "./Body/Projects";

class Layout extends React.Component {

    render(){
        return(
            <div>   
                <header id ="header">
                    <div class = "inner"> 

                        {/*The Headshot*/}
                        <Headshot />
                        {/*My name and stuff on the left side*/}
                        <Header/>
                        
                        {/*Links to LinkedIn and Github*/}
                        <MiniLinks/>
                        
                        {/*"Designed by myself tag"*/}
                        <Footer />
                    </div>
                </header>
                
                <div id = "main">
                
                    {/*Above the horizontal line*/}
                    <section id="one">
                        <Body />  
                    </section>

                    {/*Below the horizontal line*/}
                    <section>
                        <Publication />
                    </section>

                    <section>
                        <Projects />
                    </section>
                </div>
            </div>
        );
    }
}

export default Layout;