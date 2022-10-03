import mypic from "../../assets/img/me.jpg";

function Welcome() {

    return (
        <section id="welcome">
            <article>
                <h1>Olá, eu sou a Heloisa :)</h1>
                <p>E sou Desenvolvedora Web Full-Stack!</p>
                <div className="btns_welcome">
                    <a href="https://github.com/helolah" target={'_blank'}>Github</a>
                    <a href="#contact">Contato</a>
                </div>
            </article>
            <img src={mypic} alt="logo" />
        </section>
    );
}

export default Welcome;