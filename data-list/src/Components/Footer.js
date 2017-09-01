import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-fixed-bottom">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contacts</a></li>
                        <li><a href="#">Projects</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Footer;