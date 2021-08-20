const fetch = require ('node-fetch');

const getUserReposUrl = (username) => `https://api.github.com/users/${username}`;

// recupera info do user a partir do username:
const getRepositoryInfoFromUsername = async (username) => {
  const url = getUserReposUrl(username);
  const response = await fetch(url);

  const repositoryInfo = await response.json();

  let {name, company, twitter_username: twitter, location} = repositoryInfo;

  return {
    name,
    company,
    twitter,
    location
  }
}

getRepositoryInfoFromUsername('gfpoliva')
  .then((data) => console.log(data));

module.exports = {
  getRepositoryInfoFromUsername,
  getUserReposUrl
};