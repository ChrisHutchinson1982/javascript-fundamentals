const GithubClient = require("./githubClient");

class Github {
  constructor(client) {
    this.client = client;
    this.body = [];
  }

  fetch(repoName) {
    this.client.fetchRepositoryData(repoName, (body) => {
      this.body = body;
    });
  }

  getRepoData() {
    return this.body;
  }
}

// const client = new GithubClient();
// const github = new Github(client);
// github.fetch("sinatra/sinatra");

// setTimeout(() => {
//   const repoData = github.getRepoData();
//   console.log(repoData.id);
// }, 2000);

module.exports = Github;
