const axios = require("axios");

const {config} = require("./index");

const basePath = config.ENDPOINT;

class Axios {
  static async call(action, url, payload, headers) {
    const options = {
      method: action,
      url: `${basePath}/${url}`, headers: headers,
      data: payload,
    };
    try {
      return await axios.request(options);
    } catch (err) {
      throw err
    }
  }
}

module.exports.Axios = Axios;
