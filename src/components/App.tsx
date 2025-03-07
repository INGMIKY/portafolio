import '../styles/App.css';
import linkedin from '../assets/img/linkedin.png'
import github from '../assets/img/github.png'
import yo from '../assets/img/yo10R.png'
import logo from '../assets/img/logo2.png'
import isladent from '../assets/img/isladent.jpg'

const App = () => {
    return (
        <>
            <span className='glow'></span>
            <nav>
                <div>Miguel</div>
                <ul>
                    <li>Inicio</li>
                    <li>Sobre mi</li>
                    <li>Proyectos</li>
                </ul>
            </nav>
            <main className='sectionContainer'>
                <section className='home'>
                    <h1>Miguel A. Barrera</h1>
                    <h2>Ingeniero en desarrollo de software</h2>
                    <p>Aprendizaje constante para ser el mejor</p>
                </section>
                <section className="about">
                    <div className='avatar'>
                        <img src={yo.src} alt="" />
                    </div>
                    <div className='aboutInfoContainer'>
                        <div className='redesContainer'>
                            <button className='btnCV'>Descargar CV</button>
                            <ul className='redesSociales'>
                                <li><a href="https://www.linkedin.com/in/miguel-barrera-sima-a69a622aa/" className='glowRedes'><img src={linkedin.src} alt="" /></a></li>
                                <li><a href="https://github.com/INGMIKY" className='glowRedes'><img src={github.src} alt="" /></a></li>
                            </ul>
                        </div>
                        <p className='aboutMe'>Estudiante de Ingeniería en Desarrollo de Software con enfoque en desarrollo web frontend. Combino educación formal con aprendizaje autodidacta. Persona empática y colaborativa que valora el trabajo en equipo, el intercambio de conocimientos y el crecimiento profesional continuo en desarrollo web.</p>
                    </div>
                </section>
                <section className='projects'>
                    <h2>Proyectos</h2>
                    <div className='proyectosContainer'>
                        <div className='vertical1'>
                            <article>
                                <a href="#" className='enlacesProjects'>
                                    <h3 className='tituloResaltado'>isladent</h3>
                                    <p>Un sitio web tipo landing page simple pero atractivo para una clínica dental, diseñado para mostrar su ubicación, horarios de atención y información de contacto.</p>
                                    <img className='imgProyectos' src={isladent.src} alt="" />
                                </a>
                            </article>
                        </div>
                        <div className='vertical2'>
                            <article>
                                <a href="#" className='enlacesProjects'>
                                    <h3 className='tituloResaltado'>Registro de alumnos</h3>
                                    <p>Proyecto académico que tiene como objetivo crear una aplicación para registro de alumnos. La app permite ingresar datos personales con validaciones específicas, almacenarlos en una base de datos MySQL y posteriormente realizar operaciones de modificación y eliminación de los registros.</p>
                                </a>
                            </article>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default App;