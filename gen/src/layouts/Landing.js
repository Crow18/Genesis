import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import misIcon from '../images/mis-icon.jpg'
import websiteIcon from '../images/website-icon.png'
import webAppIcon from '../images/web-app-icon.png'

import '../style/landing.scss'
export default class Landing extends Component{
    render(){
        return(
            <>
                <div className="landing-heading">
                    <h1>What can we do for you?</h1>
                    <p>
                        We are an up coming web development initiative.
                        In essence, we try and provide  to individuals starting their own businesses. 
                    </p>
                </div>

                <div className = "landing-container">
                    <Link className='card' to='/website'>
                        {/* <div className="card"> */}
                            <div className="top-section">
                                <div className="icon">
                                <img src = {websiteIcon} alt = "Webiste icon" className="arrow"/>
                                </div>
                                <h5>Website</h5>
                            </div>
                            <div className="bottom-section">
                                <p>For the basic purpose of having online exposure. Usually appealing to be used as an e-portfolio</p>
                            </div>
                        {/* </div> */}
                    </Link>
                    <Link to='/webapp' className="card">
                        <div className="top-section">
                            <div className="icon">
                            <img src = {webAppIcon} alt = "WebAppIcon icon"/>


                            </div>
                            <h5>Web Application</h5>
                        </div>
                        <div className="bottom-section">
                            <p>Whether it's for e-commerce or an upcoming business this is where you want to be. </p>
                        </div>
                    </Link>
                    
                    <Link to = '/manage-system' className="card">
                        <div className="top-section">
                            
                            <div className="icon">
                                <img src = {misIcon} alt = "MIS icon"/>
                            </div>
                            <h5>Management Information System</h5>
                        </div>
                        <div className="bottom-section">

                            <p>An Information and User Management System for a 
                                corporate setting to help increase values and 
                                help with decision-making processes. </p>
                        </div>
                    </Link>
                
                </div>
            </>
        )
    }
}