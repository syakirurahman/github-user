import axios from 'axios'
export default {
  getUser(success, error) {
    axios
      .get('https://api.github.com/users/syakirurahman')
      .then(
        response => success(response.data),
        response => error(response)
      )
  }
}
