import React from 'react'

function Main() {
    return (
        <div className='mains'>

            <div className="main">

                <div className="mainNavbar">
                    <div className="box1">
                        <img src="https://pixelwibes.com/template/my-task/react/marketing/assets/img/logo/logo.svg" alt="" />
                        <span>My-Task</span>
                    </div>

                    <div className="box2">
                        <ul>
                            <li>Home</li>
                            <li>Features</li>
                            <li>Authorization</li>
                            <li>App</li>
                            <li>Why</li>
                        </ul>
                        <button>Contact Us</button>
                    </div>
                </div>

                <div className="mainSection">
                        <h2>My-Task Hr & Project <br /> Management System</h2>
                   <div className='lr'>
                     <div className="mainSectionleft">
                        <p>This is a solution for everyone. Although it is at the heart of Scrum and is typically used by software development teams, it can be successfully applied to other businesses, as well as used for improving personal productivity.</p>
                        <span>Technology :</span>

                        <ul>
                            <li><i class="fa-brands fa-bootstrap"></i></li>
                            <li><i class="fa-brands fa-html5"></i></li>
                            <li><i class="fa-brands fa-grunt"></i></li>
                            <li><i class="fa-brands fa-square-js"></i></li>
                            <li><i class="fa-brands fa-laravel"></i></li>
                            <li><i class="fa-brands fa-react"></i></li>
                           <li> <i class="fa-brands fa-node"></i></li>
                        </ul>
                    </div>
                    <div className="mainSectionRight">
                        <img src="https://pixelwibes.com/template/my-task/react/marketing/assets/img/hero/hero-img.png" alt="" />
                    </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Main