import '../styles/App.css';


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
                        hola
                    </div>
                    <div className='aboutInfoContainer'>
                        <div>cv</div>
                        <div>redes</div>
                        <div>about</div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default App;