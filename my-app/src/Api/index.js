import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: "https://v2.jokeapi.dev/joke",
    });
  }

  getJokes = async (form) => {
    let urlParams = `/${form.categories.join()}`;
    let concat = "?";

    if (form.blacklists.length > 0) {
      urlParams = `${urlParams}${concat}blacklistFlags=${form.blacklists.join()}`;
      concat = "&";
    }

    if (form.search.length > 0) {
      urlParams = `${urlParams}${concat}contains=${form.search}`;
      concat = "&";
    }

    urlParams = `${urlParams}${concat}amount=${form.amount}`;

    const { data } = await this.api.get(`${urlParams}`);

    return data;
  };
}

export default new Api();
