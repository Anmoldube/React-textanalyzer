import React, { useState } from 'react'

export default function About() {

       const [mystyle , setmystyle] = useState({
        color: "black" ,
        backgroundColor: "white",
        border: '2px'
       })
       const [btutext, setBtntext] = useState("Enable dark mode")

      const togglestyle = ()=>{

        if(mystyle.color === 'black'){
            setmystyle ({
            color: "white",
            backgroundColor: "black"

        })
            setBtntext ("Enable dark mode")
    }
        else{
              setmystyle({
              color: "black",
              backgroundColor: "white"
            });
            setBtntext("Enable light Mode");
          }
        }
    return (
        <>
        <div className='my-4'></div>
        <div classNameName='container my-5 mx-2 mt-5' style={mystyle} >
            <h1>About Us</h1>
        <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button"   style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Accordion Item #1
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                    <div className="accordion-body"  style={mystyle}>
                        <strong>about text analyzer.</strong> Certainly! The provided code appears to be a React application that includes multiple components and utilizes React Router for routing. Here's an overview of the app's structure and functionality:
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed"  style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Accordion Item #2
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                    <div className="accordion-body"  style={mystyle}>
                        <strong>This is the second item's accordion body.</strong> Components:

Navbar: Represents a navigation bar at the top of the app. It includes a title and a theme toggle button.
TextFrom: A component used for text input and analysis. It seems to be the main component of the application.
LinksFor: Represents a component for displaying links.
About: Represents a component providing information about the app.
Routing:

The app uses React Router to handle routing. The Router component from react-router-dom wraps the entire app, enabling client-side routing.
The Routes component is used to define the different routes of the application.
Each route is defined using the Route component, specifying the path and the corresponding component to render.
Theme Toggle:

The mode state is used to toggle between light and dark themes.
The handleThemeToggle function updates the mode state and adjusts the background color of the app accordingly.
Styling:

The app includes a CSS file (App.css) for styling the components and applying custom styles.
Background Video:

The app features a background video displayed within a container using an HTML5 video element. The video is set to auto-play, loop, and be muted.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed"  style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Accordion Item #3
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                    <div className="accordion-body"  style={mystyle}>
                        <strong >This is the third item's accordion body.</strong>Overall, the app seems to provide a text analysis functionality along with navigation links for the About and Links sections. The Navbar component allows users to toggle between light and dark themes. You can further customize and enhance the app based on your requirements.

                </div>
                    </div>
                </div>
            </div>
        </div>
        <h4><center className='text-light mt-2'>Made by Anmol with love</center></h4>
        <button className='btn btn bg-primary my-4'  onClick={togglestyle}>{btutext}</button></>
    )
    }