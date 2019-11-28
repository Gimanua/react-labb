import React from 'react';

async function FetchProtectedData(authString) {

    const res = await fetch('/protected', {
        method: 'GET',
        headers: {
            'Authorization': authString
        }
    });
    const data = await res.text();
    return data;
}

export default function BasicAuthLabb(props) {
    const [text, setText] = React.useState('Hello basic auth');
    const [authString, setAuthString] = React.useState(undefined);

    async function click() {

        const newText = await FetchProtectedData(authString);
        setText(newText);
    }

    function onLogin() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const newAuthString = `Basic ${btoa(username + ":" + password)}`;
        console.log(username, password, newAuthString);
        setAuthString(newAuthString);
    }

    return (
        <div>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" />
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" />
            </div>
            <button onClick={() => onLogin()}>Logga in</button>
            <button onClick={() => click()}>Hämta topp-hemlig information</button>
            <p>{text}</p>
        </div>
    );
}