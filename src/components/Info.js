import React from "react"
import wide from "../images/wide.jpg"

export default function Info(){
    return(
        <div className="info--container">
            <img className="info--image" src={wide}/>
            <h1 className="info--name">Muhammad Rofiqurrahman</h1>
            <h4 className="info--occupation">Fullstack Developer</h4>
            <p className="info--website">github.com/mhdrofiq</p>
            <div className="info--button-container">
                <button className="info--email"><i class="fa fa-envelope"></i>Email</button>
                <button className="info--linkedin"><i class="fa fa-linkedin-square"></i>LinkedIn</button>
            </div>
        </div>
    )
}