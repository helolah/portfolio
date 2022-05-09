import React, { useState } from "react";

function Header() {

    const [isActive, setActive] = useState(true);
    
    const handleToggle = () => {
        setActive(!isActive);
        console.log(isActive);

        if ( isActive === true ) {
            document.body.classList.add('active');
        } else {
            document.body.classList.remove('active');
        }

    };

    return (
        <nav>
            <h1>Heloisa Fernanda</h1>
            <ul className={`${isActive ? "" : "active"}`}>
                <li>Quem sou</li>
                <li>Skills</li>
                <li>Serviços</li>
                <li>Projetos</li>
                <li>Contato</li>
            </ul>

            <div className="mobile" onClick={handleToggle}>
                <div className="btn-menu-bg" title="Menu">
                    <button className={`btn-menu ${isActive ? "" : "active"}`}>
                        <div className="hamburger"></div>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Header;