function Footer() {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <div className="footer-content">
            <p>Powered by <a href="https://github.com/helolah" target={'_blank'}>Helolah</a> - &copy; {getCurrentYear()} Todos os direitos reservados.</p>
        </div>
    );
}

export default Footer;