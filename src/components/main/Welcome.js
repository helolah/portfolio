function Welcome() {

    return (
        <section id="welcome">
            <article>
                <h1>Olá, eu sou a <br /> Heloisa :)</h1>
                <p>Desenvolvedora Front-End & UI Designer.</p>
                <div className="btns_welcome">
                    <a href="https://github.com/helolah" target={'_blank'}>Github</a>
                    {/* <a href="mailto:someone@example.com">E-mail</a> */}
                </div>
            </article>
        </section>
    );
}

export default Welcome;