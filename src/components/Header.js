import React from 'react';

export default class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isActive: true,
        }

        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle = () => {
        this.setState({
            isActive: !this.state.isActive,
        });
        
        if ( this.state.isActive === true ) {
            this.responsiveNavList.classList.add('active');
            this.responsiveNavButton.classList.add('active');
            document.body.classList.add('active');
        } else {
            this.responsiveNavList.classList.remove('active');
            this.responsiveNavButton.classList.remove('active');
            document.body.classList.remove('active');
        }
    };

    render() {        
        return (
            <nav>
                <h1>Heloisa Fernanda</h1>
                <h1 className="responsive">Heloisa</h1>
                <ul className={`${this.state.isActive ? "" : "active"}`} ref={(ul) => { this.responsiveNavList = ul; }}>
                    <li><a href="#about">Quem sou</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
    
                <div className="mobile" onClick={this.handleToggle}>
                    <div className="btn-menu-bg" title="Menu">
                        <button className={`btn-menu ${this.state.isActive ? "" : "active"}`} ref={(button) => { this.responsiveNavButton = button; }}>
                            <div className="hamburger"></div>
                        </button>
                    </div>
                </div>
            </nav>
        );
    }
}