import * as Icon from 'react-feather';

function Services() {

    return (
        <section id="services">
            <h2>Serviços</h2>
            <article className="content">
                <div className="item">
                    <Icon.Code color="#013C89" size={52} />
                    <h4>Website</h4>
                    <p>Construção de Websites institucionais e pessoais, blogs e sistemas web no geral.</p>
                </div>
                <div className='whiteSpace'></div>
                <div className="item">
                    <Icon.Monitor color="#013C89" size={52} />
                    <h4>Landing Page</h4>
                    <p>Desenvolvimento de Landing Pages para captura de público para seu negócio.</p>
                </div>
                <div className='whiteSpace'></div>
                <div className="item">
                    <Icon.MousePointer color="#013C89" size={52} />
                    <h4>Hotsite</h4>
                    <p>Criação de Hotsites para a divulgação de seus produtos de forma profissional.</p>
                </div>
            </article>
        </section>
    );
}

export default Services;