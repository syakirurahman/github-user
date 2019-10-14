<template>
  <div class="user">
    <div class="user-profile">
      <img v-if="user.avatar!=''" v-bind:src="user.avatar" width="50" class="rounded"/>
      <h6 v-if="user.name!=''">{{ user.name }}'s Repositories</h6>
    </div>
    <br/>
    <div class="container">
      <div class="row" id="v-repos">
        <div class="repo col-md-4" v-for="repo in repos" v-bind:key="repo.name">
          <router-link :to="{ name: 'repo', params: { username: repo.owner.login, name: repo.name }}">{{ repo.name }}</router-link>
          <p>{{ repo.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import User from '../services/User'

export default {
  name: 'home',
  data: function () {
    return {
      user: {
        avatar: '',
        name: ''
      },
      repos: [],
      message: ''
    }
  },
  mounted () {
    User.getUser(this.$route.params.username, (data) => {
      this.message = ''
      this.user = {
        avatar: data.avatar_url,
        name: data.name
      }
    }, (response) => {
      this.message = 'No User found.'
    })

    User.getUserRepos(this.$route.params.username, (data) => {
      this.message = ''
      data.forEach((repo) => {
        this.repos.push(repo)
      })
    }, (response) => {
      this.message = 'No Repository found.'
    })
  }
}
</script>
<style lang="scss">
  .repo {
    border:1px solid #ddd;
    padding:20px;
    overflow:hidden;
    a {
      margin:20px auto;
      display:block;
    }
  }
</style>
