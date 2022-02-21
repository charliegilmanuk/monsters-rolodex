import React from 'react';
import './nav-bar.styles.css';

export class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(`nav-bar component mounted!`);
    }

    render() {
        return (
            <div className="nav-bar">
                <div>
                    <h1 className="nav-bar__title">Home</h1>
                </div>
                <div>
                    <a href="#" className="nav-bar__link">Contact</a>
                </div>
            </div>
        )
    }
}