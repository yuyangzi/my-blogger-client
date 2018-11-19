import React, { Component } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import './App.css'
import './config/config'
import FooterPage from './pages/footer/footer.page'
import HomePage from './pages/home/home.page'
import HeaderPage from './pages/header/header.page'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App container sidebar-position-left page-home">
                    <HeaderPage />
                    <HomePage />
                    <FooterPage />
                </div>
            </BrowserRouter>
        )
    }
}

export default App
