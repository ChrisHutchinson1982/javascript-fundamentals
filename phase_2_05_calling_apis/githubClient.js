const { get } = require("callback-fetch");

class GithubClient {
  fetchRepositoryData(repoName, callBack) {
    get(`https://api.github.com/repos/${repoName}`, (body) => {
      const repoData = JSON.parse(body);
      callBack(repoData);
    });
  }
}

// const client = new GithubClient();

// client.fetchRepositoryData("sinatra/sinatra", (repositoryData) => {
//   console.log(repositoryData);
// });

module.exports = GithubClient;
