import React, { Component } from "react";
import { Joke } from "../../Components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

class List extends Component {
  constructor() {
    super();
    this.state = {
      jokes: [],
    };
  }

  componentDidMount = async () => {
    const { location } = this.props;
    this.setState({ jokes: location.state.jokes });
  };

  toHome = () => {
    this.props.history.push({
      pathname: "/",
    });
  };

  render() {
    const { jokes } = this.state;
    return (
      <div>
        <button className="btn" onClick={this.toHome}>
          <FontAwesomeIcon icon={faHome} /> Voltar
        </button>
        <div className="joke-list">
          {jokes.map((joke) => {
            return Joke(joke);
          })}
        </div>
      </div>
    );
  }
}

export default List;
