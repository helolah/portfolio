import ataesp from "../../assets/img/ataesp.jpg";
import galdino from "../../assets/img/galdino.jpg";

function Projects() {

    return (
        <section id="projects">
            <h2>Projetos</h2>
            <article className="content">
                <div className="item">
                    <a href="http://www.ata.org.br" target='blank' title='Ir para o site'>
                        <img src={ataesp} alt="Imagem da página inicial do site ATAESP" />
                        <h4>ATAESP</h4>
                        <p>Website institucional voltado para a área de transportes, com uma sessão no modelo de blog e área para login.</p>
                    </a>
                </div>
                <div className='whiteSpace'></div>
                <div className="item">
                    <a href="https://galdinoimplantes.com.br" target='blank' title='Ir para o site'>
                        <img src={galdino} alt="Imagem da página inicial do site Galdino" />
                        <h4>GALDINO</h4>
                        <p>Website institucional voltado para a área de odontologia, com uma sessão no modelo de blog.</p>
                    </a>
                </div>
            </article>
        </section>
    );
}

export default Projects;