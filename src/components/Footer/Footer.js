import React from "react";
import "../Footer/footer.css";

import { RiLinkedinBoxLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const footer = () => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/mayk-gomes-11b86222b/"
              target="_blank"
              rel="noreferrer"
            >
              <RiLinkedinBoxLine className="options-contact" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MaykGomes92"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="options-contact" />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=5521980748627&text=Deseja%20contatar%20por%20algum%20motivo%20?%20S%C3%B3%20chamar%20o/"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoWhatsapp className="options-contact" />
            </a>
          </li>
        </ul>
      </nav>
      <article>
        <h2>
          Este é um projeto pessoal, usado para treinar meus conhecimentos em
          react !
        </h2>
      </article>
    </footer>
  );
};

export default footer;
