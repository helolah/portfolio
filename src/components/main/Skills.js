import * as Fa from 'react-icons/fa';
import * as Si from 'react-icons/si';

function Skills() {

    return (
        <section id="skills">
            <h2>Skills</h2>
            <article className="content">
                <div className="item">
                    <Fa.FaHtml5 size={70} className="icon" />
                    <h4>HTML</h4>
                </div>
                <div className='whiteSpace'></div>
                <div className="item">
                    <Fa.FaCss3Alt size={70} className="icon" />
                    <h4>CSS</h4>
                </div>
                <div className='whiteSpace'></div>
                <div className="item">
                    <Si.SiJavascript size={70} className="icon" />
                    <h4>JavaScript</h4>
                </div>
                <div className='whiteSpace'></div>
                <div className="item">
                    <Fa.FaLaravel size={70} className="icon" />
                    <h4>Laravel</h4>
                </div>
                <div className='whiteSpace'></div>
                <div className="item">
                    <Fa.FaSass size={70} className="icon" />
                    <h4>Sass</h4>
                </div>
                <div className='whiteSpace'></div>
                <div className="item">
                    <Fa.FaReact size={70} className="icon" />
                    <h4>ReactJS</h4>
                </div>
                <div className='whiteSpace'></div>
            </article>
        </section>
    );
}

export default Skills;