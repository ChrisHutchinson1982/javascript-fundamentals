const { get } = require("callback-fetch");

const fetchJson = (url, callBack) => {
  get(url, (body) => {
    return callBack(JSON.parse(body));
  });
};

fetchJson("https://jsonplaceholder.typicode.com/todos", (response) => {
  console.log(response);
});
