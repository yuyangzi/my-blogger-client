import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import HomePage from "./pages/home/home.page";
import './config/config'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App container sidebar-position-left page-home">
                    <Switch>
                        <Route exact={true} path="/list" component={HomePage}/>
                        <Redirect to={'/list'}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
