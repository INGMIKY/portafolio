import isladent from "../assets/img/isladent.jpg";
import iaGame from "../assets/img/ia.png";
import bateria from "../assets/img/bateriaMusical.png";
import Alura from "../assets/img/aluraLatam.png";
const Projects = () => {
  return (
    <section className="projects" id="proyectos">
      <h2>Proyectos</h2>
      <div className="proyectosContainer">
        <div className="vertical1">
          <article>
            <a href="https://isladent.site/" className="enlacesProjects">
              <h3 className="tituloResaltado">isladent</h3>
              <p>
                Un sitio web tipo landing page simple pero atractivo para una
                clínica dental, diseñado para mostrar su ubicación, horarios de
                atención y información de contacto.
              </p>
              <img className="imgProyectos" src={isladent.src} alt="" />
            </a>
          </article>
          <article>
            <a
              href="https://ingmiky.github.io/juego-secreto/"
              className="enlacesProjects"
            >
              <h3 className="tituloResaltado">Juego: número secreto</h3>
              <p>
                Proyecto web interactivo de un juego de adivinanza donde el
                usuario debe descubrir un número aleatorio generado por la
                aplicación. El juego incluye pistas para guiar al usuario y un
                contador de intentos.
              </p>
              <img
                className="imgProyectos imgJuegoSecreto"
                src={iaGame.src}
                alt=""
              />
            </a>
          </article>
          <article>
            <a
              href="https://ingmiky.github.io/javaScript-paginaDinamica/"
              className="enlacesProjects"
            >
              <h3 className="tituloResaltado">Bateria músical</h3>
              <p>
                Aplicación web interactiva que simula un instrumento musical
                digital. Cuenta con una interfaz de botones que, al ser
                presionados, reproducen distintas notas musicales, permitiendo
                al usuario crear melodías sencillas directamente desde el
                navegador.
              </p>
              <img
                className="imgProyectos imgBateria"
                src={bateria.src}
                alt=""
              />
            </a>
          </article>
        </div>
        <div className="vertical2">
          <article>
            <a href="#" className="enlacesProjects">
              <h3 className="tituloResaltado">Registro de alumnos</h3>
              <p>
                Proyecto académico que tiene como objetivo crear una aplicación
                para registro de alumnos. La app permite ingresar datos
                personales con validaciones específicas, almacenarlos en una
                base de datos MySQL y posteriormente realizar operaciones de
                modificación y eliminación de los registros.
              </p>
            </a>
          </article>
          <article>
            <a
              href="https://ingmiky.github.io/pagina-encriptador/"
              className="enlacesProjects"
            >
              <h3 className="tituloResaltado">Encriptador y Desencriptador</h3>
              <p>
                Proyecto desarrollado para Alura Latam que consiste en una
                aplicación web de encriptación y desencriptación de mensajes de
                texto. Permite al usuario convertir texto normal en mensajes
                codificados y viceversa mediante un algoritmo personalizado de
                sustitución de caracteres
              </p>
              <img className="imgProyectos" src={Alura.src} alt="" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects;
