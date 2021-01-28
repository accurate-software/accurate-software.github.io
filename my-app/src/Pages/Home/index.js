import React, { Component } from "react";
import Api from "../../Api";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      error: "",
    };
  }

  searchJoke = async () => {
    try {
      const jokes = await Api.getJokes();
      this.props.history.push({
        pathname: "/list",
        state: {
          jokes,
        },
      });
    } catch (error) {
      this.setState({ error: "Nenhuma piada encontrada!" });
    }
  };

  render() {
    const { error } = this.state;
    return (
      <div>
        <main>
          <h1>Vamos buscar novas piadas?</h1>
          <button className="btn" onClick={this.searchJoke}>
            Buscar Piadas
            <FontAwesomeIcon icon={faSearch} />
          </button>
          {error && <h3>{error}</h3>}
        </main>
        <footer>
          <a href="https://github.com/gomesmillena29/" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/millena-gomes/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </footer>
      </div>
    );
  }
}

export default Home;
