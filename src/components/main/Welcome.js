import astronaut from "../../assets/img/astro.png";

function Welcome() {

    return (
        <section id="welcome">
            <article>
                <h1>Olá, eu sou a <br /> Heloisa :)</h1>
                <p>Desenvolvedora Front-End & UI Designer.</p>
                <div className="btns_welcome">
                    <a href="#contact">Contato</a>
                </div>
            </article>
            <img src={astronaut} />
        </section>
    );
}

export default Welcome;