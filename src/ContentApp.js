import React from 'react';
import './ContentApp.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

export default function ContentApp(){
    return (
        <Router>
            <NavigationBar />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/about">
                    <AboutPage />
                </Route>
                <Route path="/projects">
                    <ProjectsPage />
                </Route>
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>
    );
}

function NavigationBar(){
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
            </ul>
        </nav>
    );
}

function HomePage(){
    return (
        <main>
            <h1>This is the home page!</h1>
            <table>
                <caption>Table caption</caption>
                <thead>
                    <tr>
                        <th>Header 1</th>
                        <th>Header 2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Data</td>
                        <td>Data</td>
                    </tr>
                </tbody>
            </table>
        </main>
    );
}

function AboutPage(){
    return (
        <main>
            <h1>This is the about page!</h1>
            <ul>
                <li>List item</li>
                <li>List item 2</li>
            </ul>
        </main>
    );
}

function ProjectsPage(){
    return (
        <main>
            <h1>This is the projects page!</h1>
            <h3>Additional header!</h3>
        </main>
    );
}

function NotFoundPage(){
    return <h1>Page Not Found!</h1>
}