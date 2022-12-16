const GithubClient = require("./githubClient");
const Github = require("./github");

describe("github integration", () => {
  it("gets the repo data fetched by the GithubClient class", (done) => {
    const client = new GithubClient();
    const github = new Github(client);
    github.fetch("sinatra/sinatra");

    setTimeout(() => {
      const repoData = github.getRepoData();
      expect(repoData.id).toBe(106995);
      done();
    }, 2000);
  });
  // it("gets the repo data fetched by the GithubClient class usuing await", async () => {
  //   const client = new GithubClient();
  //   const github = new Github(client);
  //   const fetch = await github.fetch("sinatra/sinatra");
  //   const repoData = await github.getRepoData();
  //   expect(repoData.id).toBe(106995);
  // });
});
