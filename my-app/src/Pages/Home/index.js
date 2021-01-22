import React, { Component } from "react";
import Api from "../../Api";
import "./style.css";

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
      <main>
        <h1>Vamos buscar novas piadas?</h1>
        <button onClick={this.searchJoke}>Buscar Piadas</button>
        {error && <h3>{error}</h3>}
      </main>
    );
  }
}

export default Home;
