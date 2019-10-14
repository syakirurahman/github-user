<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import User from '../services/User'
export default {
  name: 'home',
  components: {
    Header
  },
  created() {
    alert('huha');
    User.getUser((data) => {
      console.log(data)
    }, (response) => {
        console.log(response)
    })
  }
}
</script>
