const core = require('@actions/core');
const { HttpClient } = require('@actions/http-client');
const fs = require("fs/promises");

const { URLSearchParams } = require('url');

const doGet = async (url) => {
  const headers = {
    Authorization: `Bearer ${core.getInput("TOKEN")}`
  }
  const client = new HttpClient('client', [], { headers })
  return (await client.getJson(url)).result;
}

const getRepoContributors = async (owner, repo, query) => {
  console.info(`Getting ${owner}/${repo} contributors`);
  return await doGet(`https://api.github.com/repos/${owner}/${repo}/contributors?${query}`);
}

const listOrgRepos = async (org, query) => {
  console.info(`Getting repos from ${org}`);
  const result = [];
  const paginate = async (page) => {
    const next = await doGet(`https://api.github.com/orgs/${org}/repos?${new URLSearchParams({...query, page})}`);
    result.push(...next);
    if (next.length || page > 10) { // page > 10 as safeguard
      await paginate(page + 1);
    }
    return result;
  }

  return await paginate(1);
}

const getUser = async (user, query) => {
  console.info(`Getting user info for ${user}`);
  return await doGet(`https://api.github.com/users/${user}?${new URLSearchParams(query)}`);
}

const generateOutput = async (payload) => {
  await fs.writeFile("contributors.json", payload)
}

(async () => {
  const owner = 'okfn-brasil';
  const repoNames = (await listOrgRepos(owner, { per_page: 100, type: 'public' }))
    .filter(repo => !repo.archived)
    .filter(repo => repo.name.includes("querido-diario"))
    .map(repo => repo.name);

  const contribMap = {};
  for (const repo of repoNames) {
    contribMap[repo] = [];

    const contributors = (await getRepoContributors(owner, repo))
      .map(c => c.login)

    for (const contributor of contributors) {
      const user = await getUser(contributor)
      if (user.name) {
        contribMap[repo].push(user.name)
      }
    }
  }

  generateOutput(JSON.stringify(contribMap));

})()
