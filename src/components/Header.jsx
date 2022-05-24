import logo from "../img/logo.png";
import logo2 from "../img/logo2.png";
import React from "react";

const header = () => {
  return (
    <div>
      <header>
        <ul className="menu">
          <li>
            {" "}
            <img src={logo} width="100px" />
          </li>
          <ul className="menu">
            <li>
              <a>Work</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Story</a>
            </li>
            <li>
              <a>Callery</a>
            </li>
            <li>
              <a>Shop</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </ul>
        <div className="menu-sud">
          <img src={logo2} />
          <p>
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </p>
        </div>
      </header>
      ;
    </div>
  );
};

export default header;
