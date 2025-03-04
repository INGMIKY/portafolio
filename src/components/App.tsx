import '../styles/App.css';
import linkedin from '../assets/img/linkedin.png'
import github from '../assets/img/github.png'
import yo from '../assets/img/avatar.webp'

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
                <section className='proyects'>

                </section>
            </main>
        </>
    )
}

export default App;