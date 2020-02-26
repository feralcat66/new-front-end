import React, { Component } from 'react';
import TodoApp from './TodoApp.js';
import './App.css';
import Header from './Header.js'
import { 
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
 
class App extends Component {
    render() {
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
}

export default App;
