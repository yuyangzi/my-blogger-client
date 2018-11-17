import React, {Component} from 'react';
import './App.css';
import HomePage from "./pages/home/home.page";
import './config/config'

class App extends Component {
    render() {
        return (
            <div className="container sidebar-position-left page-home">
                <HomePage/>
            </div>
        );
    }
}

export default App;
