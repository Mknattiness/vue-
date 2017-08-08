<template>
  <div id="app">
    <navbar></navbar>
    <div class="container-fluid">
      <div class="row">
        <sidebar></sidebar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/common/Navbar'
import Sidebar from './components/common/Sidebar'
export default {
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style>
</style>
