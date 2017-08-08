<template>
  <div>
    <h2 class="sub-header">正在热映</h2>
    <p v-if="subjects.length === 0">拼命的加载中。。。</p>
    <div class="list-group">
      <a
        href="#"
        class="list-group-item"
        v-for="item in subjects">
        <div class="media">
          <div class="media-left">
            <img class="media-object" :src="item.images.small" alt="...">
          </div>
          <div class="media-body">
            <h4 class="media-heading">{{ item.title }}</h4>
            <p>导演：xxx</p>
            <p>演员：xxx</p>
          </div>
        </div>
      </a>
    </div>
    <button class="btn btn-default">加载更多。。。</button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        subjects: []
      }
    },
    created () {
      this.loadMovies()
    },
    methods: {
      loadMovies () {
        axios.get('/douban/movie/in_theaters')
          .then(res => {
            this.subjects = res.data.subjects
          })
      }
    }
  }
</script>

<style>

</style>
