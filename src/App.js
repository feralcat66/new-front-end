import React, { Component } from 'react';
import TodoApp from './TodoApp.js';
import './App.css';
import Header from './Header.js';
import TodoAppLogin from './TodoAppLogin.js';
import { 
    BrowserRouter as Router, 
    Route, 
    Switch,
    Redirect,
} from 'react-router-dom';
 
const isLoggedIn = () => JSON.parse(localStorage.getItem('user'));

export default class App extends React.Component {
    render() {
        return (
        <div className="App">
           <Header />
            <Router>
                <Route path='/' render={() => 
                isLoggedIn() 
                    ? <TodoApp />
                    : <Redirect to='login' />
                }/>
                 <Route path='/login' component={TodoAppLogin} />
            </Router>
        </div>
    );
    }
}
