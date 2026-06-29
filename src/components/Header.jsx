import React from 'react'

function Header() {
    return (
        <div>
            <header>

                <div className="header-content">

                    <div className="elstar">

                        <i><img src="https://static.themenate.net/elstar/img/logo/logo-dark-full.png" alt="" /></i>
                        <ul>
                            <li>Features</li>
                            <li>Demos</li>
                            <li>Components</li>
                            <li>Documentation</li>
                        </ul>

                    </div>



                    <div className="contents">

                        <div className="content">
                            <h1>
                                Mordern admin UI <br />
                                kit built with <br />
                                React
                            </h1>

                            <p>
                                Elstar has a complete set of UI components crafted with
                                Tailwind & Typescript that fulfilled most of the use <br /> case
                                which allows you to kickstart any project, saving up
                                thousands of hours!
                            </p>

                            <div className="buttons">
                                <button className="dark">Preview</button>
                                <button className="light">Get this template</button>
                            </div>
                        </div>

                        <img src="https://static.themenate.net/elstar/img/demo-img.png" alt="" />
                    </div>
                </div >
            </header>
        </div>
    )
}

export default Header