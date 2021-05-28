const axios = require("axios").default;

const create = (data) => {
  return axios
    .post("https://football-player-game-server.herokuapp.com/" + "users", data)
    .then((data) => console.warn(data))
    .catch((err) => console.warn(err));
};

create({ email: "2342342342@gmail.com" });
