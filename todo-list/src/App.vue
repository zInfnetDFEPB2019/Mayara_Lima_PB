<template>
  <div id="app" class="container">
    <PageContainer />
  </div>
</template>

<script>
import PageContainer from './components/PageContainer.vue';
export default {
  name: 'App',
  components: {
    PageContainer,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Material+Icons');
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

* {
  font-family: 'Montserrat', sans-serif;
}

#app {
  min-height: 100vh;
}
</style>
