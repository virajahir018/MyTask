import React from 'react'
import desc from "../assets/image.png"


function Layout() {
    return (
        <div>
            <section className="layout-section">
                <div className="ready">

                    <h1>Ready-to-use page layouts</h1>

                    <p>
                        Every page in Elstar applied a pre-built layout, which makes it very easy to switch individual
                        page designs or create a new page. It is possible to keep your pages consistent across yourapplication or to use different layouts for different routes.
                    </p>
                </div>

                <div className="lr-box">

                    <div className="left">

                        <div className="left-box">

                            <h3>Modern</h3>
                            <p>Well-structured layout with visual hierarchy of navigation bars showing content area</p>
                        </div>

                        <div className="left-box">

                            <h3>Classic</h3>
                            <p>Typical dashboard layout, composed of side navigation and a dim content area which makes widget within visible at a glance</p>
                        </div>
                        <div className="left-box">

                            <h3>Stacked Side</h3>
                            <p>Also has a side navigation & content area layout, but it has layered side navigation, its suiltable for app with complex navigation structure</p>
                        </div>
                        <div className="left-box">

                            <h3>Simple</h3>
                            <p>This layout vertically composition by a horizantal navigation & content area with limited width</p>
                        </div>
                        <div className="left-box">

                            <h3>Decked</h3>
                            <p>Has the same structure as simple layout, but with an additional layer on navigation to accommodate more content</p>
                        </div>

                    </div>

                    <div className="right">
                        <img src={desc} alt="" />
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Layout