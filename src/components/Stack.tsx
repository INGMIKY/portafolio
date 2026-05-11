import html from "../assets/img/stack/html.png";
import css from "../assets/img/stack/css.png";
import js from "../assets/img/stack/javascript.png";
import ts from "../assets/img/stack/typescript.png";
import tw from "../assets/img/stack/tailwind.png";
import react from "../assets/img/stack/react.png";
import node from "../assets/img/stack/nodejs.png";
import express from "../assets/img/stack/express.png";
import git from "../assets/img/stack/git.png";
import vs from "../assets/img/stack/visualstudio.png";
import figma from "../assets/img/stack/figma.png";

const Stack = () => {
  return (
    <section className="Stacks">
      <h2>Stack</h2>
      <div className="stackContainer">
        <ul>
          <li className="stack" style={{ backgroundColor: "#ef652a41" }}>
            <p className="stack-text">HTML</p>
            <span className="icon-stack icon-html">
              <img src={html.src} alt="" />
            </span>
          </li>
          <li className="stack" style={{ backgroundColor: "#30a8dc46" }}>
            <p className="stack-text">CSS</p>
            <span className="icon-stack icon-css">
              <img src={css.src} alt="" />
            </span>
          </li>
          <li className="stack" style={{ backgroundColor: "#f0da4f36" }}>
            <p className="stack-text">JavaScript</p>
            <span className="icon-stack icon-css">
              <img src={js.src} alt="" />
            </span>
          </li>
          <li className="stack" style={{ backgroundColor: "#3179c642" }}>
            <p className="stack-text">TypeScript</p>
            <span className="icon-stack icon-css">
              <img src={ts.src} alt="" />
            </span>
          </li>
          <li className="stack" style={{ backgroundColor: "#17bab734" }}>
            <p className="stack-text">Tailwind</p>
            <span className="icon-stack icon-css">
              <img src={tw.src} alt="" />
            </span>
          </li>
          <li className="stack" style={{ backgroundColor: "#00d9ff2f" }}>
            <p className="stack-text">React</p>
            <span className="icon-stack icon-css">
              <img src={react.src} alt="" />
            </span>
          </li>
          <li className="stack" style={{ backgroundColor: "#549e4331" }}>
            <p className="stack-text">NodeJS</p>
            <span className="icon-stack icon-css">
              <img src={node.src} alt="" />
            </span>
          </li>
          <li className="stack" style={{ backgroundColor: "#fafafa31" }}>
            <p className="stack-text">Express</p>
            <span className="icon-stack icon-css">
              <img src={express.src} alt="" />
            </span>
          </li>
          <li className="stack" style={{ backgroundColor: "#de4c363b" }}>
            <p className="stack-text">Git</p>
            <span className="icon-stack icon-css">
              <img src={git.src} alt="" />
            </span>
          </li>
          <li className="stack" style={{ backgroundColor: "#3daaf234" }}>
            <p className="stack-text">VS Code</p>
            <span className="icon-stack icon-css">
              <img src={vs.src} alt="" />
            </span>
          </li>
          <li className="stack" style={{ backgroundColor: "#aa5fff34" }}>
            <p className="stack-text">Figma</p>
            <span className="icon-stack icon-css">
              <img src={figma.src} alt="" />
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Stack;
