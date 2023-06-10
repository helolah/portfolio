function Footer() {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <article>
            <div className="footer-content">
                <p className="powered">Powered by <a href="https://github.com/helolah" target={'_blank'}>Heloisa</a>.</p>
                <p>&copy; {getCurrentYear()} Todos os direitos reservados.</p>
            </div>
        </article>
    );
}

export default Footer;