import axios from 'axios'
export default {
  getRepo: function (username, repo, success, error) {
    axios
      .get('https://api.github.com/repos/' + username + '/' + repo + '/contents/README.md')
      .then(
        response => success(response.data),
        response => error(response)
      )
  },
  getRepoReadme: function (url, success, error) {
    axios
      .get(url)
      .then(
        response => success(response),
        response => error(response)
      )
  }
}
