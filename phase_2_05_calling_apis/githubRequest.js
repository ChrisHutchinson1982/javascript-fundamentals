// file: githubRequest.js

// Load the `get` function.
const { get } = require("callback-fetch");

// Create a "handler" callback function.
const handleReceivedResponse = (body) => {
  const objectValue = JSON.parse(body);
  console.log(objectValue.id);
};

const url = "https://api.github.com/repos/sinatra/sinatra";

get(url, handleReceivedResponse);
