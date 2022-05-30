import Welcome from '../components/main/Welcome';
import About from '../components/main/About';
import Skills from '../components/main/Skills';
import Services from '../components/main/Services';
import Projects from './main/Projects';
import Contact from './main/Contact';

function Main() {

    return (
        <div>
            <div className='nav-space'></div>
            <div className='white-space'></div>
            <Welcome />
            <div className='white-space'></div>
            <About />
            <Skills />
            <Services />
            <Projects />
            <Contact />
        </div>
    );
}

export default Main;