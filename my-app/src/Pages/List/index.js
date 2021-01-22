import React, { Component } from "react";
import { Joke } from "../../Components";
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

  render() {
    const { jokes } = this.state;
    return (
      <div>
        {jokes.map((joke) => {
          return Joke(joke);
        })}
      </div>
    );
  }
}

export default List;
