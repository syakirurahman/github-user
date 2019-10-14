<template>
  <div class="container">
    <div style="max-width:400px;margin:50px auto;">
      <form v-on:submit.prevent="onSubmit">
        <input type="text" v-model="username" placeholder="Type Github Username & Enter" class="form-control" required/>
        <br/>
        <div class="alert alert-danger" v-show="message!=''">{{ message }}</div>
      </form>
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
      username: '',
      message: ''
    }
  },
  mounted () {
  },
  methods: {
    onSubmit: function () {
      User.getUser(this.username, (data) => {
        this.message = ''
        this.$router.push({ name: 'user', params: { username: this.username } })
      }, (response) => {
        this.message = 'Username not found'
      })
    }
  }
}
</script>
