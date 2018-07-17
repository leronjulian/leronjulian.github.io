import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";
import MiniLinks from "./SM_Links";
import Headshot from "./Headshot";


import './App.css';

import Publication from "./Body/Publications"


/**
 * Steps:
 * 1. Focus on Formatting
 * 2. Focus on adding elements
 * 3. Focus on Design
 * 4. Focus on viewing on Mobile
 * 5. QA
 * 6. Any additions\
 */

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
                </div>
            </div>
        );
    }
}

export default Layout;