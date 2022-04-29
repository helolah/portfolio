import Welcome from '../components/main/Welcome';
import About from '../components/main/About';

function Main() {

    return (
        <div>
            <div className='white-space'></div>
            <Welcome />
            <div className='white-space'></div>
            <About />
            <div className='white-space'></div>
        </div>
    );
}

export default Main;