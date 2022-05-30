import astronaut from "../../assets/img/astro.png";

function Welcome() {

    return (
        <section id="welcome">
            <article>
                <h1>Olá, eu sou a Heloisa :)</h1>
                <p>Desenvolvedora Front-End.</p>
                <div className="btns_welcome">
                    <a href="#contact">Contato</a>
                </div>
            </article>
        </section>
    );
}

export default Welcome;