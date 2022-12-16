const { get } = require("callback-fetch");

const fetchJson = (url, callBack) => {
  get(url, (body) => {
    return callBack(JSON.parse(body));
  });
};

object = fetchJson("https://jsonplaceholder.typicode.com/todos", (response) => {
  console.log(response);
});
