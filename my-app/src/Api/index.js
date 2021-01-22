import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: "https://v2.jokeapi.dev/joke",
    });
  }

  getJokes = async () => {
    const urlParams = "/Any?type=single&amount=10";

    try {
      const { data } = await this.api.get(`${urlParams}`);
      if (data.error) {
        throw data.error;
      }

      return data.jokes;
    } catch (error) {
      console.error(`#Api.getJokes error: ${error}`);
      return error;
    }
  };
}

export default new Api();
