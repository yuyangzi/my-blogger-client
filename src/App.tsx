import * as React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import Main from "./main/main.component";

class App extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Main/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
