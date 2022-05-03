import * as Icon from 'react-feather';

function Services() {

    return (
        <section id="services">
            <h2>Serviços</h2>
            <article className="content">
                <div className="item">
                    <Icon.GitHub />
                    <h4>UI Design</h4>
                    <p></p>
                </div>
                <div className="item">
                    <Icon.Instagram />
                    <p>Desenvolvimento Web</p>
                </div>
                <div className="item">
                    <Icon.Linkedin />
                    <p>Javascript</p>
                </div>
            </article>
        </section>
    );
}

export default Services;