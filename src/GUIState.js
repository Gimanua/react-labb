import React from 'react';
import './GUIState.css';

function Navbar(props) {
    function onNavItemClick(id) {
        console.log(`Link ${id} was clicked`);
        props.onNavigate(id);
    }

    return (
        <nav>
            <ul id="navList">
                <li onClick={() => onNavItemClick(1)} className="navItem">Sida 1</li>
                <li onClick={() => onNavItemClick(2)} className="navItem">Sida 2</li>
                <li onClick={() => onNavItemClick(3)} className="navItem">Sida 3</li>
            </ul>
        </nav>
    );
}

function List(props){
    return (
        <ul>
            <li>Hej</li>
            <li>Tjena</li>
            <li>Hallå</li>
        </ul>
    );
}

export default function GUIState(props) {
    const [currentPage, setCurrentPage] = React.useState(1);

    function navigate(id) {
        console.log(`Navigate: ${id}`);
        setCurrentPage(id);
    }

    let currentContent = null;
    if(currentPage === 1)
        currentContent = `Välkommen. Sida 1`;
    else if(currentPage === 2)
        currentContent = `Var hälsad. Sida 2`;
    else if(currentPage === 3)
        currentContent = <List />

    return (
        <div>
            <Navbar onNavigate={navigate} />
            {currentContent}
        </div>
    );
}