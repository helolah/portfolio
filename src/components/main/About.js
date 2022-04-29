import * as Icon from 'react-feather';

function About() {

    return (
        <section id="about">
            <h2>Sobre mim</h2>
            <article>
                <p>Formada em Sistemas para Internet pela FATEC Jahu, atuo no ramo de programação de aplicações para Web. E busco desenvolver minhas habilidades em desenvolvimento Front-End e Back-End, além de exercitar minhas habilidades com Design, domínio da inglesa e aprofundar meus estudos em programação.</p>
            </article>
            <article className="social">
                <a href="https://github.com/helolah" target={'_blank'}>
                    <Icon.GitHub />
                    <p>GitHub</p>
                    <p className="link">/helolah</p> 
                </a>
                <a href="https://www.instagram.com/helolah/" target={'_blank'}>
                    <Icon.Instagram />
                    <p>Instagram</p>
                    <p className="link">@helolah</p> 
                </a>
                <a href="https://www.linkedin.com/in/helolah/" target={'_blank'}>
                    <Icon.Linkedin />
                    <p>LinkedIn</p>
                    <p className="link">/helolah</p> 
                </a>
            </article>
        </section>
    );
}

export default About;