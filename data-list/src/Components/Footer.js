import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-fixed-bottom">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">Page 1</a></li>
                        <li><a href="#">Page 2</a></li>
                        <li><a href="#">Page 3</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Footer;