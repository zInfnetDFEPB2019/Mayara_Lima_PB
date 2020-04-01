<template>
  <div>
    <h2>
      {{ taskById(id).title }}
      <span v-if="taskById(id).completed">
        <md-icon>done</md-icon>
      </span>
      <span v-else>
        <md-icon>clear</md-icon>
      </span>
      <router-link tag="button" :to="{ name: 'edit-task', params: { id: id } }">
        <md-icon>edit</md-icon>
      </router-link>
    </h2>
    <p>{{ taskById(id).description }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DetailPage",
  data: function() {
    return {
      id: this.$route.params.id
    };
  },
  computed: mapGetters(["taskById"])
};
</script>

<style scoped>
</style>
