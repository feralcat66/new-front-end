import React, { Component } from 'react';
import logo from './logo.svg';
import TodoApp from './TodoApp.js';
import './App.css';
import { 
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
 
function App() {
    return (
        <div className="App">
            <Header />

            <Router>
                <Switch>
                    <Route exact path="/" component={ TodoApp }/>
                </Switch>
            </Router>

        </div>
    );
}

export default App;