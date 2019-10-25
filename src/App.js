import React from 'react';
import './App.css';

function Box(props){
    return <div>
        <h1>{props.title}</h1>
        {props.message}
    </div>;
}

function Button(props){
    return <button>{props.message}</button>;
}

function HeadLine(props){
    return <h1>{props.title}</h1>;
}

function Footer(props){
    return <footer>
        <p>Author: {props.author}</p>
        {props.showEmail ? <p>Email: {props.email}</p> : ''}
    </footer>;
}

export default function App(){
    return <div>
        <HeadLine title="Adrian"/>
        <Button message="HÄR ÄR EN KNAPP" />
        <Box title="Box-Titel" message="Lite text är ju alltid trevligt, särskilt i en box." />
        <p>lorem ipsum</p>
        <Footer author="Adrian" email="adkl00001@utb.vaxjo.se" showEmail={true}/>
    </div>;
}