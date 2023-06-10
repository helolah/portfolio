import * as Icon from 'react-feather';

function About() {

    const getMyAge = () => {
        return new Date().getFullYear().toString().substr(-2);
    };

    return (
        <section id="about">
            <h2>Quem sou</h2>
            <article>
                <p>
                    Meu nome é Heloisa Fernanda, tenho {getMyAge()} anos e moro no interior de São Paulo. Sou formada no curso de Sistemas para Internet pela <a href="http://fatecjahu.edu.br/" target={'_blank'}>FATEC Jahu</a>, e atuo no ramo de programação de aplicações para Web, onde minhas atividades profissionais se focam tanto no Front-end, quanto Back-End e Web Design.
                    <br/><br/>
                    Atualmente trabalho como programadora Web freelancer, desenvolvendo diversas plataformas para eventos online e presenciais. Além disso, tenho projetos de estudos em ReactJS que você pode verificar mais abaixo na sessão de "Projetos" ou acessando meu perfil no <a href="https://github.com/helolah" target={'_blank'}>Github!</a>
                </p>
            </article>
            {/* <article className="social">
                <a href="https://github.com/helolah" target={'_blank'}>
                    <Icon.GitHub />
                    <p className="link">/helolah</p> 
                </a>
                <a href="https://www.instagram.com/helolah/" target={'_blank'}>
                    <Icon.Instagram />
                    <p className="link">@helolah</p> 
                </a>
                <a href="https://www.linkedin.com/in/helolah/" target={'_blank'}>
                    <Icon.Linkedin />
                    <p className="link">/helolah</p> 
                </a>
            </article> */}
        </section>
    );
}

export default About;