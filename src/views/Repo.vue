<template>
  <div class="repo">
    <div class="container text-left">
      <VueShowdown :markdown="markdown" flavor="github">
      </VueShowdown>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Repo from '../services/Repo'
import { VueShowdown } from 'vue-showdown'

export default {
  name: 'home',
  components: {
    VueShowdown
  },
  data: function () {
    return {
      markdown: '',
      message: ''
    }
  },
  mounted () {
    Repo.getRepo(this.$route.params.username, this.$route.params.name, (data) => {
      this.message = ''
      Repo.getRepoReadme(data.download_url, (response) => {
        this.markdown = response.data
      }, (response) => {
        this.markdown = ''
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
