import axios from 'axios'
export default {
  getUser: function (username, success, error) {
    axios
      .get('https://api.github.com/users/' + username)
      .then(
        response => success(response.data),
        response => error(response)
      )
  },
  getUserRepos: function (username, success, error) {
    axios
      .get('https://api.github.com/users/' + username + '/repos')
      .then(
        response => success(response.data),
        response => error(response)
      )
  }
}
