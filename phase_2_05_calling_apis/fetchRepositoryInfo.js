const { get } = require("callback-fetch");

const fetchRepositoryInfo = (repo, callBack) => {
  get(`https://api.github.com/repos/${repo}`, (body) => {
    return callBack(JSON.parse(body));
  });
};

fetchRepositoryInfo("sinatra/sinatra", (receivedResponse) => {
  console.log(receivedResponse);
});
